function Stick() {
    this.position = new Vector2( 400,400);
    this.origin = new Vector2 (500,20);
}
Stick.prototype.update = function () {
        this.position = Mouse.position;
        if (Mouse.left.pressed) {
            console.log('left');
        }
    // // // this.position_x++;   
}
Stick.prototype.draw = function () {
    Canvas.drawImage(sprites.stick, this.position, this.origin);
}