Yes, it is possible to subtract one array from another in Bash using various techniques. Here are a few ways to accomplish this:

1. Using array operations and filtering:

```bash
# Define the arrays
array1=(1 2 3 4 5)
array2=(3 5)

# Subtract array2 from array1
result=()
for i in "${array1[@]}"; do
    skip=
    for j in "${array2[@]}"; do
        if [[ "$i" == "$j" ]]; then
            skip=1
            break
        fi
    done
    if [[ -z "$skip" ]]; then
        result+=("$i")
    fi
done

# Print the result
echo "${result[@]}"  # Output: 1 2 4
```

2. Using associative arrays:

```bash
# Define the arrays
array1=(1 2 3 4 5)
array2=(3 5)

# Create associative arrays
declare -A arr1 arr2

# Convert arrays to associative arrays
for i in "${array1[@]}"; do arr1["$i"]=1; done
for i in "${array2[@]}"; do arr2["$i"]=1; done

# Subtract array2 from array1
result=()
for i in "${array1[@]}"; do
    if [[ -z "${arr2["$i"]}" ]]; then
        result+=("$i")
    fi
done

# Print the result
echo "${result[@]}"  # Output: 1 2 4
```

3. Using the `comm` command (if available):

```bash
# Define the arrays
array1=(1 2 3 4 5)
array2=(3 5)

# Convert arrays to sorted lists
IFS=$'\n' sorted_array1=($(sort <<<"${array1[*]}"))
IFS=$'\n' sorted_array2=($(sort <<<"${array2[*]}"))

# Subtract array2 from array1
result=($(comm -23 <(printf '%s\n' "${sorted_array1[@]}") <(printf '%s\n' "${sorted_array2[@]}")))

# Print the result
echo "${result[@]}"  # Output: 1 2 4
```

In all examples, the resulting `result` array contains the elements from `array1` that are not present in `array2`.

Note that these examples assume that the arrays contain only unique elements. If the arrays contain duplicates, you may need to modify the code accordingly.