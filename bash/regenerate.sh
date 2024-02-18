#!/bin/bash
rootdir="$(dirname ${BASH_SOURCE[0]})/../../"
contentNodesFile="${rootdir}/_config/js/generated/contentNodes.js"
tmpContentNodesFile="$(dirname ${BASH_SOURCE[0]})/contentNodes.js"
template="${rootdir}/_templates/node.html"
xmlsitemap="${rootdir}/sitemap.xml"
xmlsitemapurlprefix='https://thefreys.github.io/index?node='

today=$(date '+%F\ %T')
cd "${rootdir}"

echo "$(date): Generating contentNodeList.txt"

echo "./" > "$(dirname ${BASH_SOURCE[0]})/_tmpList_node.txt"
touch "./node.html"
find . -maxdepth 1 -type f -name "README.md" > "$(dirname ${BASH_SOURCE[0]})/_tmpList_markdown.txt"
find . -maxdepth 1 -type f -name ".html" > "$(dirname ${BASH_SOURCE[0]})/_tmpList_html.txt"
find . -maxdepth 1 -type f -name ".js" > "$(dirname ${BASH_SOURCE[0]})/_tmpList_js.txt"
find . -maxdepth 1 -type f -name "_title.txt" > "$(dirname ${BASH_SOURCE[0]})/_tmpList_title.txt"
find . -maxdepth 1 -type d ! -name '[\._-]*' -print | xargs -I {} ls -d {} | while read nodepath; do
    find ${nodepath} -type d -print | xargs -I {} ls -d {} >> "$(dirname ${BASH_SOURCE[0]})/_tmpList_node.txt"
    touch "${nodepath}/node.html"
    find ${nodepath} -type f -name "README.md" >> "$(dirname ${BASH_SOURCE[0]})/_tmpList_markdown.txt"
    find ${nodepath} -type f -name ".html" >> "$(dirname ${BASH_SOURCE[0]})/_tmpList_html.txt"
    find ${nodepath} -type f -name ".js" >> "$(dirname ${BASH_SOURCE[0]})/_tmpList_js.txt"
    find ${nodepath} -type f -name "_title.txt" >> "$(dirname ${BASH_SOURCE[0]})/_tmpList_title.txt"
done

echo "$(date): Generating the contentNodes file"
echo "export const contentNodes = {" > "${tmpContentNodesFile}"

cat  "$(dirname ${BASH_SOURCE[0]})/_tmpList_node.txt" | while read nodepath; do
    node="${nodepath:1}"
    cat "${template}" > "${nodepath}/node.html"
    echo "\"${node}\":{" >> "${tmpContentNodesFile}"

    nodeInner="$(dirname ${BASH_SOURCE[0]})/_tmpNodeInner.js"
    if [[ "${node}" = "/" ]]; then
        echo "  \"parent\":null," > "${nodeInner}"
        navLabel="Home"
    else
        echo "  \"parent\":\"$(dirname ${node})\"," > "${nodeInner}"
        navLabel="$(basename ${node})"
    fi
    
    if [ -f "${nodepath}/_title.txt" ]; then
        title="$(cat "${nodepath}/_title.txt")"     
        if [[ "${title}" != "" ]]; then
            navLabel="${title}"
            echo "  \"title\":\`${title}\`," >> "${nodeInner}"
        fi
    fi
    echo "  \"navLabel\":\"${navLabel}\"," >> "${nodeInner}"

    if [ -f "${nodepath}/README.md" ]; then
        echo "  \"markdownPath\":\"${nodepath:1}/README.md\"," >> "${nodeInner}"
    fi
    if [ -f "${nodepath}/.html" ]; then
        echo "  \"htmlPath\":\"${nodepath:1}/.html\"," >> "${nodeInner}"
    fi
    if [ -f "${nodepath}/.js" ]; then
        echo "  \"javascriptPath\":\"${nodepath:1}/.js\"," >> "${nodeInner}"
    fi

    markdownCount=$(grep -c "^${nodepath}.*README\.md$" "$(dirname ${BASH_SOURCE[0]})/_tmpList_markdown.txt")
    htmlCount=$(grep -c "^${nodepath}.*\.html$" "$(dirname ${BASH_SOURCE[0]})/_tmpList_html.txt")
    javascriptCount=$(grep -c "^${nodepath}.*\.js$" "$(dirname ${BASH_SOURCE[0]})/_tmpList_js.txt")

    echo "  \"markdownCount\":${markdownCount}," >> "${nodeInner}"
    echo "  \"htmlCount\":${htmlCount}," >> "${nodeInner}"
    echo "  \"javascriptCount\":${javascriptCount}," >> "${nodeInner}"
    
    echo "  \"children\":[" >> "${nodeInner}"
        
    find ${nodepath} -maxdepth 1 -type d ! -name '[\._-]*' -print | xargs -I {} ls -d {} | while read childnodepath; do
        childnode="${childnodepath:1}"
        if [[ "${childnode}" = "" ]]; then
            childnode="/"
        fi
        if [[ "${childnode}" != "${node}" ]]; then
            echo "    \"${childnode}\"," >> "${nodeInner}"
        fi    
    done
    echo "  ]," >> "${nodeInner}"
    
    
    echo "import * as node from '/_code/js/node.js';" > "${nodepath}/_generated.js"
    echo "export const contentNode = {" >> "${nodepath}/_generated.js"
    cat "${nodeInner}" >> "${nodepath}/_generated.js"    
    echo "}" >> "${nodepath}/_generated.js"
    echo "node.init(contentNode);" >> "${nodepath}/_generated.js"
    
    cat "${nodeInner}" >> "${tmpContentNodesFile}"
    echo "}," >> "${tmpContentNodesFile}"
done
echo "}" >> "${tmpContentNodesFile}"

cat "${tmpContentNodesFile}" > "${tmpContentNodesFile}"

# echo "$(date): Remove previously generated files and replace them with the new ones"
# rm -rf "${outdir}"
# mv "${tmpoutdir}" "${outdir}"

# echo "$(date): Generating the sitemap file for search engines (sitemap.xml)"
# "$(dirname ${BASH_SOURCE[0]})/xmlsitemap.sh"

echo "$(date): Generating complete"
