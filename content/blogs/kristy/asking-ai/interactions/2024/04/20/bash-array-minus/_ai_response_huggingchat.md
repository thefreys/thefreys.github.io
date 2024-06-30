Yes, it is possible to subtract one array from another in Bash. You can use a combination of array manipulation techniques and loops to achieve this. Here's an example:

```bash
#!/bin/bash

# Initialize arrays
array1=(1 2 3 4 5)
array2=(3 6 7 8)

# Initialize an empty array to store the result
result=()

# Iterate through each element in array1
for i in "${array1[@]}"; do
    # Check if the current element exists in array2
    if ! [[ " ${array2[@]} " =~ " $i " ]]; then
        # If not, add it to the result array
        result+=("$i")
    fi
done

# Print the result array
echo "Result array: ${result[@]}"
```

In this example, we initialize two arrays `array1` and `array2`. We then initialize an empty array `result` to store the elements that are present in `array1` but not in `array2`. We iterate through each element in `array1` using a for loop and check if the current element exists in `array2` using a pattern matching condition. If the element is not found in `array2`, we add it to the `result` array. Finally, we print the `result` array.

You can modify the arrays and customize the script according to your requirements.