#!/usr/bin/env bash

docker run -P  \
    --env-file ./docker/docker_env.list \
    --rm -it  \
    local/mnoe-demo:0.2

