To transform a string variable `title` that contains only lowercase alphanumeric and dash characters into a string where the dashes become spaces and the words are capitalized properly, you can use the following bash script:

```bash
title="my-awesome-title"
transformed_title=$(echo "$title" | tr '-' ' ' | awk '{for(i=1;i<=NF;i++){ $i=toupper(substr($i,1,1)) tolower(substr($i,2)) }}1')
echo "$transformed_title"
```

Here's how it works:

1. The `tr '-' ' '` command replaces all occurrences of `-` (dash) with `' '` (space).
2. The `awk` command then processes each word in the string. It does the following for each word:
   - `toupper(substr($i,1,1))` converts the first character of the word to uppercase.
   - `tolower(substr($i,2))` converts the remaining characters of the word to lowercase.
3. The `1` at the end of the `awk` command is a shorthand for `{print $0}`, which prints the modified line.
4. The transformed string is stored in the `transformed_title` variable, which is then printed.

The output of this script would be:

```
My Awesome Title
```