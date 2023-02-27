
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let Player = function () {

    this.velocity = { x: 0, y: 0 };

    let image = new Image();
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
    this.radius = 4;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.position.x + 34, this.position.y + 34, this.radius, 0, Math.PI * 2);
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

let Invader = function (position) {

    this.velocity = { x: 0, y: 0 };

    let image = new Image();
    image.src = "./assets/image/invader.png";
    image.onload = () => {
        let scale = 1;
        this.image = image;
        this.width = image.width * scale;
        this.height = image.height * scale;
        this.position = {
            x: position.x,
            y: position.y
        };
    }

    this.draw = function () {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }
    this.update = function (velocity) {
        if (this.image) {
            this.draw();
            this.position.x += velocity.x;
            this.position.y += velocity.y;
        }
    }
    this.shoot = function(invaderProjectile) {
        invaderProjectile.push(new InvaderProjectile({
            position: {x: this.position.x + this.width/2, y: this.position.y + this.height},
            velocity: {x: 0, y: 5}
        }))
    }
}

let InvaderProjectile = function ({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.width = 3;
    this.height = 10;

    this.draw = function () {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.position.x, this.position.y , this.width, this.height);
    }
    this.update = function () {
        this.draw();    
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

}

let Grid = function () {
    this.position = { x: 0, y: 0 }
    this.velocity = { x: 3, y: 0 };
    this.invader = [];
    let rows = Math.floor(Math.random() * 5 + 1);
    let cols = Math.floor(Math.random() * 10 + 5);
    this.width = cols * 30;

    for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
            this.invader.push(new Invader(position = { x: x * 30, y: y * 30 }))
        }
    };
    this.update = function () {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.velocity.y = 0;
        if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
            this.velocity.x = - this.velocity.x;
            this.velocity.y = 20;
        }
    }
}

let player = new Player();
let projectiles = [];
let grids = [];
let invaderProjectiles = [];

let ButtonState = {
    BUTTON_LEFT: {
        pressed: false
    },
    BUTTON_RIGHT: {
        pressed: false
    },
    BUTTON_DOWN: {
        pressed: false
    },
    BUTTON_UP: {
        pressed: false
    },
    space: {
        pressed: false
    }
}
let frames = 0;
let randomInterval = Math.floor(Math.random() * 500) + 500;
let animate = function () {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.update();
    projectiles.forEach((projectile, index) => {
        if (projectile.position.y + projectile.radius <= 0) {
            setTimeout(() => {
                projectiles.splice(index, 1);
            }, 0);
        } else {
            projectile.update();
        }
    });
    invaderProjectiles.forEach((invaderProjectile) => {
        invaderProjectile.update();
    })

    grids.forEach((grid, gridIndex) => {
        grid.update();
        if(frames % 100 == 0 && grid.invader.length > 0) {
            grid.invader[Math.floor(Math.random() * grid.invader.length)].shoot(invaderProjectiles);
        }
        grid.invader.forEach((invader, i) => {
            invader.update(grid.velocity);
            projectiles.forEach((projectile, j) => {
                if (
                    projectile.position.y + projectile.radius >= invader.position.y &&
                    projectile.position.y - projectile.radius <= invader.position.y + invader.height &&
                    projectile.position.x + projectile.radius >= invader.position.x &&
                    projectile.position.x - projectile.radius <= invader.position.x + invader.width
                ) {
                    setTimeout(() => {
                        let invaderFound = grid.invader.find((invader2) => invader2 === invader);
                        let projectileFound = projectiles.find((projectile2) => projectile2 === projectile);
                        if (invaderFound && projectileFound) {
                            grid.invader.splice(i, 1);
                            projectiles.splice(j, 1);
                            if(grid.invader.length > 0) {
                                let firstInvader = grid.invader[0];
                                let lastInvader = grid.invader[grid.invader.length - 1];
                                grid.width = lastInvader.position.x - firstInvader.position.x + lastInvader.width;
                                grid.position.x = firstInvader.position.x;
                            }else {
                                grids.splice(gridIndex,1);
                            }
                        }
                    }, 0)
                }
            })
        })
    });

    if (ButtonState.BUTTON_LEFT.pressed && player.position.x >= 0) {
        player.velocity.x = -7;
        player.rotation = -0.15;
    } else if (ButtonState.BUTTON_RIGHT.pressed && player.position.x + player.width <= canvas.width) {
        player.velocity.x = 7;
        player.rotation = 0.15;
    } else if (ButtonState.BUTTON_UP.pressed && player.position.y + player.height <= canvas.height) {
        player.position.y += 2;
        player.rotation = 0;
    } else if (ButtonState.BUTTON_DOWN.pressed && player.position.y >= 0) {
        player.position.y -= 2;
        player.rotation = 0;
    } else {
        player.velocity.x = 0;
        player.rotation = 0;

    }

    if (frames % randomInterval == 0) {
        grids.push(new Grid());
        randomInterval = Math.floor(Math.random() * 500) + 500;
        frames = 0;
    }
    frames++;
}
animate();

addEventListener('keydown', (evt) => {
    switch (evt.keyCode) {
        case 37:
            console.log('left');
            ButtonState.BUTTON_LEFT.pressed = true;
            break;
        case 39:
            console.log('right');
            ButtonState.BUTTON_RIGHT.pressed = true;
            break;
        case 38:
            console.log('down');
            ButtonState.BUTTON_DOWN.pressed = true;
            break;
        case 40:
            console.log('up');
            ButtonState.BUTTON_UP.pressed = true;
            break;
        case 32:
            console.log('space');
            projectiles.push(new Projectile({
                position: { x: player.position.x, y: player.position.y },
                velocity: { x: 0, y: -10 }
            }));
            break;
    }
})

addEventListener('keyup', (evt) => {
    switch (evt.keyCode) {
        case 37:
            console.log('left');
            ButtonState.BUTTON_LEFT.pressed = false;
            break;
        case 39:
            console.log('right');
            ButtonState.BUTTON_RIGHT.pressed = false;
            break;
        case 38:
            console.log('down');
            ButtonState.BUTTON_DOWN.pressed = false;
            break;
        case 40:
            console.log('up');
            ButtonState.BUTTON_UP.pressed = false;
            break;
        case 32:
            break;
    }
})