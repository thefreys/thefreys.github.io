#!/bin/bash
rootdir="$(dirname ${BASH_SOURCE[0]})/../../"
tmpoutdir="${rootdir}/config/index/js/generated.tmp"
outdir="${rootdir}/config/index/js/generated"
xmlsitemap="${rootdir}/sitemap.xml"
xmlsitemapurlprefix='https://thefreys.github.io/index?node='
