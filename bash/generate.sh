#!/bin/bash

#!/bin/bash
jsvar=nodeFiles
rootdir="$(dirname ${BASH_SOURCE[0]})/../"
cd "${rootdir}"
outfile="$(pwd)/assets/js/generated/${jsvar}.js"
echo "export const ${jsvar} = {" > "${outfile}"
find content -type d -print | xargs -I {} ls -d {}  | while read nodepath; do
    node="/${nodepath}"
    node=${node:8}
    if [[ "${node}" = "" ]]; then
        node="/"
    fi
    echo "\"${node}\":{" >> "${outfile}"

    if [[ "${node}" = "/" ]]; then
        echo "  \"parent\":null," >> "${outfile}"
    else
        echo "  \"parent\":\"$(dirname ${node})\"," >> "${outfile}"
    fi
    
    if [ -f "${nodepath}/_title.txt" ]; then
        echo "  \"title\":\`$(cat "${nodepath}/_title.txt")\`," >> "${outfile}"
    else
        echo "  \"title\":\`\`," >> "${outfile}"
    fi

    echo "  \"files\":{" >> "${outfile}"
    find ${nodepath} -maxdepth 1 -type f | while read filename; do
        file="$(basename ${filename})"
        echo "    \"${file}\":\"$(git log -1 --format="%ai" -- "$filename")\"," >> "${outfile}"
    done
    echo "  }," >> "${outfile}"
    

    echo "  \"children\":[" >> "${outfile}"
    find ${nodepath} -maxdepth 1 -type d | while read childnodepath; do
        childnode="/${childnodepath}"
        childnode=${childnode:8}
        if [[ "${childnode}" = "" ]]; then
            childnode="/"
        fi
        if [[ "${childnode}" != "${node}" ]]; then
            echo "    \"${childnode}\"," >> "${outfile}"
        fi
        
    done
    echo "  ]," >> "${outfile}"

    echo "}," >> "${outfile}"
done
echo "}" >> "${outfile}"


"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "markdownNodes" "markdown.md"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "htmlNodes" "html.html"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "javascriptNodes" "javascript.js"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "hiddenNodes" ".hide"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "titleNodes" "_title.txt"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "tagNodes" "_tags.txt"

"$(dirname ${BASH_SOURCE[0]})/nodeObject.sh" "nodeTitles" "_title.txt"
"$(dirname ${BASH_SOURCE[0]})/nodeObject.sh" "nodeTags" "_tags.txt"