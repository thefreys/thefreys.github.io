You can achieve this transformation in bash using string manipulation and the `sed` command. Here's a script that does what you described:

```bash
#!/bin/bash

# Function to capitalize each word in a string
capitalize() {
    echo "$1" | sed 's/\b\(.\)/\u\1/g'
}

# Your string variable containing only alphanumeric characters and dashes
title="your-title-string"

# Replace dashes with spaces and capitalize each word
formatted_title=$(capitalize "$(echo "$title" | sed 's/-/ /g')")

# Output the formatted title
echo "$formatted_title"
```

This script defines a function `capitalize` that capitalizes each word in a given string. Then it replaces dashes with spaces and applies the `capitalize` function to capitalize each word in the resulting string. Finally, it outputs the formatted title.