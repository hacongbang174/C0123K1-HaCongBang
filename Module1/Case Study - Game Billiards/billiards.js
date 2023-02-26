


//COLOR

const COLOR = {
    RED: 1,
    YELLOW: 2,
    BLACK: 3,
    WHITE: 4
}

//CANVAS

let Canvas2D = function () {
    this.canvas = document.getElementById('screen');
    this.ctx = this.canvas.getContext('2d');
}
Canvas2D.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
}
Canvas2D.prototype.drawImage = function (image, position, origin, rotation = 0) {
    if (!position) {
        position = new Vector2();
    }
    if (!origin) {
        origin = new Vector2();
    }
    this.ctx.save();
    this.ctx.translate(position.x, position.y);
    this.ctx.rotate(rotation);
    this.ctx.drawImage(image, -origin.x, -origin.y);
    this.ctx.restore()
}
let Canvas = new Canvas2D();


//BUTTON STATE

function ButtonState() {
    this.down = false;
    this.pressed = false;
}


//VECTOR

function Vector2(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}
Vector2.prototype.copy = function () {
    return new Vector2(this.x, this.y);
}

Vector2.prototype.sum = function (vector) {
    return new Vector2(this.x + vector.x, this.y + vector.y);
}
Vector2.prototype.addTo = function (vector) {
    this.x += vector.x;
    this.y += vector.y;
}
Vector2.prototype.subtract = function (vector) {
    return new Vector2(this.x - vector.x, this.y - vector.y);
}
Vector2.prototype.mult = function (scalar) {
    return new Vector2(this.x * scalar, this.y * scalar);
}
Vector2.prototype.dot = function (vector) {
    return (this.x * vector.x) + (this.y * vector.y);
}
Vector2.prototype.length = function () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
}


//MOUSE

function handleMouseMove(evt) {
    let x = evt.pageX;
    let y = evt.pageY;

    Mouse.position = new Vector2(x, y);
}

function handleMouseDown(evt) {

    handleMouseMove(evt);

    if (evt.which === 1) {
        if (!Mouse.left.down) {
            Mouse.left.pressed = true;
        }
        Mouse.left.down = true;
    } else if (evt.which === 2) {
        if (!Mouse.middle.down) {
            Mouse.middle.pressed = true;
        }
        Mouse.middle.down = true;
    } else if (evt.which === 3) {
        if (!Mouse.right.down) {
            Mouse.right.pressed = true;
        }
        Mouse.right.down = true;
    }
}

function handleMouseUp(evt) {

    handleMouseMove(evt);

    if (evt.which === 1) {
        Mouse.left.down = false;
    } else if (evt.which === 2) {
        Mouse.middle.down = false;
    } else if (evt.which === 3) {
        Mouse.right.down = false;
    }
}

function MouseHandler() {
    this.left = new ButtonState();
    this.middle = new ButtonState();
    this.right = new ButtonState();

    this.position = new Vector2();

    document.onmousemove = handleMouseMove;
    document.onmousedown = handleMouseDown;
    document.onmouseup = handleMouseUp;

}

MouseHandler.prototype.reset = function () {
    this.left.pressed = false;
    this.middle.pressed = false;
    this.middle.pressed = false;
}

let Mouse = new MouseHandler();




//ASSETS

let sprites = {};
let assetsStillLoading = 0;
function assetsLoadingLoop(callback) {

    if (assetsStillLoading) {
        requestAnimationFrame(assetsLoadingLoop.bind(this, callback))
    } else {
        callback();
    }

}

function loadAssets(callback) {

    function loadSprite(fileName) {
        assetsStillLoading++;

        let spriteImage = new Image();
        spriteImage.src = './assets/sprites/' + fileName;

        spriteImage.onload = function () {
            assetsStillLoading--;
        }
        return spriteImage;
    }

    sprites.background = loadSprite('spr_background4.png');
    sprites.stick = loadSprite('spr_stick.png');
    sprites.whiteBall = loadSprite('spr_ball2.png');
    sprites.redBall = loadSprite('spr_redBall2.png');
    sprites.yellowBall = loadSprite('spr_yellowBall2.png');
    sprites.blackBall = loadSprite('spr_blackBall2.png');


    assetsLoadingLoop(callback);
}

