To append elements to an array in Bash, you can use the following methods:

## Using the Shorthand Operator "+="
The simplest way to append elements to a Bash array is by using the shorthand operator "+=". The syntax is:

```
array_name+=(element1 element2 ... elementN)
```

For example:

```bash
my_array=(1 2 3)
my_array+=(4 5)  # Appends 4 and 5 to the array
echo "${my_array[@]}"  # Output: 1 2 3 4 5
```

This method allows you to append multiple elements at once.[1][2]

## Defining the Last Index
Another way to append an element is by defining the last index of the array and assigning the new value to it:

```bash
array_name[${#array_name[@]}]=new_element
```

For example:

```bash
my_array=(1 2 3)
my_array[${#my_array[@]}]=4  # Appends 4 to the array
echo "${my_array[@]}"  # Output: 1 2 3 4
```

This method only allows appending one element at a time.[1][4]

## Using Bracket Notation
You can also append elements using bracket notation:

```bash
array_name=(${array_name[@]} element1 element2 ... elementN)
```

For example:

```bash
my_array=(1 2 3)
my_array=(${my_array[@]} 4 5)  # Appends 4 and 5 to the array
echo "${my_array[@]}"  # Output: 1 2 3 4 5
```

This method rebuilds the array with the existing elements and the new elements appended.[1]

## Array Concatenation
To append one array to another, you can use array concatenation:

```bash
array1=(${array1[@]} ${array2[@]})
```

For example:

```bash
array1=(1 2 3)
array2=(4 5 6)
array1=(${array1[@]} ${array2[@]})  # Appends array2 to array1
echo "${array1[@]}"  # Output: 1 2 3 4 5 6
```

This method combines the elements of two arrays into one.[1]

Citations:
[1] https://linuxsimply.com/bash-scripting-tutorial/array/array-operations/array-append/
[2] https://stackoverflow.com/questions/1951506/add-a-new-element-to-an-array-without-specifying-the-index-in-bash
[3] https://stackoverflow.com/questions/55316852/append-elements-to-an-array-in-bash
[4] https://linuxhandbook.com/bash-append-array/
[5] https://www.masteringunixshell.net/qa36/bash-how-to-add-to-array.html