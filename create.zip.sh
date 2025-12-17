#!/bin/bash

zip -rq9 \
    --exclude=".git/*" \
    --exclude="Old/*" \
    --exclude="create.zip.sh" \
    ../baylang-theme.zip .
