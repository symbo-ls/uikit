#!/bin/bash

# Init
# find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd {} && rm package.json && yarn init -y" \;

# name it
# PKG=$(echo "@symbo.ls/")$(echo "{}")
# NAME_IT="cd {} && json -I -f package.json -e \"this.name='$PKG'\" "
# find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "${NAME_IT}" \;

# clean name
# CLEAN_NAME="cd {} && sed 's/\.\///g' package.json > file.json"
# find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "${CLEAN_NAME}" \;

# kebab-case
# CLEAN_NAME="cd {} && sed 's/\([a-z0-9]\)\([A-Z]\)/\1-\2/g' file.json > file2.json"
# find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "${CLEAN_NAME}" \;

# move file.json to package.json
# CLEAN_NAME="cd {} && rm file.json && mv -f file2.json package.json"
# find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "${CLEAN_NAME}" \;

# version
# find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd {} && json -I -f package.json -e \"this.version='0.0.1'\" " \;

# src
find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd {} && json -I -f package.json -e \"this.main='index.js'\" " \;
