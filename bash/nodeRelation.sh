#!/bin/bash
source "$(dirname ${BASH_SOURCE[0]})/config.sh"
tmpoutfile="${tmpoutdir}/nodeRelation.js"
cd "${rootdir}"
echo "export const nodeChildren = {" > "${tmpoutfile}"
find content -type d -print | xargs -I {} ls -d {} | while read nodepath; do
    node="/${nodepath}"
    node=${node:8}
    if [[ "${node}" = "" ]]; then
        node="/"
    fi
    echo "\"${node}\":{" >> "${tmpoutfile}"
    echo " \"parent\":\"$(dirname ${node})\"," >> "${tmpoutfile}"
    
    echo " \"children\":[" >> "${tmpoutfile}"   
    find ${nodepath} -maxdepth 1 -type d | while read childnodepath; do
        childnode="/${childnodepath}"
        childnode=${childnode:8}
        if [[ "${childnode}" = "" ]]; then
            childnode="/"
        fi
        if [[ "${childnode}" != "${node}" ]]; then
            echo "  \"${childnode}\"," >> "${tmpoutfile}"
        fi  
    done
    echo " ]," >> "${tmpoutfile}"
    echo "}," >> "${tmpoutfile}"


done
echo '}' >> "${tmpoutfile}"
