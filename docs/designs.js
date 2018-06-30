function makeGrid() 
{
	
	
	var grid, cell, gridHeight, gridWidth, rows;
	
	grid = $('#pixelCanvas');
	// Select size input
	gridHeight = $('#inputHeight').val();
	gridWidth = $('#inputWidth').val();
	
	grid.children().remove()
	
	for (i = 0; i < gridHeight; i++) 
		{
			grid.append('<tr></tr>');
		}
	
	rows = $('tr');
	
	for (j = 0; j < gridWidth; j++) 
		{
			rows.append('<td></td>');
		} 
	
	cell = grid.find('td');
	
	// When td is clicked on, change its color
	cell.click(function() 
		{					
			var color;
			color = $("#colorPicker").val(); // Select color input
			$(this).attr('bgcolor', color);
		});
	
}

// When size is submitted by the user, call makeGrid()
	var submitQuery;

	submitQuery = $('input[type="submit"]')

	submitQuery.click(function(event) 
		{
  			event.preventDefault();
  			makeGrid();
		});

