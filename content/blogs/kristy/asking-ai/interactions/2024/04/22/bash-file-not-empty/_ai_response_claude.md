In Bash, you can use the `-s` (size) operator with the `if` statement to check if a file is not empty. Here's the syntax:

```bash
if [ -s /path/to/file ]; then
    echo "File is not empty"
else
    echo "File is empty"
fi
```

Here's how it works:

- `[ -s /path/to/file ]` tests if the file at `/path/to/file` has a non-zero size (i.e., it's not empty).
- If the condition is true (the file is not empty), the code inside the `then` block will be executed.
- If the condition is false (the file is empty), the code inside the `else` block will be executed.

You can also use the negation operator `!` to invert the condition:

```bash
if [ ! -s /path/to/file ]; then
    echo "File is empty"
else
    echo "File is not empty"
fi
```

In this case, the `then` block will be executed if the file is empty, and the `else` block will be executed if the file is not empty.

You can also use the `-z` (zero) operator to check if a variable is empty or not. However, this operator checks the length of the string, not the size of a file:

```bash
file_contents=$( cat /path/to/file )
if [ -z "$file_contents" ]; then
    echo "File is empty"
else
    echo "File is not empty"
fi
```

This approach reads the contents of the file into a variable `file_contents` and then checks if the variable is empty or not.