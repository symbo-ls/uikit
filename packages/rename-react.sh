#!/bin/bash

# name it
PKG=$(echo "@symbo.ls/react-")$(echo "{}")
NAME_IT="cd {} && cd packages/react && rm package.json && yarn init -y && json -I -f package.json -e \"this.name='$PKG'\" && sed 's/\.\///g' package.json > file.json && sed 's/\([a-z0-9]\)\([A-Z]\)/\1-\2/g' file.json > file2.json && rm file.json && mv -f file2.json package.json && json -I -f package.json -e \"this.version='0.0.1'\" && echo \"'use strict'\" > index.js"
find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "${NAME_IT}" \;