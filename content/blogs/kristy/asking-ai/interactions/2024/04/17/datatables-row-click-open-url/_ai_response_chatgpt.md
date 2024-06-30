You can achieve this by utilizing DataTables' event handling capabilities. You'll need to listen for the `click` event on the rows and then extract the URL from the 4th column when a row is clicked. Once you have the URL, you can open it in a new tab or redirect the current tab using JavaScript. Here's how you can do it:

```javascript
$(document).ready(function() {
    $('#your_table_id').DataTable();

    $('#your_table_id tbody').on('click', 'tr', function() {
        var rowData = $('#your_table_id').DataTable().row(this).data();
        var url = rowData[3]; // Assuming the URL is in the 4th column (index 3)

        // Open the URL in a new tab
        window.open(url, '_blank');

        // If you want to redirect the current tab instead, use:
        // window.location.href = url;
    });
});
```

Replace `#your_table_id` with the actual ID of your table. This code listens for clicks on any row (`tr`) within the table body (`tbody`). When a row is clicked, it extracts the data for that row and retrieves the URL from the 4th column (index 3). Finally, it opens the URL in a new tab using `window.open()`, or you can redirect the current tab using `window.location.href`.