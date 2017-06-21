#!/usr/bin/env bash
#
# Codeship deployment scripts
# Build the frontend and upload the package to S3
#
# Required ENV vars:
#   - NEX_APP_WH the Nex!™ deploy webhook for the app
#   - AWS_DEFAULT_REGION
#   - AWS_ACCESS_KEY_ID
#   - AWS_SECRET_ACCESS_KEY

# source ~/.nvm/nvm.sh

# Options
# set -o nounset # Error on undef variables
set -o errexit # Exit on error

# Repo is maestrano/acme-enterprise
export APP_NAME=${CI_REPO_NAME#maestrano/}

# Use proper ruby version
rvm use "$(cat .ruby-version)" --install

# Update bundler version
gem install bundler
bundle install

# Install npm
# nvm use 6
npm install -g bower

# PhantomJS
export PHANTOMJS_VERSION="1.9.8"
export PHANTOMJS_HOST="https://s3.amazonaws.com/codeship-packages"
\curl -sSL https://raw.githubusercontent.com/codeship/scripts/master/packages/phantomjs.sh | bash -s

# Build the frontend
bower cache clean
bin/rake mnoe:frontend:build
bin/rake mnoe:admin:build

# Tar and upload to S3 bucket
tar -czf app.tar.gz ./* ./.??* --exclude=*.tar.gz --exclude=tmp --exclude=spec --exclude=log --exclude=doc --exclude=coverage
pip install awscli

# Check if it's a tag (ie: branch start with "v")
if [[ "${CI_BRANCH}" == v* ]]
then
  echo "We have a tag! Preparing release..."
  aws s3 cp app.tar.gz "s3://mnoe-packages/frontends/${APP_NAME}/releases/${CI_BRANCH}.tar.gz"
  aws s3 cp app.tar.gz "s3://mnoe-packages/frontends/${APP_NAME}/releases/latest.tar.gz"
else
  echo "No tag! Regular build..."
  aws s3 cp app.tar.gz "s3://mnoe-packages/frontends/${APP_NAME}/${CI_BRANCH}/${CI_BUILD_NUMBER}.tar.gz"
  aws s3 cp app.tar.gz "s3://mnoe-packages/frontends/${APP_NAME}/${CI_BRANCH}/latest.tar.gz"
fi

# TODO: Clean old builds

# Ping Nex!
if [ -n "${NEX_APP_WH}" ]
then
  curl -X POST "${NEX_APP_WH}&after=latest.tar.gz&sender\[login\]=${CI_COMMITTER_USERNAME}"
fi
