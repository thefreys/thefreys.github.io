You can test if a file is not empty in bash using the following command:
Bash
[ -s /path/to/file ]
The -s test checks if the file exists and has a size greater than 0. If the file is not empty, the test will return true (exit status 0). If the file is empty or does not exist, the test will return false (exit status 1).
You can use this test in an if statement like this:
Bash
if [ -s /path/to/file ]; then
  echo "The file is not empty"
else
  echo "The file is empty or does not exist"
fi
Note: Replace /path/to/file with the actual path to the file you want to test.