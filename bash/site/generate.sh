#!/bin/bash
source "$(dirname ${BASH_SOURCE[0]})/config.sh"
today=$(date '+%F\ %T')

echo "$(date): Removing all temporary generation directories"
rm -rf "${tmp_generated_assets_dir}"
mkdir -p "${tmp_generated_assets_dir}"
rm -rf "${tmp_pages_dir}"
mkdir -p "${tmp_pages_dir}"

echo "$(date): Generating javascript array files"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "markdownNodes" "markdown.md"
"$(dirname ${BASH_SOURCE[0]})/nodeArray.sh" "hiddenNodes" ".hide"

config_tmp_file="${tmp_generated_assets_dir}/config.js"
content_nodes_tmp_file="${tmp_generated_assets_dir}/contentNodes.js"

echo "$(date): Generating the javascript config object (config.js)"
area_map_title="${area_map_title//\'/\\\'}"
echo "export const siteConfig = {" > "${config_tmp_file}"
echo "    siteName: '${site_name}'," >> "${config_tmp_file}"
echo "    areaMapTitle: '${area_map_title}'," >> "${config_tmp_file}"
echo "    hamburgerLevelOneItems: [" >> "${config_tmp_file}"
for hamburger_menu_node in "${hamburger_menu_nodes[@]}"; do
    echo "    '${hamburger_menu_node}'," >> "${config_tmp_file}"
done
echo "    ]," >> "${config_tmp_file}"
echo "};" >> "${config_tmp_file}"

cd "${repo_dir}"

echo "$(date): Generating the contentNode javascript object (contentNodes.js)"
echo "export const contentNodes = {" > "${content_nodes_tmp_file}"

find "${nodes_dir}" -type d -print | xargs -I {} ls -d {} | sort | while read nodepath; do
    node="${nodepath}"
    node=${node:${#nodes_dir}}
    if [[ "${node}" = "" ]]; then
        node="/"
    fi
    "$(dirname ${BASH_SOURCE[0]})/generate-page-tmp.sh" "${node}"
    echo "\"${node}\":{" >> "${content_nodes_tmp_file}"
    cat "${tmp_pages_dir}${node}/nodeObject.inner" >> "${content_nodes_tmp_file}"
    echo "}," >> "${content_nodes_tmp_file}"
done
echo "}" >> "${content_nodes_tmp_file}"

echo "$(date): Remove previously generated js files and replace them with the new ones"
rm -rf "${generated_assets_dir}"
mv "${tmp_generated_assets_dir}" "${generated_assets_dir}"

echo "$(date): Remove previously generated page files and replace them with the new ones"
rm -rf "${pages_dir}"
mv "${tmp_pages_dir}" "${pages_dir}"

echo "$(date): Generating the asset template files"
"$(dirname ${BASH_SOURCE[0]})/generate-template-assets.sh"

echo "$(date): Generating the search file"
"$(dirname ${BASH_SOURCE[0]})/generate-search.sh"

echo "$(date): Generating the sitemap file for search engines (sitemap.xml)"
"$(dirname ${BASH_SOURCE[0]})/generate-xmlsitemap.sh"

echo "$(date): Generating complete"