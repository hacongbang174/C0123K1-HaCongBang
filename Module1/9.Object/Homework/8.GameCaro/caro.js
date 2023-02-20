let cellsize = 40;
let value_X = 2;
let value_O = 3;
let value_empty = 1;

function Cell(x, y) {
    this.x = x;
    this.y = y;
    this.value = value_empty;
    this.getHtml = function(){
        var top = x * cellsize;
        var left = y * cellsize;
        var cellHtml = `<div id="cell-${x}-${y}" onclick="play(${x}, ${y})" class="cell" 
            style="position: absolute; 
            width: ${cellsize}px; 
            height: ${cellsize}px; 
            left: ${left}px; 
            top: ${top}px; 
            line-height: ${cellsize}px;">
            </div>`;
        return cellHtml;
    };
    
    this.draw = function () {
        var cellDiv = document.getElementById("cell-"+x+"-"+y);
        switch (this.value){
            case value_X:
                cellDiv.innerHTML = "X";
                break;
            case value_O:
                cellDiv.innerHTML = "O";
                break;
            default:
                cellDiv.innerHTML = "";
                break;
        }
    }
}
function GameCaro(rows, cols, elementId) {
    this.rows = rows;
    this.cols = cols;
    this.elementId = elementId;
    this.turn = value_O;
    this.cells = [];
    this.isOver = false;
    
    this.draw = function () {
        var gameCaroDiv = document.getElementById(this.elementId);
        gameCaroDiv.innerHTML = "";
        for(var i = 0; i < this.rows; i++){
            var row = [];
            this.cells.push(row);
            for(var j = 0; j < this.cols; j++){
                var cell = new Cell(i, j);
                row.push(cell);
                gameCaroDiv.innerHTML += cell.getHtml();
            }
        }
    };

    this.play = function (x, y) {
        if(this.isOver) {
            return;
        }
        var cell = this.cells[x][y];
        if(cell.value === value_empty){
            cell.value = this.turn;
            cell.draw();
            this.check(x, y);
            if(this.turn === value_O){
                this.turn = value_X;
            } else {
                this.turn = value_O;
            }
        } else {
            alert("Cell is not empty");
        }
    };
    this.check = function (x, y) {
        var cell = this.cells[x][y];
        var count = 1;
        var i = 1;
        while (y + i < this.cols && this.cells[x][y+i].value === cell.value) {
            count++;
            i++;
        }
        var i = 1;
        while (y - i >= 0 && this.cells[x][y-i].value === cell.value) {
            count++;
            i++;
        }
        this.endGame(count);
        var count = 1;
        var i = 1;
        while (x + i < this.rows && this.cells[x+i][y].value === cell.value) {
            count++;
            i++
        }
        var i = 1;
        while(x-i >= 0 && this.cells[x-i][y].value === cell.value) {
            count++;
            i++;
        }
        this.endGame(count);

        var count = 1;
        var i = 1;
        var j = 1;
        while(x + i < this.rows && y + j < this.cols && this.cells[x+i][y+j].value === cell.value) {
            count++;
            i++;
            j++
        }
        var i = 1;
        var j = 1;
        while(x - i >=0 && y - j >=0 && this.cells[x-i][y-j].value === cell.value) {
            count++;
            i++;
            j++
        }
        this.endGame(count);

        var count = 1;
        var i = 1;
        var j = 1;
        while(x + i < this.rows && y - j >=0 && this.cells[x+i][y-j].value === cell.value) {
            count++;
            i++;
            j++
        }
        var i = 1;
        var j = 1;
        while(x - i >=0 && y + j < this.cols && this.cells[x-i][y+j].value === cell.value) {
            count++;
            i++;
            j++
        }
        this.endGame(count);
    };
    this.endGame = function(count) {
        if(count >= 5) {
            this.isOver = true;
            alert('You win!');
        }
    };
}
function play(x,y) {
    gameCaro.play(x,y);
}
function start() {
    gameCaro = new GameCaro(10,10,"caro");
    gameCaro.draw();
}
let gameCaro;
start();
