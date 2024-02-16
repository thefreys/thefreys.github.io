#!/bin/bash
rootdir="$(dirname ${BASH_SOURCE[0]})/../"
tmpoutdir="${rootdir}/config/js/generated2.tmp"
rm -rf "${tmpoutdir}"
mkdir -p "${tmpoutdir}"
today=$(date '+%F\ %T')

find content -type d -print | xargs -I {} ls -d {} > "$(dirname ${BASH_SOURCE[0]})/contentNodeList.txt"
jsvar=contentNodes
tmpoutfile="${tmpoutdir}/${jsvar}.js"
cd "${rootdir}"
cat  "$(dirname ${BASH_SOURCE[0]})/contentNodeList.txt" | while read nodepath; do
    node="/${nodepath}"
    node=${node:8}
    if [[ "${node}" = "" ]]; then
        node="/"
    fi
    echo ${node}
done
