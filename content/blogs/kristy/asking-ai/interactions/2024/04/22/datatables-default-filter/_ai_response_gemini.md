DataTables.net doesn't have a built-in way to set a default filter based on a custom condition during initialization. However, you can achieve this using a combination of the `searchCols` option and potentially the `init` event. Here's how:

**1. Define your custom filter logic:**

  -  Identify the column(s) you want to filter on.
  -  Determine the logic for filtering the data based on those columns.

**2. Use `searchCols` during initialization:**

  -  Set the `searchCols` option in the DataTable initialization options.
  -  This option takes an array of objects, where each object defines the filter for a specific column.

**Here's an example:**

```javascript
$(document).ready(function() {
  $('#myTable').DataTable({
    searchCols: [
      {
        // This object defines the filter for the first column
        search: "valueToMatch", // The value to filter by
        column: 0 // Index of the column (0-based indexing)
      }
    ],
    // Other DataTable options...
  });
});

// This function defines your custom filter logic (replace with your logic)
function myCustomFilter(rowData) {
  // Implement your logic to check if the row data matches your condition
  // This example checks if a specific value in the second column is greater than 10
  return rowData[1] > 10;
}
```

**Explanation:**

  -  The `searchCols` option defines an array with one object in this example. 
  -  This object specifies the `search` value ("valueToMatch") and the `column` index (0 for the first column).
  -  Since `searchCols` only accepts search strings, you can't directly implement complex logic here.

**3. Using the `init` event (optional):**

  -  If your custom filter logic requires more complex checks on the entire row data, you can utilize the `init` event.
  -  This event fires after the DataTable has been initialized.

**Here's how to use it:**

```javascript
$(document).ready(function() {
  $('#myTable').DataTable({
    init: function(settings, json) {
      // Access table data using settings.aoData
      settings.aoData = settings.aoData.filter(myCustomFilter);
    },
    // Other DataTable options...
  });
});
```

**Explanation:**

  -  The `init` event function receives the DataTable settings object and the JSON data as arguments.
  -  We use the `filter` method on the `aoData` array (containing all row data) to apply your custom filter logic (`myCustomFilter`).
  -  This approach allows for more complex filtering based on the entire row data.

**Remember to replace the example filter logic (`myCustomFilter`) with your specific condition for filtering the rows.**

These methods allow you to set a default filter based on your custom logic during DataTable initialization. Choose the approach that best suits the complexity of your filtering requirements.