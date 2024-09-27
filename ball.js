export default class Ball {
    constructor(animation, xPos, yPos) {
        this.animation = animation;
        this.radius = 10;
        this.x = xPos;
        this.y = yPos;
        this.xSpeed = Math.random() * 4 - 2;
        this.ySpeed = -7;
        this.markForDeletion = false;
    }

    update() {
        if (this.ySpeed < 10) {
            this.ySpeed += 0.15;
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        // bounce off ground and lose some speed
        if (this.y + this.radius > this.animation.height) {
            this.y = this.animation.height - this.radius;
            this.ySpeed *= -0.8;
        }

        // bounce off walls
        if (this.x - this.radius < 0 || this.x + this.radius > this.animation.width) {
            this.xSpeed *= -1;
        }

        // delete if vertical speed is very low
        if (Math.abs(this.ySpeed) < 0.1 && this.y > this.animation.height - 50) {
            this.markForDeletion = true;
        }

    }

    draw(context) {
        context.fillStyle = "red";
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }
}