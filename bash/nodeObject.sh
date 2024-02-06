#!/bin/bash
jsvar=$1
searchfile=$2
nodeend=${#searchfile}-1
rootdir="$(dirname ${BASH_SOURCE[0]})/../"
cd "${rootdir}"
outfile="$(pwd)/assets/js/generated/${jsvar}.js"
echo "export const ${jsvar} = {" > "${outfile}"
find content -type f -name "${searchfile}"  | while read filename; do
    node="/${filename:0:-${nodeend}}"
    node=${node:8}
    echo "\"${node}\":\`$(cat "${filename}")\`," >> "${outfile}"
done
echo '}' >> "${outfile}"