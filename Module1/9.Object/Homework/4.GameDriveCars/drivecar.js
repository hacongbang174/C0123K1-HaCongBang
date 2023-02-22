const GAMEBOARD_WIDTH = 500;
const GAMEBOARD_HEIGHT = 500;

const ORIENTATION_LEFT = "left";
const ORIENTATION_RIGHT = "right";
const ORIENTATION_UP = "up";
const ORIENTATION_DOWN = "down";

let CAR_WIDTH = 25;
let CAR_HEIGHT = 50;
let OBSTACLE_WIDTH = 50;
let OBSTACLE_HEIGHT = 50;

const DEFAULT_CAR_X_POSITION = 100;
const DEFAULT_CAR_Y_POSITION = 100;
const DEFAULT_CAR_ORIENTATION = ORIENTATION_DOWN;
const DEFAULT_CAR_SPEED = 10;
const DEFAULT_OBSTACLE_X_POSITION = 25;
const DEFAULT_OBSTACLE_Y_POSITION = 25;

function Car(){
    this.xPosition = DEFAULT_CAR_X_POSITION;
    this.yPosition = DEFAULT_CAR_Y_POSITION;
    this.orientation = ORIENTATION_UP;
    this.speed = DEFAULT_CAR_SPEED;
    this.step = 1;

    this.buildImageCar = function(){
        this.image = this.orientation + '.jpg';
    };
    this.buildImageCar();

    this.move = function(){
        switch (this.orientation) {
            case ORIENTATION_DOWN:
                CAR_WIDTH = 25;
                CAR_HEIGHT = 50;    
                this.yPosition += this.speed;
                break;
            case ORIENTATION_UP:
                CAR_WIDTH = 25;
                CAR_HEIGHT = 50;
                this.yPosition -= this.speed;
                break;
            case ORIENTATION_LEFT:
                CAR_WIDTH = 50;
                CAR_HEIGHT = 25; 
                this.xPosition -= this.speed;
                break;
            case ORIENTATION_RIGHT:
                CAR_WIDTH = 50;
                CAR_HEIGHT = 25; 
                this.xPosition += this.speed;
                break;
        }
        if(this.step === 2){
            this.step = 1;
        } else {
            this.step = 2;
        }
        this.buildImageCar();
    };

    this.turn = function(orientation){
        this.orientation = orientation;
        this.step = 1;
        this.buildImageCar();
    };

    this.show = function(ctx){
        var image = new Image();
        var xPosition = this.xPosition;
        var yPosition = this.yPosition;
        image.onload = function(){
            ctx.drawImage(image, xPosition, yPosition, CAR_WIDTH, CAR_HEIGHT);
        };
        image.src = this.image;
    }
}
function Obstacle(){
    this.xPositionObs = DEFAULT_OBSTACLE_X_POSITION;
    this.yPositionObs = DEFAULT_OBSTACLE_Y_POSITION;

    this.buildImageObs = function(){
        this.imageObs = 'obstacle.png';
    };
    this.buildImageObs();

    this.show = function(ctx){
        var imageObs = new Image();
        var xPositionObs = this.xPositionObs;
        var yPositionObs = this.yPositionObs;
        imageObs.onload = function(){
            ctx.drawImage(imageObs, xPositionObs, yPositionObs, OBSTACLE_WIDTH, OBSTACLE_HEIGHT);
        };
        imageObs.src = this.imageObs;
    }
}

function GameBoard() {
    this.car = new Car();
    this.obs = new Obstacle();
    this.ctx = undefined;
    this.start = function(){
        this.ctx = document.getElementById('driveCar').getContext('2d');
        this.car.show(this.ctx);
        this.obs.show(this.ctx);
    };

    this.render = function(){
        this.ctx.clearRect(0, 0, GAMEBOARD_WIDTH, GAMEBOARD_HEIGHT);
        this.car.show(this.ctx);
        this.obs.show(this.ctx);
    };

    this.moveCar = function(event){
        var orientation = 0;
        switch (event.which){
            case 37:
                orientation = ORIENTATION_LEFT;
                this.car.speed = DEFAULT_CAR_SPEED;
                if (event.ctrlKey) {
                    this.car.speed = 40;
                }
                break;
            case 38:
                orientation = ORIENTATION_UP;
                this.car.speed = DEFAULT_CAR_SPEED;
                if (event.ctrlKey) {
                    this.car.speed = 40;
                }
                break;
            case 39:
                orientation = ORIENTATION_RIGHT;
                this.car.speed = DEFAULT_CAR_SPEED;
                if (event.ctrlKey) {
                    this.car.speed = 40;
                }
                break;
            case 40:
                orientation = ORIENTATION_DOWN;
                this.car.speed = DEFAULT_CAR_SPEED;
                if (event.ctrlKey) {
                    this.car.speed = 40;
                }
                break;
        }
        if(orientation){
            if(this.car.orientation !== orientation){
                this.car.orientation = orientation;
            } else {
                this.car.move();
            }
            this.render();
        }
        // if (this.car.xPosition == this.obs.xPositionObs && this.car.yPosition == this.obs.yPositionObs) {
        //     alert("Game Over");
        // }
    }
}
var gameBoard = new GameBoard();
gameBoard.start();
