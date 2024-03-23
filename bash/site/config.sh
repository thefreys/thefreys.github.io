#!/bin/bash
rootdir="$(dirname ${BASH_SOURCE[0]})/../.."
tmpoutdir="${rootdir}/assets/js/generated.tmp"
outdir="${rootdir}/assets/js/generated"
pagedir="${rootdir}/pages"
xmlsitemap="${rootdir}/sitemap.xml"
#xmlsitemapurlprefix='https://thefreys.github.io/index?node='
xmlsitemapurlprefix='https://thefreys.github.io/pages'
