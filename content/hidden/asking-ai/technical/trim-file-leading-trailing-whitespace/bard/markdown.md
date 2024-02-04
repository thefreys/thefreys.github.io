Here are three ways to trim leading and trailing whitespace from a file in bash and write it back:

**1. Using sed:**

```bash
sed -i 's/^ *//; s/ *$//' filename.txt
```

This command uses the `sed` editor to perform two replacements in-place (`-i`) on the specified file (`filename.txt`). The first (`s/^ *//`) replaces all leading whitespace characters (`^ *`) at the beginning of each line with nothing. The second (`s/ *$//`) replaces all trailing whitespace characters (` *$`) at the end of each line with nothing.

**2. Using awk:**

```bash
awk '{sub(/^ +| +$/,"")}1' filename.txt > temp.txt && mv temp.txt filename.txt
```

This command uses the `awk` pattern-matching tool to remove leading and trailing whitespace from each line. The `sub` function substitutes the first occurrences of leading (`^ +`) and trailing (` +$`) whitespace with an empty string. The `1` at the end indicates that the modified line should be printed. The output is redirected to a temporary file (`temp.txt`), and then the temporary file is moved back to the original filename (`filename.txt`).

**3. Using tr:**

```bash
tr -d '\n' < filename.txt | tr -d ' ' | tr -d '\n' > temp.txt && mv temp.txt filename.txt
```

This approach employs the `tr` command for string manipulation. The first `tr` removes all newline characters (`\n`) from the file, converting it into a single line. The second `tr` then removes all spaces (` `) from the single line. Finally, the third `tr` adds newline characters back and writes the result to a temporary file (`temp.txt`). Again, the temporary file is moved to replace the original (`filename.txt`).

**Note:** Make sure to back up your original file before using any of these methods.

These are just three options, and you can choose the one that best suits your needs and comfort level. Each method has its own advantages and disadvantages, so consider factors like efficiency, readability, and potential risks before making your decision.