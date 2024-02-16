# Date String formats

I will never commit these to memory and every time I do a search, I wade through trash results. This morning I decided to ask the AIs and document it here so I can be done with searching and come back here whenever I need one.

This is what I asked: 

> I'm looking for a table of date format strings and how they differ across programming languages like javascript and shell scripting. Can you find me one?

I'm rating Bing's response as the best because it gave me an actual table with formats and code snippets for the 2 languages I mentioned:

| Format | Description | JavaScript | Shell Scripting |
| --- | --- | --- | --- |
| YYYY-MM-DD | Year-month-day | `date.toISOString().slice(0,10)` | `date +%F` |
| DD-MM-YYYY | Day-month-year | `date.toLocaleDateString('en-GB')` | `date +%d-%m-%Y` |
| MM-DD-YYYY | Month-day-year | `date.toLocaleDateString('en-US')` | `date +%m-%d-%Y` |
| YYYYMMDD | Year-month-day without separators | `date.toISOString().slice(0,10).replace(/-/g,'')` | `date +%Y%m%d` |
| HH:MM:SS | Hour-minute-second | `date.toTimeString().slice(0,8)` | `date +%T` |
| YYYY-MM-DD HH:MM:SS | Year-month-day hour-minute-second | `date.toISOString().slice(0,19).replace('T',' ')` | `date +%F\ %T` |

Gemini and ChatGPT tie for second due to providing tables and code snippets, but not as cleanly and concisely. Claude was... meh. 