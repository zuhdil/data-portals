#!/usr/bin/env bash

set -e

docker-compose -f docker-compose.e2e.prod.yml build

# Remove possibly previous broken stacks left hanging after an error
docker-compose -f docker-compose.e2e.prod.yml down -v --remove-orphans

docker-compose -f docker-compose.e2e.prod.yml up -d
docker-compose -f docker-compose.e2e.prod.yml exec -T backend python ./wait_for_database.py
docker-compose -f docker-compose.e2e.prod.yml exec -T tester ./e2e.sh

# Teardown
docker-compose -f docker-compose.e2e.prod.yml down -v --remove-orphans
