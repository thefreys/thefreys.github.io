There are two main ways to handle a string variable containing single quotes in Bash:

1. **Using Double Quotes:**

   - Double quotes (") allow for variable expansion and interpretation of special characters within the string. This is the preferred method when you want to preserve the single quotes within the variable.

   ```bash
   string_with_quotes='This is a string with "single quotes" inside.'
   echo "$string_with_quotes"  # Output: This is a string with "single quotes" inside.
   ```

2. **Escaping Single Quotes with Backslash:**

   - If you need to use the variable in a single-quoted string, escape the single quotes within the variable using a backslash (\). This tells Bash to interpret the following character literally, including the single quote.

   ```bash
   string_with_quotes='This is a string with 'single quotes' inside.'
   echo 'The variable contains: '$string_with_quotes'  # Output: The variable contains: This is a string with 'single quotes' inside.
   ```

**Choosing the Right Method:**

- Use double quotes when the single quotes are part of the data you want to store in the variable.
- Use escaped single quotes when you need to insert the variable's content literally within a single-quoted string.