function getBallsSptiteByColor(color) {
    switch (color) {
        case COLOR.RED:
            return sprites.redBall;
        case COLOR.YELLOW:
            return sprites.yellowBall;
        case COLOR.BLACK:
            return sprites.blackBall;
        case COLOR.WHITE:
            return sprites.whiteBall;
    }
}


//BALL

const BALL_ORIGIN = new Vector2(25, 25);
const BALL_DIAMETER = 38;
const BALL_RADIUS = BALL_DIAMETER/2;

function Ball(position, color) {
    this.position = position;
    this.velocity = new Vector2();
    this.moving = false;
    this.sprite = getBallsSptiteByColor(color);
}

Ball.prototype.update = function (delta) {
    this.position.addTo(this.velocity.mult(delta));

    this.velocity = this.velocity.mult(0.984);
    if (this.velocity.length() < 5) {
        this.velocity = new Vector2()
        this.moving = false;
    }
}

Ball.prototype.draw = function () {
    Canvas.drawImage(this.sprite, this.position, BALL_ORIGIN);
}

Ball.prototype.shoot = function (power, rotation) {

    this.velocity = new Vector2(power * Math.cos(rotation), power * Math.sin(rotation));
    this.moving = true;
}

Ball.prototype.collideWithBall = function(ball) {

        //Vector pháp tuyến
        let n = this.position.subtract(ball.position);
        //khoảng cách 2 bi
        let dist = n.length();
    
        if (dist > BALL_DIAMETER) {
            return;
        }
    
        //tạo khoảng cách tối thiểu để hai banh không chạm vào nhau
        let mtd = n.mult((BALL_DIAMETER - dist) / dist);
        this.position = this.position.sum(mtd.mult(1/2));
        ball.position = ball.position.subtract(mtd.mult(1/2));
    
        //tìm đơn vị tiếp tuyến, pháp tuyến
        let un = n.mult(1 / n.length()); //pháp tuyến;
        let ut = new Vector2(-un.y, un.x); //tiếp tuyến
        let v1n = un.dot(this.velocity); 0
        let v1t = ut.dot(this.velocity); 0
        let v2n = un.dot(ball.velocity);
        let v2t = ut.dot(ball.velocity);
    
        //tìm vector pháp tuyến mới sau va chạm
        let v1nTag = v2n; //1012
        let v2nTag = v1n; //0
    
        //chuyển pháp tuyến vô hướng và vận tốc tiếp tuyến
        v1nTag = un.mult(v1nTag);
        let v1tTag = ut.mult(v1t);
        v2nTag = un.mult(v2nTag);
        let v2tTag = ut.mult(v2t);
    
        //update velocity
        this.velocity = v1nTag.sum(v1tTag);
        ball.velocity = v2nTag.sum(v2tTag);

}

Ball.prototype.collideWithTable = function(table) {

    if(!this.moving) {
        return;
    }
    let collided = false;
    if(this.position.y <= table.TopY + BALL_RADIUS) {
        this.velocity = new Vector2(this.velocity.x, - this.velocity.y);
        collided = true;
    }
    if(this.position.x >= table.RightX - BALL_RADIUS) {
        this.velocity = new Vector2(- this.velocity.x, this.velocity.y);
        collided = true;
    }
    if(this.position.y >= table.BottomY - BALL_RADIUS) {
        this.velocity = new Vector2(this.velocity.x, - this.velocity.y);
        collided = true;
    }
    if(this.position.x <= table.LeftX + BALL_RADIUS) {
        this.velocity = new Vector2(- this.velocity.x, this.velocity.y);
        collided = true;
    }
    if(collided){
        this.velocity = this.velocity.mult(0.98);
    }

}

Ball.prototype.collideWith = function (object) {
    
    if(object instanceof Ball) {
        this.collideWithBall(object);
    }else {
        this.collideWithTable(object);
    }

}


//STICK

const STICK_ORIGIN = new Vector2(970, 11);
const STICK_SHOOT_ORIGIN = new Vector2(950, 11);
const POWER_MAX = 7500;

function Stick(position, onShoot) {
    this.position = position;
    this.rotation = 0;
    this.origin = STICK_ORIGIN.copy();
    this.power = 0;
    this.onShoot = onShoot;
    this.shot = false;
}
Stick.prototype.update = function () {
    if (Mouse.left.down) {
        this.increasePower();
    } else if (this.power > 0) {
        this.shoot();
    }
    this.updateRotation();
}
Stick.prototype.draw = function () {
    Canvas.drawImage(sprites.stick, this.position, this.origin, this.rotation);
}

