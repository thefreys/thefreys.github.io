#!/bin/bash
source "$(dirname ${BASH_SOURCE[0]})/config.sh"
find content -type d -print | xargs -I {} ls -d {} > "$(dirname ${BASH_SOURCE[0]})/contentNodeList.txt"
rm -rf "${tmpoutdir}"
mkdir -p "${tmpoutdir}"
jsvar=contentNodes
tmpoutfile="${tmpoutdir}/${jsvar}.js"
cd "${rootdir}"
echo "export const ${jsvar} = {" > "${tmpoutfile}"
cat  "$(dirname ${BASH_SOURCE[0]})/contentNodeList.txt" | while read nodepath; do
    node="/${nodepath}"
    node=${node:8}
    if [[ "${node}" = "" ]]; then
        node="/"
    fi
    echo "\"${node}\":{" >> "${tmpoutfile}"

    if [[ "${node}" = "/" ]]; then
        echo "  \"parent\":null," >> "${tmpoutfile}"
        title="Home"
    else
        echo "  \"parent\":\"$(dirname ${node})\"," >> "${tmpoutfile}"
        title="$(basename ${node})"
    fi
    
    if [ -f "${nodepath}/_title.txt" ]; then
        tmptitle="$(cat "${nodepath}/_title.txt")"     
        if [[ "${tmptitle}" != "" ]]; then
            title="${tmptitle}";
        fi
    fi
    echo "  \"title\":\`${title}\`," >> "${tmpoutfile}"

    markdownCount="$(find ${nodepath}/ -type f -name "markdown.md" | wc -l)"
    htmlCount="$(find ${nodepath}/ -type f -name "html.html" | wc -l)"
    javascriptCount="$(find ${nodepath}/ -type f -name "javascript.js" | wc -l)"
    hiddenCount="$(find ${nodepath}/ -type f -name ".hide" | wc -l)"

    echo "  \"markdownCount\":${markdownCount}," >> "${tmpoutfile}"
    echo "  \"htmlCount\":${htmlCount}," >> "${tmpoutfile}"
    echo "  \"javascriptCount\":${javascriptCount}," >> "${tmpoutfile}"
    echo "  \"hiddenCount\":${hiddenCount}," >> "${tmpoutfile}"

    echo "  \"files\":{" >> "${tmpoutfile}"
    find ${nodepath} -maxdepth 1 -type f | while read filename; do
        file="$(basename ${filename})"
        echo "    \"${file}\":\"$(git log -1 --format="%ai" -- "$filename")\"," >> "${tmpoutfile}"
    done
    echo "  }," >> "${tmpoutfile}"
    
    echo "  \"children\":[" >> "${tmpoutfile}"
    find ${nodepath} -maxdepth 1 -type d | while read childnodepath; do
        childnode="/${childnodepath}"
        childnode=${childnode:8}
        if [[ "${childnode}" = "" ]]; then
            childnode="/"
        fi
        if [[ "${childnode}" != "${node}" ]]; then
            echo "    \"${childnode}\"," >> "${tmpoutfile}"
        fi
        
    done
    echo "  ]," >> "${tmpoutfile}"

    echo "}," >> "${tmpoutfile}"
done
echo "}" >> "${tmpoutfile}"

"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "arrMarkdownNodes" "markdown.md"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "arrHtmlNodes" "html.html"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "arrJavascriptNodes" "javascript.js"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "arrHiddenNodes" ".hide"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "arrTitleNodes" "_title.txt"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "arrTagNodes" "_tags.txt"

"$(dirname ${BASH_SOURCE[0]})/nodeObject.sh" "contentNodeTitles" "_title.txt"
"$(dirname ${BASH_SOURCE[0]})/nodeObject.sh" "contentNodeTags" "_tags.txt"


rm -rf "${outdir}"
mv "${tmpoutdir}" "${outdir}"

"$(dirname ${BASH_SOURCE[0]})/xmlsitemap.sh"
