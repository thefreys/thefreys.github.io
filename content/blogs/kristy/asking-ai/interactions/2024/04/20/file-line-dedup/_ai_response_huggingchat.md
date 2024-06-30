Yes, it is possible to deduplicate lines from two files into a third file in bash. One way to do this is by using the `sort` and `uniq` commands. Here's an example:

```bash
sort file1.txt file2.txt | uniq > deduplicated_file.txt
```

This command will sort the lines of `file1.txt` and `file2.txt` and then remove duplicate adjacent lines using `uniq`. The deduplicated output will be saved to `deduplicated_file.txt`.

Note that this command assumes that the input files are sorted. If they are not sorted, you can add the `-u` option to the `sort` command to remove duplicates during the sorting process:

```bash
sort -u file1.txt file2.txt > deduplicated_file.txt
```

This command will sort the lines of `file1.txt` and `file2.txt` and remove duplicates during the sorting process, saving the deduplicated output to `deduplicated_file.txt`.