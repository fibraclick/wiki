#!/bin/bash
set -e
cd /usr/local/openresty/nginx/www/fibraclick-wiki

if [ -d "releases/$REVISION" ];
then
    echo "Removing: releases/$REVISION"
    rm -rf releases/$REVISION;
fi
if [ ! -d "releases/$REVISION" ];
then
    echo "Creating: releases/$REVISION"
    cp -dR deploy-cache releases/$REVISION;
fi

echo "Linking current to revision: $REVISION"
rm -f current
ln -s releases/$REVISION current

echo "Removing old releases"
cd releases && ls -t | tail -n +3 | xargs rm -rf

exit
