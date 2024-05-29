#!/bin/bash

node=${1}
source "$(dirname ${BASH_SOURCE[0]})/config.sh"
today=$(date '+%Y-%m-%d')
version=$(date '+%Y%m%d%H%M%S')

if [[ "/" == "${node}" ]]; then
    node_dir="${nodes_dir}"
    tmp_page_dir="${tmp_pages_dir}"
    page_dir="${pages_dir}"
else
    node_dir="${nodes_dir}${node}"
    tmp_page_dir="${tmp_pages_dir}${node}"
    page_dir="${pages_dir}${node}"
fi

mkdir -p "${tmp_page_dir}"
find "${tmp_page_dir}" -maxdepth 1 -type f -delete

page_url=${pages_url}${node_dir:${#nodes_dir}}

# initialize these to empty
css=""
javascript=""
title=""
label=""

# Create the node object
tmp_node_object_file="${tmp_page_dir}/nodeObject.js"
tmp_node_object_inner="${tmp_page_dir}/nodeObject.inner"
touch "${tmp_node_object_file}"
touch "${tmp_node_object_inner}"
if [[ "${node}" = "/" ]]; then
    echo "  \"parent\":null," >> "${tmp_node_object_inner}"
    label="Home"
else
    echo "  \"parent\":\"$(dirname ${node})\"," >> "${tmp_node_object_inner}"
    label="$(basename ${node})"
fi
label=$(echo "${label}" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2));}1')
title="${label}"
if [ -f "${node_dir}/_title.txt" ]; then
    title=$(<"${node_dir}/_title.txt" )   
fi
if [ -f "${node_dir}/_label.txt" ]; then
    label=$(<"${node_dir}/_label.txt" )   
fi
echo "  \"title\":\`${title}\`," >> "${tmp_node_object_inner}"
echo "  \"label\":\"${label}\"," >> "${tmp_node_object_inner}"

