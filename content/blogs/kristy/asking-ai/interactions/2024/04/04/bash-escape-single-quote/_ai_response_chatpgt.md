In Bash, if you have a string variable containing single quotes and you want to escape them, you can use the backslash `\` character to escape each single quote. Here's an example:

```bash
original_string="This is a string with 'single quotes'."

# Escaping single quotes
escaped_string="${original_string//\'/\\'}"

echo "Original string: $original_string"
echo "Escaped string: $escaped_string"
```

In this script:

- `${original_string//\'/\\'}`: This part replaces every occurrence of a single quote `'` with an escaped single quote `\'` in the original string.
- `"${...}"`: This is parameter expansion in Bash, used to substitute the value of a parameter with some modification.
- `//`: This is a pattern substitution syntax that replaces all occurrences.
- `\'`: This is the escaped single quote.
- `\\'`: This is the escape sequence for a single quote within a double-quoted string.

So, running this script would print:

```
Original string: This is a string with 'single quotes'.
Escaped string: This is a string with \'single quotes\'.
```

Now the single quotes in the string are properly escaped.