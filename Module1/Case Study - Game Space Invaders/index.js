
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let Player = function () {

    this.velocity = { x: 0, y: 0 };

    image = new Image();
    image.src = "./assets/image/spaceship.png";
    image.onload = () => {
        let scale = 0.15;
        this.image = image;
        this.width = image.width * scale;
        this.height = image.height * scale;
        this.position = {
            x: canvas.width / 2 - this.width / 2,
            y: canvas.height - this.height - 20
        };
    }
    this.rotation = 0;

    this.draw = function () {
        ctx.save();

        ctx.translate(
            +player.position.x + player.width / 2,
            +player.position.y + player.height / 2
        );

        ctx.rotate(this.rotation);

        ctx.translate(
            -player.position.x - player.width / 2,
            -player.position.y - player.height / 2
        );

        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

        ctx.restore();
    }
    this.update = function () {
        if (this.image) {
            this.draw();
            this.position.x += this.velocity.x;
        }
    }
}

let Projectile = function ({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 3;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();
    }
    this.update = function () {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

}


let player = new Player();
let projectile = [];
let keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    s: {
        pressed: false
    },
    w: {
        pressed: false
    },
    space: {
        pressed: false
    }
}

let animate = function () {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    projectile.forEach(projectile => {
        projectile.update()
    });

    if (keys.a.pressed && player.position.x >= 10) {
        player.velocity.x = -7;
        player.rotation = -0.15;
    } else if (keys.d.pressed && player.position.x + player.width + 10 <= canvas.width) {
        player.velocity.x = 7;
        player.rotation = 0.15;
    }else if (keys.s.pressed && player.position.y + player.height + 10 <= canvas.height) {
        player.position.y += 2;
        player.rotation = 0;
    } else if (keys.w.pressed && player.position.y >= 10) {
        player.position.y -= 2;
        player.rotation = 0;
    } else {
        player.velocity.x = 0;
        player.rotation = 0;

    }
}
animate();

addEventListener('keydown', ({ key }) => {
    switch (key) {
        case 'a':
            console.log('left');
            keys.a.pressed = true;
            break;
        case 'd':
            console.log('right');
            keys.d.pressed = true;
            break;
        case 's':
            console.log('down');
            keys.s.pressed = true;
            break;
        case 'w':
            console.log('up');
            keys.w.pressed = true;
            break;
        case ' ':
            console.log('space');
            projectile.push(new Projectile({
                position: { x: player.position.x, y: player.position.y },
                velocity: { x: 0, y: -5 }
            }));
            break;

    }
})

addEventListener('keyup', ({ key }) => {
    switch (key) {
        case 'a':
            keys.a.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
        case 's':
            keys.s.pressed = false;
            break;
        case 'w':
            keys.w.pressed = false;
            break;
        case ' ':
            break;
    }
})