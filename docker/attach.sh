#!/usr/bin/env bash

ctr_id=$(docker ps |grep "local/mnoe-demo" | awk '{print $1}')

docker exec -it ${ctr_id} bash
