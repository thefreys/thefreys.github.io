Yes, in Bash, you can subtract one array from another by iterating through the elements of the arrays and removing elements that exist in the second array from the first array. Here's a simple example:

```bash
# Define the arrays
array1=(1 2 3 4 5)
array2=(3 4)

# Loop through each element of array2 and remove it from array1
for element in "${array2[@]}"; do
    array1=("${array1[@]/$element}")
done

# Print the result
echo "Resulting array:"
echo "${array1[@]}"
```

This script will output:

```
Resulting array:
1 2 5
```

This approach is straightforward but may not be very efficient for large arrays. There might be more efficient methods depending on your specific use case, such as using associative arrays or leveraging external tools like `awk`, `grep`, or `sed`.