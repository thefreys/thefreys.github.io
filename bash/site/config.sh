#!/bin/bash

site_name='The Freys'
hamburger_menu_nodes=('/recipes' '/upcycling' '/blogs' '/sitemap')
xmlsitemapurlprefix='https://thefreys.github.io/pages'
google_analytics_measurement_id=G-CCX23ZTMPM

repo_dir="$(dirname ${BASH_SOURCE[0]})/../.."
web_root_dir="$(dirname ${BASH_SOURCE[0]})/../.."
content_dir="$(dirname ${BASH_SOURCE[0]})/../../content"

web_root_url=""

page_dir="${web_root_dir}/pages"
asset_dir="${web_root_dir}/assets"
generated_asset_dir="${asset_dir}/generated"

tmp_generated_asset_dir="${generated_asset_dir}.tmpdir"
tmp_page_dir="${page_dir}.tmpdir"

content_url="${web_root_url}/content"
page_url="${web_root_url}/pages"
assets_url="${web_root_url}/assets"

# change all directory vars to real paths
repo_dir=$(realpath "${repo_dir}")
web_root_dir=$(realpath "${web_root_dir}")
content_dir=$(realpath "${content_dir}")
generated_asset_dir=$(realpath "${generated_asset_dir}")
tmp_generated_asset_dir=$(realpath "${tmp_generated_asset_dir}")
page_dir=$(realpath "${page_dir}")
tmp_page_dir=$(realpath "${tmp_page_dir}")

xmlsitemapfile="${page_dir}/sitemap.xml"
xmlsitemapurlprefix="${domain}/pages"

