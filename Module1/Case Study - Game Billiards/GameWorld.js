const DELTA = 1 / 100;

function GameWorld() {
    this.redBalls = [
        new Ball(new Vector2(1056,433),Color.red),//3
        new Ball(new Vector2(1090,374),Color.red),//4
        new Ball(new Vector2(1126,393),Color.red),//8
        new Ball(new Vector2(1126,472),Color.red),//10;
        new Ball(new Vector2(1162,335),Color.red),//11
        new Ball(new Vector2(1162,374),Color.red),//12
        new Ball(new Vector2(1162,452),Color.red)//14
        ]
    
        this.yellowBalls = [
        new Ball(new Vector2(1022,413),Color.yellow),//1
        new Ball(new Vector2(1056,393),Color.yellow),//2
        new Ball(new Vector2(1090,452),Color.yellow),//6
        new Ball(new Vector2(1126,354),Color.yellow),//7
        new Ball(new Vector2(1126,433),Color.yellow),//9
        new Ball(new Vector2(1162,413),Color.yellow),//13
        new Ball(new Vector2(1162,491),Color.yellow)//15
        ];
    
        this.whiteBall = new Ball(new Vector2(413,413),Color.white);
        this.blackBall = new Ball(new Vector2(1090,413),Color.black);
    
        this.balls = [
        this.yellowBalls[0],
        this.yellowBalls[1],
        this.redBalls[0],
        this.redBalls[1],
        this.blackBall,
        this.yellowBalls[2],
        this.yellowBalls[3],
        this.redBalls[2],
        this.yellowBalls[4],
        this.redBalls[3],
        this.redBalls[4],
        this.redBalls[5],
        this.yellowBalls[5],
        this.redBalls[6],
        this.yellowBalls[6],
        this.whiteBall]

    this.whiteBall = this.balls[this.balls.length - 1];
    this.stick = new Stick(
        new Vector2(413, 413),
        this.whiteBall.shoot.bind(this.whiteBall)
    );

}
GameWorld.prototype.update = function () {
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
    // this.balls[this.balls.length - 1].draw();
    this.stick.draw();
    // this.whiteBall.draw();
}
GameWorld.prototype.whiteBallsMoving = function () {
    let ballsMoving = false;

    for (let i = 0; i < this.balls.length; i++) {
        if(this.balls[i].moving) {
            ballsMoving = true;
            break;
        }
    }
    return ballsMoving;
}