To trim leading and trailing whitespace from the contents of a file in Bash and write the result back to the same file, you can use a combination of commands like `sed`, `awk`, or `perl`. Here's a simple and effective approach using `sed`:

```bash
sed -i 's/^[ \t]*//;s/[ \t]*$//' filename
```

This command does the following:
- `sed -i` edits the file in place, meaning it changes the original file with the modifications.
- `s/^[ \t]*//` is a `sed` substitution command that removes leading spaces and tabs from the beginning of each line (`^` denotes the start of a line, `[ \t]*` matches any combination of spaces and tabs).
- `s/[ \t]*$//` is another substitution command that removes trailing spaces and tabs from the end of each line (`$` denotes the end of a line).

**Important Note**: The `-i` option for `sed` to edit files in place is very powerful and overwrites the original file. It's a good practice to create a backup before performing such operations. You can do this by providing an extension to the `-i` option like `-i.bak`, which would keep the original file with `.bak` extension as a backup before making changes.

Here's how you could use it with a backup:

```bash
sed -i.bak 's/^[ \t]*//;s/[ \t]*$//' filename
```

This way, `filename.bak` will be your original file, and `filename` will contain the changes.

Another approach is using `awk`, which is also effective for such tasks:

```bash
awk '{$1=$1};1' filename > temp && mv temp filename
```

This `awk` command does the following:
- `{$1=$1}` is an `awk` trick to rebuild each line, which as a side effect trims leading and trailing whitespace.
- `1` at the end is an `awk` idiom that results in printing the current line.
- `filename > temp && mv temp filename` writes the output to a temporary file and then moves the temporary file back to the original filename. This is necessary because `awk` cannot edit files in place like `sed` with the `-i` option.

Choose the approach that you're most comfortable with or that best suits your needs.