#!/bin/bash
rootdir="$(dirname ${BASH_SOURCE[0]})"
#jsdir="${rootdir}/assets/js"
cd "${rootdir}"

pathTitles="${rootdir}/pathTitles.js"
echo 'export const pathTitles = {' > "${pathTitles}"
find "$(dirname ${BASH_SOURCE[0]})" -type f -name "_title.txt" | while read filename; do
    pathname=$(dirname ${filename})
    pathname=${pathname:10}
    echo "'${pathname}':\`$(cat "${filename}")\`," >> "${pathTitles}"
done
echo '}' >> "${pathTitles}"

pathTags="${rootdir}/pathTags.js"
echo 'export const pathTags = {' > "${pathTags}"
find "$(dirname ${BASH_SOURCE[0]})" -type f -name "_tags.txt" | while read filename; do
    pathname=$(dirname ${filename})
    pathname=${pathname:10}
    echo "'${pathname}':\`$(cat "${filename}")\`," >> "${pathTags}"
done
echo '}' >> "${pathTags}"

filedates="${rootdir}/fileDates.js"
cd "${rootdir}"
echo 'export const fileDates = {' > "${filedates}"
git ls-tree -r --name-only HEAD | while read filename; do
    echo "'$filename':'$(git log -1 --format="%ai" -- "$filename")'," >> "${filedates}"
done
echo '}' >> "${filedates}"