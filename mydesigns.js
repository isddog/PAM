const colorPicker = document.getElementById("colorPicker").value; // Select color input
const sizePicker = document.getElementById("sizePicker"); // Select size input
const gridCanvas = document.getElementById("pixelCanvas"); 
const gridHeight = document.getElementById("inputHeight").value;
const gridWidth = document.getElementById("inputWidth").value;

// When size is submitted by the user, call makeGrid()

function makeGrid(gridHeight, gridWidth) {
    rowCount = gridHeight;
    cellCount = gridWidth;
    for (r = 0; r < rowCount; r++) {
        var newRow = document.createElement("tr");
        gridCanvas.appendChild(newRow);
    }
    for (c = 0; c < cellCount; c++) {
        var cell = document.createElement("td");
        newRow.appendChild(cell);
    }
}

sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid(gridHeight, gridWidth);
}, false);
