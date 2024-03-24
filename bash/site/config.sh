#!/bin/bash

xmlsitemapurlprefix='https://thefreys.github.io/pages'
google_analytics_measurement_id=G-CCX23ZTMPM

rootdir="$(dirname ${BASH_SOURCE[0]})/../.."

generated_js_dir="${rootdir}/assets/js/generated"
tmp_generated_js_dir="${generated_js_dir}.tmpdir"

page_dir="${rootdir}/pages"
tmp_page_dir="${page_dir}.tmpdir"

xmlsitemap="${rootdir}/sitemap.xml"

#xmlsitemapurlprefix='https://thefreys.github.io/index?node='

