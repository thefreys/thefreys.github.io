Directly subtracting one array from another element-wise isn't built-in functionality in bash. However, you can achieve element-wise subtraction using a loop that iterates through the arrays. Here's how:

**1. Looping through elements:**

This approach uses a `for` loop to iterate through the indexes of the arrays. Inside the loop, you can perform the subtraction and store the result in a new array.

```bash
array1=(10 20 30)
array2=(5 15 25)
result_array=()

for (( i=0; i<${#array1}; i++ )); do
  result_array[i]=$(( ${array1[i]} - ${array2[i]} ))
done

echo "${result_array[@]}"
```

This code assigns the difference between corresponding elements of `array1` and `array2` to the `result_array`. 

**2. Handling different array lengths:**

The above approach assumes both arrays have the same length. If the lengths differ, you can handle it by adding unmatched elements from the longer array to the result as-is. Here's a modified loop:

```bash
for (( i=0; i<${#array1}; i++ )); do
  if [[ $i -lt ${#array2} ]]; then
    result_array[i]=$(( ${array1[i]} - ${array2[i]} ))
  else
    result_array[i]=${array1[i]}
  fi
done
```

This loop checks if the current index is within the bounds of the second array. If not, it assigns the element from the first array directly to the result.

* This method works for numeric arrays. For non-numeric arrays, subtraction might not be meaningful.
* Consider using tools like `awk` or Python for more complex array operations in bash scripts.