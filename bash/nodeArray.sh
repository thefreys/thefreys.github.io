#!/bin/bash
source "$(dirname ${BASH_SOURCE[0]})/config.sh"
jsvar=$1
searchfile=$2
nodeend=${#searchfile}-1
tmpoutfile="${tmpoutdir}/${jsvar}.js"
cd "${rootdir}"
echo "export const ${jsvar} = [" > "${tmpoutfile}"
find content -type f -name "${searchfile}"  | while read filename; do
    node="/${filename:0:-${nodeend}}"
    node=${node:8}
    if [[ "${node}" = "" ]]; then
        node="/"
    fi
    echo "\"${node}\"," >> "${tmpoutfile}"
done
echo ']' >> "${tmpoutfile}"