Stick.prototype.updateRotation = function () {
    let oppsite = Mouse.position.y - this.position.y;
    let adjacent = Mouse.position.x - this.position.x;

    this.rotation = Math.atan2(oppsite, adjacent)
}
Stick.prototype.increasePower = function () {
    if(this.power > POWER_MAX) {
        return; 
    }
    this.power += 120;
    this.origin.x += 5;
}
Stick.prototype.shoot = function () {
    this.onShoot(this.power, this.rotation);
    this.power = 0;
    this.origin = STICK_SHOOT_ORIGIN.copy();
    this.shot = true;
}
Stick.prototype.reposition = function (position) {
    this.position = position.copy();
    this.origin = STICK_ORIGIN.copy();
    this.shot = false;
}


//GAME WORLD!

const DELTA = 1 / 177;

function GameWorld() {
    this.balls = [
        new Ball(new Vector2(1022, 413), COLOR.YELLOW),
        new Ball(new Vector2(1056, 393), COLOR.YELLOW),
        new Ball(new Vector2(1056, 433), COLOR.RED),
        new Ball(new Vector2(1090, 374), COLOR.RED),
        new Ball(new Vector2(1090, 413), COLOR.BLACK),
        new Ball(new Vector2(1090, 452), COLOR.YELLOW),
        new Ball(new Vector2(1126, 354), COLOR.YELLOW),
        new Ball(new Vector2(1126, 393), COLOR.RED),
        new Ball(new Vector2(1126, 433), COLOR.YELLOW),
        new Ball(new Vector2(1126, 472), COLOR.RED),
        new Ball(new Vector2(1162, 335), COLOR.RED),
        new Ball(new Vector2(1162, 374), COLOR.RED),
        new Ball(new Vector2(1162, 413), COLOR.YELLOW),
        new Ball(new Vector2(1162, 452), COLOR.RED),
        new Ball(new Vector2(1162, 491), COLOR.YELLOW),
        new Ball(new Vector2(413, 413), COLOR.WHITE)
    ];
    this.whiteBall = this.balls[this.balls.length - 1];
    this.stick = new Stick(
        new Vector2(413, 413),
        this.whiteBall.shoot.bind(this.whiteBall)
    );
    this.table = {
        TopY: 57,
        RightX: 1443,
        BottomY: 768,
        LeftX: 57
    }
}

GameWorld.prototype.handleCollisions = function () {
    for (let i = 0; i < this.balls.length; i++) {
        this.balls[i].collideWith(this.table);
        for (let j = i + 1; j < this.balls.length; j++) {
            let firstBall = this.balls[i];
            let seconBall = this.balls[j];
            firstBall.collideWith(seconBall);
        }
    }
}
GameWorld.prototype.update = function () {
    this.handleCollisions();

    this.stick.update();

    for (let i = 0; i < this.balls.length; i++) {
        this.balls[i].update(DELTA);
    }

    if (!this.whiteBallsMoving() && this.stick.shot) {
        this.stick.reposition(this.whiteBall.position)
    }
}
GameWorld.prototype.draw = function () {
    Canvas.drawImage(sprites.background, { x: 0, y: 0 });

    for (let i = 0; i < this.balls.length; i++) {
        this.balls[i].draw();
    }
    // this.whiteBall.draw();
    this.stick.draw();
}
GameWorld.prototype.whiteBallsMoving = function () {
    let ballsMoving = false;

    for (let i = 0; i < this.balls.length; i++) {
        if (this.balls[i].moving) {
            ballsMoving = true;
            break;
        }
    }
    return ballsMoving;
}



//GAME

function Game() {

}

Game.prototype.init = function () {
    this.gameWorld = new GameWorld();
}

Game.prototype.start = function () {
    BillardsGame.init();
    BillardsGame.mainLoop();

}

Game.prototype.mainLoop = function () {

    Canvas.clear();

    BillardsGame.gameWorld.update();
    BillardsGame.gameWorld.draw();
    Mouse.reset();

    requestAnimationFrame(BillardsGame.mainLoop)
}

let BillardsGame = new Game();