let Canvas2D = function () {
    this.canvas = document.getElementById('screen');
    this.ctx = this.canvas.getContext('2d');
}
Canvas2D.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
}
Canvas2D.prototype.drawImage = function (image, position, origin , rotation = 0) {
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
// let image = new Image();
// image.src = `./assets/sprites/spr_background4.png`;
// Canvas.drawImage(image, 0, 0);
// setTimeout(() => {
//     Canvas.drawImage(image, 0, 0);
// },1000);



