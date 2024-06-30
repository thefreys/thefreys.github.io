To search a directory recursively for files named `myFile.csv` and concatenate them into one file in Bash, you can use the following command:

```bash
cat $(find . -name "myFile.csv") > combined_file.csv
```

Here's what each part of the command does:

1. `find . -name "myFile.csv"`: This finds all files named `myFile.csv` in the current directory (`.`) and its subdirectories recursively.

2. `$(...)`: This is a command substitution, which takes the output of the `find` command and substitutes it in the `cat` command.

3. `cat`: This is a command that concatenates and prints the contents of the specified files to the standard output.

4. `> combined_file.csv`: This redirects the output of the `cat` command to a new file named `combined_file.csv`.

So, the command `find . -name "myFile.csv"` finds all files named `myFile.csv`, then `cat` concatenates the contents of those files, and finally, `> combined_file.csv` writes the concatenated content to a new file named `combined_file.csv`.

If you want to concatenate the files in a specific order (e.g., alphabetically by filename), you can use a slightly different approach:

```bash
files=$(find . -name "myFile.csv" | sort)
cat $files > combined_file.csv
```

Here, we first find all the files and store the sorted list in the `files` variable, and then pass that list to the `cat` command.

Note that this will overwrite the `combined_file.csv` file if it already exists. If you want to append the contents instead, replace `>` with `>>`.