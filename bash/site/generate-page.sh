#!/bin/bash

# Initialize variables
stage="Y"
rebuild_assets="N"
rebuild_search="N"
node=""

# Function to display help message
show_help() {
    echo "Usage: $0 [options]... [node]"
    echo "Options:"
    echo "  --stage=\"value\", -s \"value\"   Set the stage (Y/N) option to Y to only update in tmp/stage area."
    echo "  --rebuild_assets=\"value\", -a \"value\"   Set the rebuild_assets (Y/N) option to Y to rebuild the main template assets"
    echo "  --rebuild_search=\"value\", -d \"value\"   Set the rebuild_search (Y/N) option to Y to rebuild the search file"
    echo "  --help, -h    Display this help and exit"
    echo "The last argument must be the node."
}

# Loop through arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --stage=*) stage="${1#*=}" ;; # Capture the value for --stage
        -s) stage="$2"; shift ;; # Capture the value for -s
        --rebuild_assets=*) rebuild_assets="${1#*=}" ;; # Capture the value for --rebuild_assets
        -a) rebuild_assets="$2"; shift ;; # Capture the value for -a
        --rebuild_search=*) rebuild_search="${1#*=}" ;; # Capture the value for --rebuild_search
        -d) rebuild_search="$2"; shift ;; # Capture the value for -d
        --help|-h) show_help; exit 0 ;;
        *) node="$1" ;; # Capture the last argument as node
    esac

    shift # Move to next argument
done

# Check if the required variables are set
if ! [[ -n "$node" ]]; then
    echo "Error: Missing required arguments."
    show_help
    exit 1
fi

"$(dirname ${BASH_SOURCE[0]})/generate-page-tmp.sh" "${node}"

if [[ "${stage}" = "N" ]]; then
    # replace the page directory
    source "$(dirname ${BASH_SOURCE[0]})/config.sh"
    if [[ "/" == "${node}" ]]; then
        node_dir="${nodes_dir}"
        tmp_page_dir="${tmp_pages_dir}"
        page_dir="${pages_dir}"
    else
        node_dir="${nodes_dir}${node}"
        tmp_page_dir="${tmp_pages_dir}${node}"
        page_dir="${pages_dir}${node}"
    fi
    mkdir -p "${page_dir}"
    find "${page_dir}" -maxdepth 1 -type f -delete
    echo "tmp_page_dir: ${tmp_page_dir}"
    echo "page_dir: ${page_dir}"
    cp "${tmp_page_dir}/"* "${page_dir}/"
fi

if [[ "${rebuild_assets}" = "Y" ]]; then
    "$(dirname ${BASH_SOURCE[0]})/generate-template-assets.sh"
fi

if [[ "${rebuild_search}" = "Y" ]]; then
    "$(dirname ${BASH_SOURCE[0]})/generate-search.sh"
fi
