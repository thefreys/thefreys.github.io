#!/bin/bash
rootdir="$(dirname ${BASH_SOURCE[0]})"

pathTitles="${rootdir}/pathTitles.js"
cd "${rootdir}"
echo 'export const pathTitles = {' > "${pathTitles}"
find "$(dirname ${BASH_SOURCE[0]})" -type f -name "_title.txt" | while read filename; do
    pathname=$(dirname ${filename})
    pathname=${pathname:10}
    echo "'${pathname}':\`$(cat "${filename}")\`," >> "${pathTitles}"
    #cat "'$filename':'$(git log -1 --format="%ai" -- "$filename")'," >> "${pathTitles}"
done
echo '}' >> "${pathTitles}"

filedates="${rootdir}/fileDates.js"
cd "${rootdir}"
echo 'export const fileDates = {' > "${filedates}"
git ls-tree -r --name-only HEAD | while read filename; do
    echo "'$filename':'$(git log -1 --format="%ai" -- "$filename")'," >> "${filedates}"
done
echo '}' >> "${filedates}"