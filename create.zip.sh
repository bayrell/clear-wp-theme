#!/bin/bash

SCRIPT=$(readlink -f $0)
BASEPATH=`dirname "$SCRIPT"`

cd $BASEPATH

zip -rq9 \
    --exclude=".git/*" \
    --exclude="Old/*" \
    --exclude="create.zip.sh" \
    ../clear-theme.zip .
