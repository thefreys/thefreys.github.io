Creating a Bash script to list all files in a local clone of a Git repository along with their last commit date involves using Git commands within the script. Here's an example script that does just that:

```bash
#!/bin/bash

# Navigate to the git repository directory
# Replace '/path/to/repo' with the path to your local git repository
cd /path/to/repo

# Check if the current directory is a git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "This is not a git repository."
    exit 1
fi

# List files and their last commit date
git ls-tree -r --name-only HEAD | while read filename; do
    echo "'$filename':'$(git log -1 --format="%ai" -- "$filename")'"
done
```

### Instructions:

1. Replace `/path/to/repo` with the path to your local git repository.
2. Save this script in a file, for example, `list_files_with_commit_date.sh`.
3. Make the script executable: `chmod +x list_files_with_commit_date.sh`.
4. Run the script: `./list_files_with_commit_date.sh`.

### What this script does:

1. Changes the directory to your Git repository.
2. Checks if the current directory is indeed a git repository.
3. Lists all files in the repository (`git ls-tree -r --name-only HEAD`).
4. For each file, it fetches the last commit date (`git log -1 --format="%ai"`) and prints it along with the filename.

Make sure you have the necessary permissions to access and execute commands in the specified git repository directory.