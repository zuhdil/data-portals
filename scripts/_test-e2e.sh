#!/usr/bin/env sh

set -e

function log {
   echo "$(date +"%T") - $*"
}

function get_status {
  echo $(curl --output /dev/null --silent --head --write-out %{http_code} $1)
}

function test_status {
  local status=$(get_status "$2")
  if [ "$status" -ne "$1" ]; then
    log Failed to load "$2" with expected status "$1" got "$status".
    exit 1
  fi
  printf "."
}

BASE_URL=http://localhost
HTTP_OK=200
HTTP_ERRORS_START=400

MAX_ATTEMPTS=120
ATTEMPTS=0
RESPONSE_STATUS="${HTTP_ERRORS_START}"

log Waiting for application to be ready ...
while [[ "${RESPONSE_STATUS}" -ge ${HTTP_ERRORS_START} && "${ATTEMPTS}" -lt "${MAX_ATTEMPTS}" ]]; do
    RESPONSE_STATUS=$(get_status "${BASE_URL}")
    let ATTEMPTS+=1
    sleep 1
done

if [[ "${RESPONSE_STATUS}" -ge ${HTTP_ERRORS_START} ]]; then
  log Application takes too long to respond!
  exit 1
fi

log Running end-to-end testing

test_status "${HTTP_OK}" "$BASE_URL/ping"

echo ""
log Done!
