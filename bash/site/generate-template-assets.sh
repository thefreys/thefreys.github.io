#!/bin/bash
source "$(dirname ${BASH_SOURCE[0]})/config.sh"

echo "$(date): Generating ${generated_assets_dir}/template.js"
template_content=$(<"${repo_dir}/templates/${template_name}/template.js")
template_content="${template_content//\{\{assets_url\}\}/${assets_url}}"
template_content="${template_content//\{\{version\}\}/${version}}"
echo "${template_content}" > "${generated_assets_dir}/template.js"
echo "$(date): COMPLETE: ${generated_assets_dir}/template.js"

echo "$(date): Generating ${generated_assets_dir}/template.css"
template_content=$(<"${repo_dir}/templates/${template_name}/template.css")
template_content="${template_content//\{\{assets_url\}\}/${assets_url}}"
template_content="${template_content//\{\{version\}\}/${version}}"
echo "${template_content}" > "${generated_assets_dir}/template.css"
echo "$(date): COMPLETE: ${generated_assets_dir}/template.css"
