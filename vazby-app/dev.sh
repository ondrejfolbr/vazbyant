#!/bin/sh
export PATH="/Users/ondrejfolbr/.nvm/versions/node/v24.14.1/bin:$PATH"
exec node node_modules/.bin/next dev --turbopack "$@"
