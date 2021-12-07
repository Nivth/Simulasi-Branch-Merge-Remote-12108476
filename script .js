// makning google dinosaur 
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min) + min);
    return num;
}

function Shape(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;

    this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = '#00FF00';
        ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }

    this.update = function() {
        if ((this.x + this.velX > width) || (this.x + this.velX < 0)) {
            this.velX = -this.velX;
        }
        if ((this.y + this.velY > height) || (this.y + this.velY < 0)) {
            this.velY = -this.velY;
        }
        this.x += this.velX;
        this.y += this.velY;
        this.draw();
    }
}

// create the balls and add to array
const balls = [];

for (let i = 0; i < 100; i++) {
    balls.push(new Shape(random(0, width), random(0, height), random(-7, 7), random(-7, 7), true));
}

// animation loop
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        if (balls[i].exists) {
            balls[i].draw();
            balls[i].update();
        }
    }
}