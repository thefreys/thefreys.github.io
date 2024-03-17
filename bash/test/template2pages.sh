#!/bin/bash
today=$(date '+%F\ %T')
rootdir="$(dirname ${BASH_SOURCE[0]})/../.."
contentdir="${rootdir}/content"
outdir="${rootdir}/pages"
mkdir -p ${outdir}
template=$(<"${rootdir}/template.html")

#echo ${template}