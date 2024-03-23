#!/bin/bash
#git update-index --chmod=+x ${BASH_SOURCE[0]}
find "$(dirname ${BASH_SOURCE[0]})" -type f -name "*.sh" | while read script_file; do
    echo "git update-index --chmod=+x ${script_file}"
    git update-index --chmod=+x ${script_file}
done
