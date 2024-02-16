Here are a few methods to track each value of a query string parameter as a different page in Google Analytics:

1. Use Advanced Filtering to set up an Include Filter:
- Create a filter to Include only the pages you want to track separately based on the query parameter value
- Set the Filter Field to Request URI
- Set the Filter Pattern to match the parameter value you want to track separately (ex: /page?PARAM=value1)

2. Use Custom Dimensions and Advanced Segments:
- Create a custom dimension to store the query parameter value 
- Set up an advanced segment for each query parameter value
- This will let you easily filter to see metrics for each value

3. Use a Server-Side Language:
- On the server, detect the query parameter value (e.g. in PHP)
- Dynamically set a custom dimension value before sending the pageview to Analytics
- Create advanced segments to view data for each custom dimension value

4. Use Google Tag Manager:
- Create a variable for the query parameter 
- Use it as a custom dimension index value on the Analytics tag
- Create advanced segments based on the custom dimension

The key thing is to get the parameter value into Analytics as a custom dimension or some other parameter, and use advanced segments to filter the data. This allows treating each value as a separate pageview essentially.