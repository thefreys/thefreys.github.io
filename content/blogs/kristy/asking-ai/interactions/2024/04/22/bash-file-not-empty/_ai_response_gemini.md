There are a couple of ways to test if a file is not empty in bash:

**Using the `-s` test operator:**

This is the most concise way. The `-s` operator checks if the file exists and has a size greater than zero. 

```bash
if [[ -s $file ]] ; then
  echo "File '$file' is not empty"
else
  echo "File '$file' is empty or doesn't exist"
fi
```

**Using the `stat` command:**

The `stat` command provides detailed information about a file. You can combine it with a grep to check the size.

```bash
if [[ $(stat -c %s "$file") -gt 0 ]] ; then
  echo "File '$file' is not empty"
else
  echo "File '$file' is empty or doesn't exist"
fi
```

**Using negation with `wc -l`:**

The `wc -l` command counts lines in a file. You can negate the condition to check for empty files.

```bash
if [[ ! $(wc -l < "$file") -eq 0 ]] ; then
  echo "File '$file' is not empty"
else
  echo "File '$file' is empty or doesn't exist"
fi
```

Remember to replace `$file` with the actual filename in your script. These methods will all achieve the same result of checking if a file is not empty. Choose the one that best suits your readability preference.