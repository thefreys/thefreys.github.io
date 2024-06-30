You can use the `find` command to search for files recursively and `cat` command to concatenate them. Here's a one-liner to achieve this:

```bash
find /path/to/directory -type f -name "myFile.csv" -exec cat {} + > concatenated_file.csv
```

Replace `/path/to/directory` with the directory where you want to start the search. This command finds all files named `myFile.csv` recursively starting from the specified directory, then concatenates them into a single file named `concatenated_file.csv`.