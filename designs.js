

// This function call when player press the sumbit button .
function makeGrid() {
  // Select size input
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  const table = document.getElementById('pixelCanvas');
// create new table
  table.innerHTML = "";


// loops for creating rows and cells

    //rows creation loop
  for (let i = 0; i < height; i++) {
    var tableRow = document.createElement("tr");
   // column loop creation
    for (let j = 0; j < width; j++) {
      var tableCell = document.createElement("td");
    //
      tableRow.appendChild(tableCell);
    }
    var cell = table.appendChild(tableRow);
    // create to all cell event listener
    cell.addEventListener('click', function(e){
      // Select color input
      var color = document.getElementById('colorPicker').value;
      e.target.style.backgroundColor = color;
    });
    };
}
//when user's submitting height and width selections,
//callback function makeGrid.
var sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', function (e) {
  e.preventDefault();
  makeGrid();
});
