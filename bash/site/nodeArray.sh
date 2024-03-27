#!/bin/bash
source "$(dirname ${BASH_SOURCE[0]})/config.sh"
jsvar="$1"
searchfile="$2"
mkdir -p "${tmp_generated_js_dir}"
tmpoutfile="${tmp_generated_js_dir}/${jsvar}.js"
cd "${repo_dir}"
echo "export const ${jsvar} = [" > "${tmpoutfile}"
if [[ "${searchfile}" = "" ]]; then
    find "${content_dir}" -type d -print | xargs -I {} ls -d {} | sort | while read nodepath; do
        node="${nodepath}"
        node=${node:${#content_dir}}
        if [[ "${node}" = "" ]]; then
            node="/"
        fi
        echo "\"${node}\"," >> "${tmpoutfile}"
    done
elif [[ "${searchfile}" = "*" ]]; then
    find "${content_dir}" -type f -name "${searchfile}" | while read filename; do
        file="${filename}"
        file=${file:${#content_dir}}
        echo "\"${file}\"," >> "${tmpoutfile}"
    done
else
    nodeend=${#searchfile}-1
    find "${content_dir}" -type f -name "${searchfile}" | while read filename; do
        node="${filename:0:-${nodeend}}"
        node=${node:${#content_dir}}
        if [[ "${node}" = "" ]]; then
            node="/"
        fi
        echo "\"${node}\"," >> "${tmpoutfile}"
    done
fi
echo ']' >> "${tmpoutfile}"
