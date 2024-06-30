You can use the `tr` command to replace dashes with spaces, and the `awk` command to title case the words:
```bash
title="hello-world-from-bash"
echo "$title" | tr '-' ' ' | awk '{print tolower(substr($0,1,1)) toupper(substr($0,2))}'
```

The output will be:
```
Hello World From Bash
```