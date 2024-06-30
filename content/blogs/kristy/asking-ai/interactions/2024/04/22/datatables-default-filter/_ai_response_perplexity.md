To default the DataTable to only show rows that match a custom filter condition, you can use the `DataTable.ext.search.push()` method to define a custom filtering function. Here's how you can do it:

```javascript
// Define the custom filtering function
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        // Get the values you want to filter on
        var minAge = parseInt( $('#min').val(), 10 );
        var maxAge = parseInt( $('#max').val(), 10 );
        var age = parseFloat( data[3] ) || 0; // assuming age is in the 4th column

        // Check if the age is within the specified range
        if ( ( isNaN( minAge ) && isNaN( maxAge ) ) ||
             ( isNaN( minAge ) && age <= maxAge ) ||
             ( minAge <= age   && isNaN( maxAge ) ) ||
             ( minAge <= age   && age <= maxAge ) )
        {
            return true;
        }
        return false;
    }
);

// Initialize the DataTable
var table = $('#example').DataTable();

// Redraw the table when the filter values change
$('#min, #max').keyup( function() {
    table.draw();
});
```

In this example, we define a custom filtering function that checks if the age (in the 4th column) is within the specified range. The function returns `true` if the row should be included, and `false` if it should be excluded.

We then add this custom filtering function to the `DataTable.ext.search` array using the `push()` method. This ensures that the function is called every time the table is filtered or redrawn.

Finally, we initialize the DataTable and add event listeners to the `min` and `max` input fields. When the user changes the filter values, we call the `draw()` method to redraw the table with the new filter applied.

You can modify the filtering logic to match your specific requirements, such as filtering on different columns or using different criteria. The key is to define the custom filtering function and add it to the `DataTable.ext.search` array.

Citations:
[1] https://stackoverflow.com/questions/33169649/how-to-get-filtered-data-result-set-from-jquery-datatable
[2] https://stackoverflow.com/questions/13012585/how-i-can-filter-a-datatable
[3] https://datatables.net/extensions/datetime/examples/integration/datatables.html
[4] https://datatables.net/examples/plug-ins/range_filtering.html
[5] https://editor.datatables.net/manual/php/conditions