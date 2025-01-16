#!/bin/bash

zip -rq9 \
    --exclude=".git/*" \
    --exclude="bin/" \
    --exclude="LICENSE" \
    --exclude="create.zip.sh" \
    clear-wp-theme.zip .
