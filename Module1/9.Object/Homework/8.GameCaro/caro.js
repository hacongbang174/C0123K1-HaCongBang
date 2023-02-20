let cellsize = 40;
let value_x = 2;
let value_y = 3

let Cell = function(x,y) {
    this.x = x;
    this.y = y;
    this.getCell = function() {
        var left = x * cellsize;
        var top = y * cellsize;
        var cellHTML = `<div class="cell" id="cell-${x}-${y} onclick="play(${x},${y})"
        style="position: absolute; width: ${cellsize}px; hieght = ${cellsize}px; left: ${left}px; top: ${top}px; line-height: ${cellsize}px;"></div>`;
        return cellHTML;
    };
    this.draw = function() {
        var cellDiv = document.getElementById(`cell-${x}-${y}`);
        switch(this.cellDiv) {
            case value_x:
                cellDiv.innerHTML = "X";
                break;
            case value_y:
                cellDiv.innerHTML = "O";
                break;
            default:
                cellDiv.innerHTML = "";
                break;
        }
    }
}
function gameBoard(row, cols, element) {
    
}