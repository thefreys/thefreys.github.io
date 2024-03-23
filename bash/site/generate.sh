#!/bin/bash
source "$(dirname ${BASH_SOURCE[0]})/config.sh"
rm -rf "${tmpoutdir}"
mkdir -p "${tmpoutdir}"
today=$(date '+%F\ %T')
version=$(date '+%Y%m%d%H%M%S')
lstdir="$(dirname ${BASH_SOURCE[0]})/lstfiles"
template=$(<"${rootdir}/template.html")
#rm -rf "${pagedir}"

#echo "$(date): Generating node relation object"
#"$(dirname ${BASH_SOURCE[0]})/nodeRelation.sh"
#echo "$(date): Generating cat/lst files"
#"$(dirname ${BASH_SOURCE[0]})/catFiles.sh"
#echo "$(date): Generating array files"
#"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "nodes"
#"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "nodesFiles" "*"
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
    
    title=""
    if [ -f "${nodepath}/_title.txt" ]; then
        title=$(<"${nodepath}/_title.txt" )     
        if [[ "${title}" != "" ]]; then
            navLabel="${title}"
            echo "  \"title\":\`${title}\`," >> "${tmpoutfile}"
        fi
    fi
    echo " \"navLabel\":\"${navLabel}\"," >> "${tmpoutfile}"
    
    markdown=""
    if [ -f "${nodepath}/markdown.md" ]; then
        markdown=$(<"${nodepath}/markdown.md" )   
    fi

    html=""
    if [ -f "${nodepath}/html.html" ]; then
        html=$(<"${nodepath}/html.html" )   
    fi

    css=""
    if [ -f "${nodepath}/css.css" ]; then
        css=$(<"${nodepath}/css.css" )   
    fi

    javascript=""
    if [ -f "${nodepath}/javascript.js" ]; then
        javascript=$(<"${nodepath}/javascript.js" )   
    fi

    ancestor_css=""
    ancestor_js=""
    ancestor_path="${nodepath}"
    counter=0
    while ! [[ "." = "${ancestor_path}" ]]; do
        if [ -f "${ancestor_path}/ancestor.js" ]; then
            ancestor_js="import * as ancestorJS${counter} from '/${ancestor_path}/ancestor.js?version={{version}}';
${ancestor_js}"
        fi
        if [ -f "${ancestor_path}/ancestor.css" ]; then
            ancestor_css="<link href='/${ancestor_path}/ancestor.css?version={{version}}' id='ancestorCSS${counter}' rel='stylesheet'>
${ancestor_css}"
        fi
        ancestor_path=$(dirname "${ancestor_path}")
        ((counter++))
    done

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


    page="${template}"


    page="${page//\{\{google_analytics_measurement_id\}\}/${google_analytics_measurement_id}}"
    page="${page//\{\{title\}\}/${title}}"
    page="${page//\{\{html\}\}/${html}}"
    page="${page//\{\{markdown\}\}/${markdown}}"
    page="${page//\{\{ancestor_css\}\}/${ancestor_css}}"
    page="${page//\{\{css\}\}/${css}}"
    page="${page//\{\{ancestor_js\}\}/${ancestor_js}}"
    page="${page//\{\{javascript\}\}/${javascript}}"
    page="${page//\{\{version\}\}/${version}}"

    mkdir -p "${pagedir}${node}"
    echo "${page}" > "${pagedir}${node}/index.html"

done
echo "}" >> "${tmpoutfile}"

echo "$(date): Remove previously generated js files and replace them with the new ones"
rm -rf "${outdir}"
mv "${tmpoutdir}" "${outdir}"

echo "$(date): Generating the sitemap file for search engines (sitemap.xml)"
"$(dirname ${BASH_SOURCE[0]})/xmlsitemap.sh"

echo "$(date): Generating complete"

