#!/bin/bash

PKG=$(echo "@symbo.ls/")$(echo "{}")
NAME_IT="cd {} && rm package.json && yarn init -y && json -I -f package.json -e \"this.name='$PKG'\" && sed 's/\.\///g' package.json > file.json && sed 's/\([a-z0-9]\)\([A-Z]\)/\1-\2/g' file.json > file2.json && rm file.json && mv -f file2.json package.json && json -I -f package.json -e \"this.version='0.0.1'\" && json -I -f package.json -e \"this.main='src/index.js'\""
find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "${NAME_IT}" \;

