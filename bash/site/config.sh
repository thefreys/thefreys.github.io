#!/bin/bash

domain='https://thefreys.github.io'

web_root_url=""
web_root_dir="$(dirname ${BASH_SOURCE[0]})/../.."
site_name='The Freys'
hamburger_menu_nodes=('/recipes' '/sitemap')
google_analytics_measurement_id=G-CCX23ZTMPM
area_map_title="Browse what's under this area using a nested list / tree"
ais=('bing' 'chatgpt' 'claude' 'gemini' 'perplexity' 'huggingchat' 'meta' 'you')
template_name='original'

repo_dir="$(dirname ${BASH_SOURCE[0]})/../.."
nodes_dir="$(dirname ${BASH_SOURCE[0]})/../../content"

pages_dir="${web_root_dir}/pages"
assets_dir="${web_root_dir}/assets"
generated_assets_dir="${assets_dir}/generated"

tmp_generated_assets_dir="${generated_assets_dir}.tmpdir"
tmp_pages_dir="${pages_dir}.tmpdir"

nodes_url="${web_root_url}/content"
pages_url="${web_root_url}/pages"
assets_url="${web_root_url}/assets"

# change all directory vars to real paths
repo_dir=$(realpath "${repo_dir}")
web_root_dir=$(realpath "${web_root_dir}")
nodes_dir=$(realpath "${nodes_dir}")
generated_assets_dir=$(realpath "${generated_assets_dir}")
tmp_generated_assets_dir=$(realpath "${tmp_generated_assets_dir}")
pages_dir=$(realpath "${pages_dir}")
tmp_pages_dir=$(realpath "${tmp_pages_dir}")

xmlsitemapfile="${pages_dir}/sitemap.xml"
xmlsitemapurlprefix="${domain}/pages"
xmlsitemapfilecopy="${web_root_dir}/sitemap.xml"

version=$(date '+%Y%m%d%H%M%S')