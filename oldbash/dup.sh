#!/bin/bash

input_file="$(dirname ${BASH_SOURCE[0]})"/all_files.lst 
orig_content_root="$(dirname ${BASH_SOURCE[0]})/"
content_root="$(dirname ${BASH_SOURCE[0]})/../content2/"

find "$(dirname ${BASH_SOURCE[0]})" -type f -name "*.md" > "${input_file}"
find "$(dirname ${BASH_SOURCE[0]})" -type f -name "*.js" > "${input_file}"
find "$(dirname ${BASH_SOURCE[0]})" -type f -name "*.html" >> "${input_file}"
while IFS= read -r filename; do
    orig_file="${orig_content_root}${filename:2}"
    if [[ ".md" == "${filename: -3}" ]]; then
        key="${filename:2:-3}"
        newdir="${content_root}${key}"
        newname="markdown.md"
    elif [[ ".meta.js" == "${filename: -8}" ]]; then
        key="${filename:2:-8}"
        newdir="${content_root}${key}"
        newname="_title.txt"
    elif [[ ".js" == "${filename: -3}" ]]; then
        key="${filename:2:-3}"
        newdir="${content_root}${key}"
        newname="javascript.js"
    else
        key="${filename:2:-5}"
        newdir="${content_root}${key}"
        newname="html.html"
    fi
    mkdir -p "${newdir}"
    if [[ "/index" == "${newdir: -6}" ]]; then
        rmdir "${newdir}"
        newdir="${newdir:0:-6}"
        newname="_index.html"        
    fi
    newfile="${newdir}/${newname}"
    cat "${orig_file}" > "${newfile}" 
    if [[ "_title.txt" == "${newname}" ]]; then
        title=$(cat "${orig_file}" | grep "title:"  | sed 's/^[[:blank:]\n]*//; s/[[:blank:]\n]*$//')
        echo -n ${title:8:-2} > "${newfile}"
        cat "${newfile}"
    fi
done < "${input_file}"
