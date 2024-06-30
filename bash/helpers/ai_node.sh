#!/bin/bash

# Initialize variables  echo "$(date):
query=""
node=""

# Function to display help message
show_help() {
    echo "Usage: $0 [options]... [node]"
    echo "Options:"
    echo "  --query=\"value\", -q \"value\"   Set the query (what you asked the chatbot) option"
    echo "  --help, -h    Display this help and exit"
    echo "The last argument must be the node."
}

# Loop through arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --query=*) query="${1#*=}" ;; # Capture the value for --query
        -q) query="$2"; shift ;; # Capture the value for -q
        --help|-h) show_help; exit 0 ;;
        *) node="$1" ;; # Capture the last argument as node
    esac

    shift # Move to next argument
done

echo "query: ${query}"
echo "node: ${node}"

# Check if the required variables are set
if ! [[ -n "$query" && -n "$node" ]]; then
    echo "Error: Missing required arguments."
    show_help
    exit 1
fi


source "$(dirname ${BASH_SOURCE[0]})/../site/config.sh"

node_dir="${nodes_dir}/${node}"
mkdir -p "${node_dir}"
echo -n "${query}" > "${node_dir}/_ai_query.txt"

for ai in "${ais[@]}"
do
    touch "${node_dir}/_ai_response_${ai}.md"
done

touch "${node_dir}/markdown.md"