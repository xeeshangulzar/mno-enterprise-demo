#!/usr/bin/env bash

export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
export AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
export S3_ENDPOINT="http://localhost:9000"

docker run -P \
    -e "MINIO_BUCKET=app-bucket" \
    -e "MINIO_ACCESS_KEY=$AWS_ACCESS_KEY_ID" \
    -e "MINIO_SECRET_KEY=$AWS_SECRET_ACCESS_KEY" \
    --memory="256M" \
    --rm -it  \
    --name minio \
    maestrano/minio
