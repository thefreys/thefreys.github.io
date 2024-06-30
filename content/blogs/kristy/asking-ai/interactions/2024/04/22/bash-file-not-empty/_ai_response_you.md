#### Checking if a File is Not Empty in Bash

To check if a file is not empty in Bash, you can use the `-s` option with the `test` command, which is an alias for the `[` command. This option checks the size of the file and returns true if the file is not empty. Here's how you can do it:

```bash
if [ -s "filename" ]; then
    echo "The file is not empty."
else
    echo "The file is empty."
fi
```

The `-s` option considers a file to be not empty if its size is greater than zero.

If you want to check for a completely empty file (i.e., one that contains only whitespace or has no lines at all), you can use the `-z` option, which checks if the string is empty. This will read the contents of the file and pass them to the test command as a string.

By using the `-f` option to see if the file exists first, you can ensure the result is correct.

In summary, to check if a file is not empty in Bash, you can use the `-s` option with the `test` command, and if you want to check for a completely empty file, you can use the `-z` option.