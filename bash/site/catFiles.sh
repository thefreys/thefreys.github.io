#!/bin/bash
source "$(dirname ${BASH_SOURCE[0]})/config.sh"
lstdir="$(dirname ${BASH_SOURCE[0]})/lstfiles"
rm -rf "${lstdir}"
mkdir -p "${lstdir}"
files=(\
'ancestor.css' \
'ancestor.js' \
'html.html' \
'css.css' \
'javascript.js' \
'markdown.md' \
'_title.txt')
cd "${rootdir}"
find content -type d -print | xargs -I {} ls -d {} | sort | while read nodepath; do
    for file in "${files[@]}"
    do
    
        if [ -f "${nodepath}/${file}" ]; then
            echo ${nodepath} >> "${lstdir}/${file}.lst"
        fi
    done
done