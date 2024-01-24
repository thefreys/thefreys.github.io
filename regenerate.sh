#!/bin/bash
rootdir="$(dirname ${BASH_SOURCE[0]})"
filedates="${rootdir}/fileDates.js"
cd "${rootdir}"
echo 'export const fileDates = {' > "${filedates}"
git ls-tree -r --name-only HEAD | while read filename; do
    echo "'$filename':'$(git log -1 --format="%ai" -- "$filename")'," >> "${filedates}"
done
echo '}' >> "${filedates}"