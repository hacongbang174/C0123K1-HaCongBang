
function Hero(image, top, left, width, height, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
    this.speed = speed;

    this.getHeroElement = function () {
        return '<img width="' + this.width + '"' +
            ' height="' + this.height + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += this.speed;
    }
    this.moveLeft = function () {
        this.left -= this.speed;
    }
    this.moveUP = function () {
        this.top -= this.speed;
    }
    this.moveDown = function () {
        this.top += this.speed;
    }
}
var hero = new Hero('doraemon.png', 10, 10, 150, 150, 50);
function start() {
    if (hero.left < window.innerWidth - hero.width) {
        hero.moveRight();
    }else if (hero.top < window.innerHeight - hero.height) {
        hero.moveDown();
    } else if (hero.left > window.innerWidth - hero.width) {
        hero.moveLeft();
    } else if (hero.top > window.innerHeight - hero.height) {
        hero.moveUP();
    };
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100)
}
start();