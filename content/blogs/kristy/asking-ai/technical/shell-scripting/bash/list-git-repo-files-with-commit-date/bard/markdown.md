 **Here's the bash script to list all files with their last commit dates:**

```bash
#!/bin/bash

# Navigate to the root of the git repository
cd "$(git rev-parse --show-toplevel)"

# Find all tracked files (including submodules)
git ls-files -s | \
    while read -r mode file; do
        # Get last commit date for the file using UTC timezone for consistency
        date=$(TZ=UTC git log -1 --format=%cd --date=unix -- "$file" | xargs -I {} date -d @{} +"%Y-%m-%d %H:%M:%S %Z")
        echo "$file   $date"
    done
```

**To use the script:**

1. **Save it as a file:**
   - For example, save it as `list_files_with_dates.sh`.
2. **Make it executable:**
   - Run `chmod +x list_files_with_dates.sh`.
3. **Execute it:**
   - Run `./list_files_with_dates.sh` from within the git repository.

**Explanation:**

1. **Navigate to the root:** Ensures the script works from any subdirectory.
2. **Find tracked files:** `git ls-files -s` lists tracked files with status codes.
3. **Loop through files:** Processes each file using a `while` loop.
4. **Get last commit date:**
   - `git log -1 --format=%cd --date=unix -- "$file"` fetches the last commit date in UNIX timestamp.
   - `TZ=UTC` ensures UTC timezone for consistency.
   - `xargs -I {} date -d @{} +"%Y-%m-%d %H:%M:%S %Z"` converts timestamp to human-readable format.
5. **Print file and date:** `echo "$file $date"` outputs the results.
