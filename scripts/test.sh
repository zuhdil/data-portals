#!/usr/bin/env bash

set -e


if [ $(uname -s) = "Linux" ]; then
    echo "Remove __pycache__ files"
    sudo find . -type d -name __pycache__ -exec rm -r {} \+
fi

docker-compose build

# Remove possibly previous broken stacks left hanging after an error
docker-compose down -v --remove-orphans

docker-compose up -d
docker-compose exec -T backend python ./wait_for_database.py
docker-compose exec -T backend ./scripts/lint.sh
docker-compose exec -T backend ./scripts/test.sh
docker-compose exec -T frontend npm run typecheck
docker-compose exec -T frontend npm run lint
docker-compose exec -T frontend npm run test

# Teardown
docker-compose down -v --remove-orphans
