#!/bin/bash
rootdir="$(dirname ${BASH_SOURCE[0]})/../"
tmpoutdir="${rootdir}/config/js/generated.tmp"
outdir="${rootdir}/config/js/generated"
xmlsitemap="${rootdir}/sitemap.xml"
xmlsitemapurlprefix='https://thefreys.github.io/index?node='
