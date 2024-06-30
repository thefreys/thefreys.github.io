#!/bin/bash

query="$@"
node=$(echo "$query" | sed 's/ /\-/g' | sed 's/\"/-/g' | sed ':a;N;$!ba;s/\n/-/g')
node="/interactions/$(date '+%Y')/$(date '+%m')/$(date '+%d')/${node}"
"$(dirname ${BASH_SOURCE[0]})/ai_node.sh" -q "${query}" "${node,,}"
