#!/bin/bash
rootdir="$(dirname ${BASH_SOURCE[0]})"
cd "${rootdir}"

# Generate the javascript file to hold the pathTitles object
pathTitles="${rootdir}/pathTitles.js"
echo 'export const pathTitles = {' > "${pathTitles}"
find "$(dirname ${BASH_SOURCE[0]})" -type f -name "_title.txt" | while read filename; do
    pathname=$(dirname ${filename})
    pathname=${pathname:10}
    echo "'${pathname}':\`$(cat "${filename}")\`," >> "${pathTitles}"
done
echo '}' >> "${pathTitles}"

# Generate the javascript file to hold the pathTags object
pathTags="${rootdir}/pathTags.js"
echo 'export const pathTags = {' > "${pathTags}"
find "$(dirname ${BASH_SOURCE[0]})" -type f -name "_tags.txt" | while read filename; do
    pathname=$(dirname ${filename})
    pathname=${pathname:10}
    echo "'${pathname}':\`$(cat "${filename}")\`," >> "${pathTags}"
done
echo '}' >> "${pathTags}"

# Generate the javascript file to hold the fileDates object
filedates="${rootdir}/fileDates.js"
cd "${rootdir}"
echo 'export const fileDates = {' > "${filedates}"
git ls-tree -r --name-only HEAD | while read filename; do
    echo "'$filename':'$(git log -1 --format="%ai" -- "$filename")'," >> "${filedates}"
done
echo '}' >> "${filedates}"