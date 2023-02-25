const DELTA = 1 / 100;

function GameWorld() {
    this.balls = [
        [new Vector2(1022, 413), COLOR.YELLOW],
        [new Vector2(1056, 393), COLOR.YELLOW],
        [new Vector2(1056, 433), COLOR.RED],
        [new Vector2(1090, 374), COLOR.RED],
        [new Vector2(1090, 413), COLOR.BLACK],
        [new Vector2(1090, 452), COLOR.YELLOW],
        [new Vector2(1126, 354), COLOR.YELLOW],
        [new Vector2(1126, 393), COLOR.RED],
        [new Vector2(1126, 433), COLOR.YELLOW],
        [new Vector2(1126, 472), COLOR.RED],
        [new Vector2(1162, 355), COLOR.RED],
        [new Vector2(1162, 374), COLOR.RED],
        [new Vector2(1162, 413), COLOR.YELLOW],
        [new Vector2(1162, 452), COLOR.RED],
        [new Vector2(1162, 491), COLOR.YELLOW],
        [new Vector2(413, 413), COLOR.WHITE]
    ].map(params => new Ball(params[0], params[1]));

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