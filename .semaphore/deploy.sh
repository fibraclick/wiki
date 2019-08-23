#!/bin/bash
set -e
cd $DESTINATION

echo "Linking current to revision: $REVISION"
rm -f current
ln -s releases/$REVISION current

echo "Removing old releases"
cd releases && ls -t | tail -n +3 | xargs rm -rf

exit
