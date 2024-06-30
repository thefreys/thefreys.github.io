You can use the find command to search for files recursively and the cat command to concatenate them. Here's the command you can use:
Bash
find /path/to/directory -name myFile.csv -exec cat {} + > concatenated_file.csv
Let me explain how it works:
find is the command to search for files.
/path/to/directory is the directory you want to search in.
-name myFile.csv specifies the name of the files you're looking for.
-exec executes a command on each file found.
cat {} concatenates each file.
+ at the end of the -exec option tells find to concatenate the file names and execute the command once with multiple file names as arguments.
> concatenated_file.csv redirects the output to a new file named concatenated_file.csv.
Note: Make sure to replace /path/to/directory with the actual path to the directory you want to search in.
Also, you can use -type f to specify that you only want to find files, like this:
Bash
find /path/to/directory -type f -name myFile.csv -exec cat {} + > concatenated_file.csv