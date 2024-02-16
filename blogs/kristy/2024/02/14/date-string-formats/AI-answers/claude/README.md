Unfortunately I don't know of a specific table that compares date format strings across different programming languages like JavaScript and shell scripting. However, here is some general information on date formats in these languages:

In JavaScript, dates are formatted using the `toLocaleDateString()` and `toLocaleTimeString()` methods or libraries like Moment.js. Common format tokens include `YYYY` (4-digit year), `MM` (2-digit month), `DD` (2-digit day), `hh` (2-digit hour), `mm` (minutes), etc.

In shell scripting languages like Bash, date formats vary but often use + to concatenate date/time values. Common formats are `+%Y-%m-%d` for ISO 8601 date, `+%T` for HH:MM:SS time, `+%s` for Unix timestamp, etc. Flags like `-u` can be used to show UTC time.

So while formats differ, both generally allow customizing order/separator chars to some degree with tokens for year, month, day, hour, minutes, seconds. Some support localized formats too. But unfortunately I couldn't find a specifically comparative table outlining the token differences. Documentation for each tends to list supported tokens separately. Let me know if any other specifics would be helpful!