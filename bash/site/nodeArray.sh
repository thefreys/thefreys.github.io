#!/bin/bash
source "$(dirname ${BASH_SOURCE[0]})/config.sh"
jsvar="$1"
searchfile="$2"
tmpoutfile="${tmp_generated_js_dir}/${jsvar}.js"
cd "${rootdir}"
echo "export const ${jsvar} = [" > "${tmpoutfile}"
if [[ "${searchfile}" = "" ]]; then
    find content -type d -print | xargs -I {} ls -d {} | sort | while read nodepath; do
        node="/${nodepath}"
        node=${node:8}
        if [[ "${node}" = "" ]]; then
            node="/"
        fi
        echo "\"${node}\"," >> "${tmpoutfile}"
    done
elif [[ "${searchfile}" = "*" ]]; then
    find content -type f -name "${searchfile}" | while read filename; do
        file="/${filename}"
        file=${file:8}
        echo "\"${file}\"," >> "${tmpoutfile}"
    done
else
    nodeend=${#searchfile}-1
    find content -type f -name "${searchfile}" | while read filename; do
        node="/${filename:0:-${nodeend}}"
        node=${node:8}
        if [[ "${node}" = "" ]]; then
            node="/"
        fi
        echo "\"${node}\"," >> "${tmpoutfile}"
    done
fi
echo ']' >> "${tmpoutfile}"
