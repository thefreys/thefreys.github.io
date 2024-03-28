#!/bin/bash
source "$(dirname ${BASH_SOURCE[0]})/config.sh"
today=$(date '+%F\ %T')
version=$(date '+%Y%m%d%H%M%S')

rm -rf "${tmp_generated_asset_dir}"
mkdir -p "${tmp_generated_asset_dir}"
rm -rf "${tmp_page_dir}"
mkdir -p "${tmp_page_dir}"

echo "$(date): Generating javascript array files"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "markdownNodes" "markdown.md"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "htmlNodes" "html.html"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "javascriptNodes" "javascript.js"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "cssNodes" "css.css"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "jsAncestorNodes" "ancestor.js"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "cssAncestorNodes" "ancestor.css"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "hiddenNodes" ".hide"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "titledNodes" "_title.txt"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "taggedNodes" "_tags.txt"

config_tmp_file="${tmp_generated_asset_dir}/config.js"
content_nodes_tmp_file="${tmp_generated_asset_dir}/contentNodes.js"

echo "export const siteConfig = {" > "${config_tmp_file}"
echo "    siteName: '${site_name}'," >> "${config_tmp_file}"
echo "    hamburgerLevelOneItems: [" >> "${config_tmp_file}"
for hamburger_menu_node in "${hamburger_menu_nodes[@]}"
do
    echo "    '${hamburger_menu_node}'," >> "${config_tmp_file}"
done
echo "    ]," >> "${config_tmp_file}"
echo "};" >> "${config_tmp_file}"


cd "${repo_dir}"
echo "export const contentNodes = {" > "${content_nodes_tmp_file}"
echo "$(date): Generating the contentNode javascript object (contentNodes.js)"
find "${content_dir}" -type d -print | xargs -I {} ls -d {} | sort | while read nodepath; do
    node="${nodepath}"
    node=${node:${#content_dir}}
    if [[ "${node}" = "" ]]; then
        node="/"
    fi
    echo "\"${node}\":{" >> "${content_nodes_tmp_file}"

    if [[ "${node}" = "/" ]]; then
        echo "  \"parent\":null," >> "${content_nodes_tmp_file}"
        navLabel="Home"
    else
        echo "  \"parent\":\"$(dirname ${node})\"," >> "${content_nodes_tmp_file}"
        navLabel="$(basename ${node})"
    fi
    
    title=""
    if [ -f "${nodepath}/_title.txt" ]; then
        title=$(<"${nodepath}/_title.txt" )     
        if [[ "${title}" != "" ]]; then
            navLabel="${title}"
            echo "  \"title\":\`${title}\`," >> "${content_nodes_tmp_file}"
        fi
    fi
    echo "  \"navLabel\":\"${navLabel}\"," >> "${content_nodes_tmp_file}"

    echo "  \"children\":[" >> "${content_nodes_tmp_file}"
    find ${nodepath} -maxdepth 1 -type d | sort | while read childnodepath; do
        childnode="${childnodepath}"
        childnode=${childnode:${#content_dir}}
        if [[ "${childnode}" = "" ]]; then
            childnode="/"
        fi
        if [[ "${childnode}" != "${node}" ]]; then
            echo "    \"${childnode}\"," >> "${content_nodes_tmp_file}"
        fi
        
    done
    
    node_page_dir="${tmp_page_dir}${node}"
    mkdir -p "${node_page_dir}"

    markdown=""
    if [ -f "${nodepath}/markdown.md" ]; then
        markdown=$(<"${nodepath}/markdown.md" )   
    fi

    html=""
    if [ -f "${nodepath}/html.html" ]; then
        html=$(<"${nodepath}/html.html" )   
    fi

    if [ -f "${nodepath}/css.css" ]; then
        cat "${nodepath}/css.css" > "${node_page_dir}/css.css"
    fi

    if [ -f "${nodepath}/javascript.js" ]; then
        cat "${nodepath}/javascript.js" > "${node_page_dir}/javascript.js"
    fi

    if [ -f "${nodepath}/ancestor.css" ]; then
        cat "${nodepath}/ancestor.css" > "${node_page_dir}/ancestor.css"
    fi

    if [ -f "${nodepath}/ancestor.js" ]; then
        cat "${nodepath}/ancestor.js" > "${node_page_dir}/ancestor.js"
    fi

    node_page_url=${page_url}${nodepath:${#content_dir}}
    css=""
    javascript=""
    ancestor_path="${nodepath}"
    counter=0
    while ! [[ "/" = "${ancestor_path}" ]]; do
        ancestor_url=${page_url}${ancestor_path:${#content_dir}}
        if [ -f "${ancestor_path}/ancestor.js" ]; then
            javascript="import * as ancestorJS${counter} from '${ancestor_url}/ancestor.js?version={{version}}';
${javascript}"
        fi
        if [ -f "${ancestor_path}/ancestor.css" ]; then
            css="<link href='${ancestor_url}/ancestor.css?version={{version}}' id='ancestorCSS${counter}' rel='stylesheet'>
${css}"
        fi
        ancestor_path=$(dirname "${ancestor_path}")
        ((counter++))
    done

    if [ -f "${nodepath}/javascript.js" ]; then
        javascript="${javascript}
import * as pageJS from '${node_page_url}/javascript.js?version={{version}}';"
    fi
    if [ -f "${nodepath}/css.css" ]; then
        css="${css}
<link href='${node_page_url}/css.css?version={{version}}' id='pageCSS${counter}' rel='stylesheet'>"
    fi
    echo "  ]," >> "${content_nodes_tmp_file}"

    echo "}," >> "${content_nodes_tmp_file}"

    page=$(<"${repo_dir}/templates/pages.html")
    page="${page//\{\{google_analytics_measurement_id\}\}/${google_analytics_measurement_id}}"
    page="${page//\{\{title\}\}/${title}}"
    page="${page//\{\{html\}\}/${html}}"
    page="${page//\{\{markdown\}\}/${markdown}}"
    page="${page//\{\{css\}\}/${css}}"
    page="${page//\{\{javascript\}\}/${javascript}}"
    page="${page//\{\{assets_url\}\}/${assets_url}}"
    page="${page//\{\{version\}\}/${version}}"

    echo "${page}" > "${node_page_dir}/index.html"

done
echo "}" >> "${content_nodes_tmp_file}"


echo "$(date): process pages.css template"
pagecss=$(<"${repo_dir}/templates/pages.css")
pagecss="${pagecss//\{\{assets_url\}\}/${assets_url}}"
pagecss="${pagecss//\{\{version\}\}/${version}}"
echo "${pagecss}" > "${tmp_generated_asset_dir}/pages.css"

echo "$(date): process pages.js template"
pagejs=$(<"${repo_dir}/templates/pages.js")
pagejs="${pagejs//\{\{assets_url\}\}/${assets_url}}"
pagejs="${pagejs//\{\{version\}\}/${version}}"
echo "${pagejs}" > "${tmp_generated_asset_dir}/pages.js"

echo "$(date): Remove previously generated js files and replace them with the new ones"
rm -rf "${generated_asset_dir}"
mv "${tmp_generated_asset_dir}" "${generated_asset_dir}"

echo "$(date): Remove previously generated page files and replace them with the new ones"
rm -rf "${page_dir}"
mv "${tmp_page_dir}" "${page_dir}"

echo "$(date): Generating the sitemap file for search engines (sitemap.xml)"
"$(dirname ${BASH_SOURCE[0]})/xmlsitemap.sh"

echo "$(date): Generating complete"