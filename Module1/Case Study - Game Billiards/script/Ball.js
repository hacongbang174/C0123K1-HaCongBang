const BALL_ORIGIN = new Vector2(25, 25);
const BALL_DIAMETER = 38;

function Ball(position, color) {
    this.position = position;
    this.velocity = new Vector2();
    this.moving = false;
    this.sprite = getBallsSptiteByColor(color);
}
  
Ball.prototype.update = function(delta) {
    this.position.addTo(this.velocity.mult(delta));

    this.velocity = this.velocity.mult(0.98);
    if(this.velocity.length() < 5) {
        this.velocity = new Vector2()
        this.moving = false;
    }
}

Ball.prototype.draw = function() {
    Canvas.drawImage(this.sprite, this.position, BALL_ORIGIN);
}

Ball.prototype.shoot = function(power, rotation) {

    this.velocity = new Vector2(power * Math.cos(rotation), power * Math.sin(rotation));
    this.moving = true;
}  

Ball.prototype.collideWith = function(ball) {

    //Vector pháp tuyến
    let n = this.position.subtract(ball.position);
    //khoảng cách 2 bi
    let dist = n.length();

    if(dist > BALL_DIAMETER){
        return;
    }
    //tìm đơn vị tiếp tuyến, pháp tuyến
    let un = n.mult(1/n.length()); //pháp tuyến
    let ut = new Vector2(-un.y,un.x); //tiếp tuyến
    let v1n = un.dot(this.velocity);
    let v1t = ut.dot(this.velocity);
    let v2n = un.dot(ball.velocity);
    let v2t = ut.dot(ball.velocity);

    //tìm vector pháp tuyến mới sau va chạm
    let v1nTag = v2n;
    let v2nTag = v1n;
    //chuyển pháp tuyến vô hướng và vận tốc tiếp tuyến
    v1nTag = un.mult(v1nTag);
    let v1tTag = ut.mult(v1t);
    v2nTag = un.mult(v2nTag);
    let v2tTag = ut.mult(v2t);
    //update velocity
    this.velocity = v1nTag.add(v1tTag);
    ball.velocity = v2nTag.add(v2tTag);
}