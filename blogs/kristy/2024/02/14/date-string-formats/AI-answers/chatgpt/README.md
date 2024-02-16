I don't have direct access to the internet to fetch real-time data or specific external sources, but I can provide you with a general overview of date format strings in JavaScript and shell scripting.

### JavaScript:

In JavaScript, date formatting is typically done using the `toLocaleString` method or the `Intl.DateTimeFormat` object. The format strings are based on the Unicode Technical Standard #35.

Example:
```javascript
const date = new Date();

// Using toLocaleString
console.log(date.toLocaleString('en-US')); // Example output: 2/14/2024, 12:34:56 PM

// Using Intl.DateTimeFormat
const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});
console.log(formatter.format(date)); // Example output: 02/14/2024, 12:34:56 PM
```

### Shell Scripting (Bash):

In shell scripting, the `date` command is commonly used for date formatting. The format string follows the syntax defined by the C standard library `strftime` function.

Example:
```bash
#!/bin/bash

# Using date command
formatted_date=$(date '+%Y-%m-%d %H:%M:%S')
echo $formatted_date  # Example output: 2024-02-14 12:34:56
```

These are just basic examples, and you can customize the format strings based on your specific requirements. Keep in mind that the format strings may vary between programming languages, so it's essential to refer to the respective documentation for accurate and detailed information. If you have specific requirements or patterns you'd like to see in different languages, feel free to ask for more details!