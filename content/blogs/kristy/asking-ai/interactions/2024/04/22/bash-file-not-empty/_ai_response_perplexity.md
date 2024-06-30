Based on the search results, here is how you can test if a file is not empty in Bash:

The most concise way is to use the `-s` flag with the `[ ]` construct:

```bash
if [ -s "filename.txt" ]; then
  echo "The file is not empty."
else 
  echo "The file is empty."
fi
```

The `-s` flag checks if the file size is greater than zero, which means the file is not empty. The `[ ]` construct is used to perform the test operation.[1][2][5]

Alternatively, you can also use the `wc` (word count) command to check the file size:

```bash
if [ "$(wc -c < "filename.txt")" -gt 0 ]; then
  echo "The file is not empty."
else
  echo "The file is empty."
fi  
```

This uses `wc -c` to get the character count of the file, and then checks if it is greater than 0.[2]

Another option is to use the `grep` command to check if the file contains any non-whitespace characters:

```bash
if grep -q '[^[:space:]]' "filename.txt"; then
  echo "The file is not empty."
else
  echo "The file is empty or contains only whitespace."
fi
```

This searches the file for any non-whitespace characters. If any are found, the file is considered not empty.[2]

In summary, the most concise way to test if a file is not empty in Bash is to use the `-s` flag with the `[ ]` construct.[1][2][5]

Citations:
[1] https://tecadmin.net/bash-script-check-if-file-is-empty-or-not/
[2] https://linuxsimply.com/bash-scripting-tutorial/conditional-statements/if/check-if-file-is-empty/
[3] https://www.cyberciti.biz/faq/unix-linux-bash-script-check-if-variable-is-empty/
[4] https://superuser.com/questions/352289/bash-scripting-test-for-empty-directory
[5] https://stackoverflow.com/questions/9964823/how-to-check-if-a-file-is-empty-in-bash