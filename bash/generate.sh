#!/bin/bash
source "$(dirname ${BASH_SOURCE[0]})/config.sh"
rm -rf "${tmpoutdir}"
mkdir -p "${tmpoutdir}"
today=$(date '+%F\ %T')

echo "$(date): Generating array files"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "arrMarkdownNodes" "markdown.md"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "arrHtmlNodes" "html.html"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "arrJavascriptNodes" "javascript.js"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "arrHiddenNodes" ".hide"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "arrTitleNodes" "_title.txt"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "arrTagNodes" "_tags.txt"

echo "$(date): Generating metadata files"
"$(dirname ${BASH_SOURCE[0]})/nodeObject.sh" "contentNodeTitles" "_title.txt"
"$(dirname ${BASH_SOURCE[0]})/nodeObject.sh" "contentNodeTags" "_tags.txt"

echo "$(date): Generating contentNodeList.txt"
find content -type d -print | xargs -I {} ls -d {} > "$(dirname ${BASH_SOURCE[0]})/contentNodeList.txt"
jsvar=contentNodes
tmpoutfile="${tmpoutdir}/${jsvar}.js"
cd "${rootdir}"
echo "export const ${jsvar} = {" > "${tmpoutfile}"
echo "$(date): Generating the contentNode javascript object (${jsvar}.js)"
cat  "$(dirname ${BASH_SOURCE[0]})/contentNodeList.txt" | while read nodepath; do
    node="/${nodepath}"
    node=${node:8}
    if [[ "${node}" = "" ]]; then
        node="/"
    fi
    echo "\"${node}\":{" >> "${tmpoutfile}"

    if [[ "${node}" = "/" ]]; then
        echo "  \"parent\":null," >> "${tmpoutfile}"
        navLabel="Home"
    else
        echo "  \"parent\":\"$(dirname ${node})\"," >> "${tmpoutfile}"
        navLabel="$(basename ${node})"
    fi
    
    if [ -f "${nodepath}/_title.txt" ]; then
        title="$(cat "${nodepath}/_title.txt")"     
        if [[ "${title}" != "" ]]; then
            navLabel="${title}"
            echo "  \"title\":\`${title}\`," >> "${tmpoutfile}"
        fi
    fi
    echo "  \"navLabel\":\"${navLabel}\"," >> "${tmpoutfile}"

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
        gitdate="$(git log -1 --format="%ai" -- "$filename")"
        if [[ "" == "${gitdate}" ]]; then
            lastmod=${today}
        else
            lastmod=${gitdate:0:19}
        fi
        echo "    \"${file}\":\"${lastmod}\"," >> "${tmpoutfile}"
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

echo "$(date): Remove previously generated files and replace them with the new ones"
rm -rf "${outdir}"
mv "${tmpoutdir}" "${outdir}"

echo "$(date): Generating the sitemap file for search engines (sitemap.xml)"
"$(dirname ${BASH_SOURCE[0]})/xmlsitemap.sh"

echo "$(date): Generating complete"
