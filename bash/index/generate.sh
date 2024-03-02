#!/bin/bash
source "$(dirname ${BASH_SOURCE[0]})/config.sh"
rm -rf "${tmpoutdir}"
mkdir -p "${tmpoutdir}"
today=$(date '+%F\ %T')

#echo "$(date): Generating node relation object"
#"$(dirname ${BASH_SOURCE[0]})/nodeRelation.sh"
echo "$(date): Generating array files"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "nodes"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "nodesFiles" "*"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "markdownNodes" "markdown.md"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "htmlNodes" "html.html"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "javascriptNodes" "javascript.js"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "cssNodes" "css.css"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "jsAncestorNodes" "ancestor.js"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "cssAncestorNodes" "ancestor.css"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "hiddenNodes" ".hide"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "titledNodes" "_title.txt"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "taggedNodes" "_tags.txt"

#echo "$(date): Generating metadata files"
#"$(dirname ${BASH_SOURCE[0]})/nodeObject.sh" "contentNodeTitles" "_title.txt"
#"$(dirname ${BASH_SOURCE[0]})/nodeObject.sh" "contentNodeTags" "_tags.txt"

jsvar=contentNodes
tmpoutfile="${tmpoutdir}/${jsvar}.js"
cd "${rootdir}"
echo "export const ${jsvar} = {" > "${tmpoutfile}"
echo "$(date): Generating the contentNode javascript object (${jsvar}.js)"
find content -type d -print | xargs -I {} ls -d {} | sort | while read nodepath; do
    node="/${nodepath}"
    node=${node:8}
    if [[ "${node}" = "" ]]; then
        node="/"
    fi
    echo "\"${node}\":{" >> "${tmpoutfile}"

    if [[ "${node}" = "/" ]]; then
        echo " \"parent\":null," >> "${tmpoutfile}"
        navLabel="Home"
    else
        echo " \"parent\":\"$(dirname ${node})\"," >> "${tmpoutfile}"
        navLabel="$(basename ${node})"
    fi
    
    if [ -f "${nodepath}/_title.txt" ]; then
        title="$(cat "${nodepath}/_title.txt")"     
        if [[ "${title}" != "" ]]; then
            navLabel="${title}"
            echo "  \"title\":\`${title}\`," >> "${tmpoutfile}"
        fi
    fi
    echo " \"navLabel\":\"${navLabel}\"," >> "${tmpoutfile}"
    
    echo " \"children\":[" >> "${tmpoutfile}"
    find ${nodepath} -maxdepth 1 -type d | sort | while read childnodepath; do
        childnode="/${childnodepath}"
        childnode=${childnode:8}
        if [[ "${childnode}" = "" ]]; then
            childnode="/"
        fi
        if [[ "${childnode}" != "${node}" ]]; then
            echo "    \"${childnode}\"," >> "${tmpoutfile}"
        fi
        
    done
    echo " ]," >> "${tmpoutfile}"

    echo "}," >> "${tmpoutfile}"
done
echo "}" >> "${tmpoutfile}"

echo "$(date): Remove previously generated files and replace them with the new ones"
rm -rf "${outdir}"
mv "${tmpoutdir}" "${outdir}"

echo "$(date): Generating the sitemap file for search engines (sitemap.xml)"
"$(dirname ${BASH_SOURCE[0]})/xmlsitemap.sh"

echo "$(date): Generating complete"
