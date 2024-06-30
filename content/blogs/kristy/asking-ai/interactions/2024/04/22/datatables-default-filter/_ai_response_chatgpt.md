To default the table to only show rows that match a custom filter condition using DataTables.net, you can achieve this by applying a filter upon initialization of the DataTable. Here's a basic example of how you can do this:

```javascript
$(document).ready(function() {
    // Define your custom filter condition
    var customFilterCondition = function(rowData, rowIndex) {
        // Implement your custom filter condition logic here
        // For example, let's say you want to only show rows with a certain value in a specific column
        return rowData[2] === 'desiredValue'; // Adjust column index and desired value accordingly
    };

    // Initialize DataTable with your custom filter
    var table = $('#example').DataTable({
        // Your DataTable options here
        // For example:
        "paging": true,
        "searching": true,
        // Apply the custom filter
        "initComplete": function(settings, json) {
            table.rows().every(function(index, element) {
                if (!customFilterCondition(this.data(), index)) {
                    $(this.node()).hide();
                }
            });
        }
    });
});
```

In this example:

1. Define your custom filter condition in the `customFilterCondition` function. This function should return `true` for rows that match your condition and `false` for rows that don't.

2. Initialize your DataTable with your desired options, including the `initComplete` callback function. This function will be called once the table has been fully initialized.

3. Inside the `initComplete` callback, iterate over each row of the table using the `rows().every()` function. Check if each row satisfies your custom filter condition using the `customFilterCondition` function. If it doesn't match the condition, hide the row using `$(this.node()).hide()`.

Adjust the custom filter condition logic according to your specific requirements and column data structure.