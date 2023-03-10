
function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += this.speed;
        console.log("oke: " + this.left)
    }
    this.moveLeft = function () {
        this.left -= this.speed;
        console.log("oke: " + this.left)
    }
    this.moveUp = function () {
        this.top -= this.speed;
        console.log("oke: " + this.top)
    }
    this.moveDown = function () {
        this.top += this.speed;
        console.log("oke: " + this.top)
    }
}
var hero = new Hero('doraemon.png', 20, 10, 150, 50);
// hero.getHeroElement();
// function start() {
//     hero.moveUp();
//     setTimeout(start, 500);
// }
// start();
function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top == 20) {
        hero.moveRight();
    } else if (hero.left > window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
        hero.moveDown();
    } else if (window.innerHeight - hero.size < hero.top) {
        hero.moveLeft();
    }
    if (hero.left === 10) {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100);
}
start();