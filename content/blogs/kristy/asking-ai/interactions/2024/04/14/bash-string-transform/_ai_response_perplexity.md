To transform a string variable containing only alphanumeric and dash characters in lowercase, where the dashes become spaces and the words are capitalized properly, you can use the following bash script:

```bash
title="my-awesome-title"
new_title=$(echo "$title" | tr '-' ' ' | awk '{for(i=1;i<=NF;i++){ $i=toupper(substr($i,1,1)) tolower(substr($i,2)) }}1')
echo "$new_title"
```

Here's a breakdown of the steps:

1. `tr '-' ' '`: This command replaces all occurrences of the dash `-` character with a space ` `.
2. `awk '{for(i=1;i<=NF;i++){ $i=toupper(substr($i,1,1)) tolower(substr($i,2)) }}1'`: This awk command iterates through each word in the string and:
   - `toupper(substr($i,1,1))`: Converts the first character of the word to uppercase.
   - `tolower(substr($i,2))`: Converts the rest of the characters in the word to lowercase.

The resulting `$new_title` variable will contain the transformed string with the dashes replaced by spaces and the words capitalized properly.

In this example, the output would be:

```
My Awesome Title
```