# Create the children array in the node object
echo "  \"children\":[" >> "${tmp_node_object_inner}"
find ${node_dir} -maxdepth 1 -type d | sort | while read childnode_dir; do
    childnode="${childnode_dir}"
    childnode=${childnode:${#nodes_dir}}
    [[ "${childnode}" = "" ]] && childnode="/"
    [[ "${childnode}" != "${node}" ]] && echo "    \"${childnode}\"," >> "${tmp_node_object_inner}"
done
echo "  ]," >> "${tmp_node_object_inner}"

# copy CSS and JavaScript files from the node directory to the page directory
[ -f "${node_dir}/css.css" ] && cat "${node_dir}/css.css" > "${tmp_page_dir}/css.css"
[ -f "${node_dir}/javascript.js" ] && cat "${node_dir}/javascript.js" > "${tmp_page_dir}/javascript.js"
[ -f "${node_dir}/ancestor.css" ] && cat "${node_dir}/ancestor.css" > "${tmp_page_dir}/ancestor.css"
[ -f "${node_dir}/ancestor.js" ] && cat "${node_dir}/ancestor.js" > "${tmp_page_dir}/ancestor.js"

# create the ancestor code files
css=""
javascript=""
ancestor_path="${node_dir}"
counter=0
while ! [[ "/" = "${ancestor_path}" ]]; do
    ancestor_url=${pages_url}${ancestor_path:${#nodes_dir}}
    [ -f "${ancestor_path}/ancestor.js" ] && javascript="import * as ancestorJS${counter} from '${ancestor_url}/ancestor.js?version={{version}}';
${javascript}"
    [ -f "${ancestor_path}/ancestor.css" ] && css="<link href='${ancestor_url}/ancestor.css?version={{version}}' id='ancestorCSS${counter}' rel='stylesheet'>
${css}"
    ancestor_path=$(dirname "${ancestor_path}")
    ((counter++))
done
[ -f "${node_dir}/javascript.js" ] && javascript="${javascript}
import * as pageJS from '${page_url}/javascript.js?version={{version}}';"
[ -f "${node_dir}/css.css" ] && css="${css}
<link href='${page_url}/css.css?version={{version}}' id='pageCSS' rel='stylesheet'>"

touch "${tmp_page_dir}/generated.css"
css="${css}
<link href='${page_url}/generated.css?version={{version}}' id='generatedCSS' rel='stylesheet'>"

# read template.html into page variable and replace special characters (&,$) with template variables temporarily
page=$(sed 's/&/{{ampersand}}/g; s/\$/{{dollar}}/g' < "${repo_dir}/templates/${template_name}/template.html")  

markdown=""
if [ -f "${node_dir}/markdown.md" ]; then
    # read markdown.md into markdown variable and replace special characters (<,>,&,$) with template variables temporarily
    markdown=$(cat "${node_dir}/markdown.md" | sed 's/</{{lt}}/g; s/>/{{gt}}/g; s/&/{{ampersand}}/g; s/\$/{{dollar}}/g')
fi
page="${page//\{\{markdown\}\}/${markdown}}"

# process the ai components
ai_component_files=('_ai_query.txt')
for ai in "${ais[@]}"; do ai_component_files+=("_ai_response_${ai}.md"); done
ai_response_counter=0
for ai_component_file in "${ai_component_files[@]}"
do 
    template_varname="${ai_component_file%.*}"
    template_varval=""
    # read ai_component_file into a variable and replace special characters (<,>,&,$) with template variables temporarily
    [ -f "${node_dir}/${ai_component_file}" ] && template_varval=$(cat "${node_dir}/${ai_component_file}" | sed 's/</{{lt}}/g; s/>/{{gt}}/g; s/&/{{ampersand}}/g; s/\$/{{dollar}}/g')
    
    if [ -n "${template_varval}" ]; then
        if [[ "${ai_component_file:0:13}" == '_ai_response_' ]]; then
            ((ai_response_counter++))
            echo ".aiResponses .visibility${template_varname} {display: block;}" >> "${tmp_page_dir}/generated.css"
        fi
    fi
    page="${page//\{\{${template_varname}\}\}/${template_varval}}"
done   
[[ "${ai_response_counter}" -gt 0 ]] && echo ".aiResponses {display: block !important;}" >> "${tmp_page_dir}/generated.css"

# replace the rest of the page template variables
page="${page//\{\{css\}\}/${css}}"
page="${page//\{\{javascript\}\}/${javascript}}"
page="${page//\{\{assets_url\}\}/${assets_url}}"
page="${page//\{\{title\}\}/${title}}"
page="${page//\{\{google_analytics_measurement_id\}\}/${google_analytics_measurement_id}}"
page="${page//\{\{version\}\}/${version}}"

# complete the index.html and nodeObject.js file
echo "${page}" | sed 's/{{ampersand}}/\&/g; s/{{dollar}}/\$/g' > "${tmp_page_dir}/index.html"
echo "nodeObject={" > "${tmp_node_object_file}"
cat "${tmp_node_object_inner}" >> "${tmp_node_object_file}"
echo "}" >> "${tmp_node_object_file}"

# check for .hide, if not create search and sitemap files
if ! [ -f "${node_dir}/.hide" ]; then
    lastmod=${today}
    gitdate="$(git log -1 --format="%ai" -- "${node_dir}/markdown.md")"
    if ! [[ "" == "${gitdate}" ]]; then
        lastmod=${gitdate:0:10}
    fi
    
    search_display=""
    if [ -f "${node_dir}/_ai_query.txt" ]; then
        search_display=$(<"${node_dir}/_ai_query.txt" )  
    elif [ -f "${node_dir}/markdown.md" ]; then
        search_display="${title}"
    fi
    if [ -n "${search_display}" ]; then
        # create the the search csv row for this page, escaping double quotes within values and replacing line breaks with <br>
        echo -n "\"$(echo "$page_url" | sed 's/"/\\"/g' | sed ':a;N;$!ba;s/\n/ <br>/g')\"," >> "${tmp_page_dir}/search_row.csv" 
        echo -n "\"$(echo "$search_display" | sed 's/"/\\"/g' | sed ':a;N;$!ba;s/\n/ <br>/g')\"," >> "${tmp_page_dir}/search_row.csv" 
        echo -n "\"$(echo "$tags" | sed 's/"/\\"/g' | sed ':a;N;$!ba;s/\n/ <br>/g')\"," >> "${tmp_page_dir}/search_row.csv" 
        echo "\"$(echo "$lastmod" | sed 's/"/\\"/g' | sed ':a;N;$!ba;s/\n/ <br>/g')\"" >> "${tmp_page_dir}/search_row.csv" 
        
        echo "  <url>" > "${tmp_page_dir}/sitemap_row.xml"
        echo "    <loc>${domain}${page_url}/index.html</loc>" >> "${tmp_page_dir}/sitemap_row.xml"
        echo "    <lastmod>${lastmod}</lastmod>" >> "${tmp_page_dir}/sitemap_row.xml"
        echo "  </url>" >> "${tmp_page_dir}/sitemap_row.xml"
    fi
fi
