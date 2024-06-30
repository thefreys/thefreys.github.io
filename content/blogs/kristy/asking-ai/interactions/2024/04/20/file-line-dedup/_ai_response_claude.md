Yes, it is possible to dedup (remove duplicate lines) from two files and store the unique lines in a third file using Bash commands. Here's how you can do it:

```bash
# Concatenate the two files into a single stream
cat file1.txt file2.txt |

# Sort the lines
sort |

# Use 'uniq' to remove duplicate lines
uniq > deduplicated.txt
```

Here's how it works:

1. `cat file1.txt file2.txt` concatenates the contents of `file1.txt` and `file2.txt` into a single stream.
2. The `|` (pipe) operator passes this combined stream as input to the `sort` command.
3. `sort` sorts the lines in alphabetical order.
4. The sorted output is piped to the `uniq` command, which removes consecutive duplicate lines.
5. `> deduplicated.txt` redirects the output of `uniq` (which now contains only the unique lines) to a new file named `deduplicated.txt`.

After running this command, the `deduplicated.txt` file will contain all the unique lines from both `file1.txt` and `file2.txt`.

Note that the `sort` command is necessary because `uniq` only removes consecutive duplicate lines. By sorting the lines first, any duplicate lines will become consecutive and can then be removed by `uniq`.