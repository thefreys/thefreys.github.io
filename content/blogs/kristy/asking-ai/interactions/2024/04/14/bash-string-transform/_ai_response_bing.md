Certainly! To transform a string variable in bash where dashes become spaces and words are capitalized properly, you can use the following command:

```bash
title="your-string-with-dashes"
formatted_title=$(echo "$title" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2));}1')
echo "$formatted_title"
```

Replace `"your-string-with-dashes"` with your actual string. This command will replace dashes with spaces and capitalize the first letter of each word. For example, if your original string is `"hello-world"`, it will be transformed to `"Hello World"`.

Feel free to adjust the `title` variable to match your specific string, and the `formatted_title` will contain the desired result. 😊