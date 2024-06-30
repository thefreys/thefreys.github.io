You can use the `-s` operator in a conditional statement to check if a file is not empty in Bash. Here's an example:

```bash
#!/bin/bash

file="example.txt"

if [ -s "$file" ]; then
    echo "$file is not empty."
else
    echo "$file is empty or does not exist."
fi
```

In this script:

- `[ -s "$file" ]` checks if the file named `example.txt` exists and is not empty.
- If the file exists and is not empty, it echoes that the file is not empty.
- If the file is empty or does not exist, it echoes that the file is empty or does not exist.

You can replace `"example.txt"` with the path to your file.