#!/bin/bash
rootdir="$(dirname ${BASH_SOURCE[0]})/../"
tmpoutdir="${rootdir}/config/js/generated2.tmp"
rm -rf "${tmpoutdir}"
mkdir -p "${tmpoutdir}"
today=$(date '+%F\ %T')

find content -type d -print | xargs -I {} ls -d {} > "$(dirname ${BASH_SOURCE[0]})/contentNodeList.txt"
cd "${rootdir}"
cat  "$(dirname ${BASH_SOURCE[0]})/contentNodeList.txt" | while read nodepath; do
    node="/${nodepath}"
    node=${node:8}
    if [[ "${node}" = "" ]]; then
        node="/"
    fi
    echo ".${node}"
    mkdir -p ".${node}"
    rm ".${node}/README.md"
    rm ".${node}/_title.txt"
    if [ -f "./content${node}/markdown.md" ]; then
        if [[ -s "./content${node}/markdown.md" ]]; then
            cat "./content${node}/markdown.md" > ".${node}/README.md"
        fi
    fi
    if [ -f "./content${node}/_title.txt" ]; then
        if [[ -s "./content${node}/_title.txt" ]]; then
            cat "./content${node}/_title.txt" > ".${node}/_title.txt"
        fi
    fi
done
