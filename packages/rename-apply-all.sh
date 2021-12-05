#!/bin/bash

# Init
npx lerna exec -- json -I -f package.json -e "this.source='\"src/index.js\"'"