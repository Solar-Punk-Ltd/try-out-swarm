#!/bin/bash

bee="./dist/bee-darwin-arm64-2.4.0"
dir=./bee-data-dir


"$bee" start \
  --verbosity 5 \
  --data-dir "$dir" \
  --password-file "$dir/password" \
  --swap-enable=true \
  --blockchain-rpc-endpoint https://xdai.fairdatasociety.org \
  --full-node=false \
  --cors-allowed-origins="*"
