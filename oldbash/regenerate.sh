#!/bin/bash

input_file="$(dirname ${BASH_SOURCE[0]})"/all_files.lst 

# make sure a *.meta.js file exists whenever there is a content file

find "$(dirname ${BASH_SOURCE[0]})" -type f -name "*.md" > "${input_file}"
while IFS= read -r filename; do
    touch "${filename:0:-3}.meta.js"
done < "${input_file}"

find "$(dirname ${BASH_SOURCE[0]})" -type f -name "*.html" > "${input_file}"
while IFS= read -r filename; do
    touch "${filename:0:-5}.meta.js"
done < "${input_file}"

find "$(dirname ${BASH_SOURCE[0]})" -type f -name "*.js" > "${input_file}"
while IFS= read -r filename; do
    touch "${filename:0:-3}.meta.js"
done < "${input_file}"

# remove the *.meta.meta.js file created

find "$(dirname ${BASH_SOURCE[0]})" -type f -name "*.meta.meta.js" > "${input_file}"
while IFS= read -r filename; do
    rm "${filename}"
done < "${input_file}"

rm "$(dirname ${BASH_SOURCE[0]})"/meta_object.meta.js  > /dev/null
rm "$(dirname ${BASH_SOURCE[0]})"/README.meta.js  > /dev/null

# remove the temporary input file
rm "${input_file}"

# recreate the metaObject file

input_file="$(dirname ${BASH_SOURCE[0]})"/meta_files.lst 
output_file="$(dirname ${BASH_SOURCE[0]})"/meta_object.js

find "$(dirname ${BASH_SOURCE[0]})" -type f -name "*.meta.js" > "${input_file}"

echo 'export const metaObject = {' > "${output_file}"

while IFS= read -r filename; do
    key="${filename:2:-8}"
    content_basename="${filename:0:-8}"
    echo ${key}
    file_contents=$(cat ${filename})

    # find the first `{` and the last `}`
    positions1=()
    positions2=()
    position=0
    while IFS= read -r line; do
        for ((i = 0; i < ${#line}; i++)); do
            if [[ "${line:i:1}" == "{" ]]; then
                positions1+=($((position + i)))
            fi
            if [[ "${line:i:1}" == "}" ]]; then
                positions2+=($((position + i)))
            fi
        done
        ((position+=${#line}+1))  # Account for newline character
    done <<< "$file_contents"
    len_positions1=${#positions1[@]}
    len_positions2=${#positions2[@]}
    echo -n "'${key}':{" >> "${output_file}"
    if [[ "${len_positions1}" == "0"  || "${len_positions2}" == "0" ]]; then
        content=""
    else
        start=${positions1[0]}
        end=${positions2[-1]}
        len=($((${end} - ${start} - 1)))
        start=($((${start} + 1)))
        content="${file_contents:start:len}"
    fi
    # Trim all whitespace and newlines at the beginning and the end:
    content=$(echo "$content" | sed 's/^[[:blank:]\n]*//; s/[[:blank:]\n]*$//')
    echo "${content}" >> "${output_file}"

    if test -f "${content_basename}.html"; then
        echo "hasHtml: true," >> "${output_file}"
    fi
    if test -f "${content_basename}.md"; then
        echo "hasMarkdown: true," >> "${output_file}"
    fi
    if test -f "${content_basename}.js"; then
        echo "hasJavaScript: true," >> "${output_file}"
    fi

    gitdata="$(git log -1 --format="%ai" -- "$filename")"
    echo "gitdata: '${gitdata}'," >> "${output_file}"

    echo "}," >> "${output_file}"
    
done < "${input_file}"
echo '};' >> "${output_file}"

rm "${input_file}"
