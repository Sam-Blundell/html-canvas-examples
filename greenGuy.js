import Ball from "./ball.js";

export default class GreenGuy {
    constructor(animation) {
        this.animation = animation;
        this.radius = 30;
        this.x = animation.width / 2;
        this.y = animation.height / 2;
        this.speed = 2;
        this.balls = [];
        this.hasThrown = false;
    }

    fireBall() {
        this.balls.push(new Ball(this.animation, this.x, this.y));
        this.hasThrown = true;
    }

    update(input) {
        let xDirection = 0;
        let yDirection = 0;
        if (input.has("ArrowUp")) yDirection -= 1;
        if (input.has("ArrowDown")) yDirection += 1;
        if (input.has("ArrowLeft")) xDirection -= 1;
        if (input.has("ArrowRight")) xDirection += 1;

        // ensure diagonal movement is not faster than cardinal movement
        if (xDirection !== 0 && yDirection !== 0) {
            xDirection /= Math.sqrt(2);
            yDirection /= Math.sqrt(2);
        }

        this.x += xDirection * this.speed;
        this.y += yDirection * this.speed;

        this.balls.forEach(ball => {
            ball.update();
        });

        this.balls = this.balls.filter(ball => !ball.markForDeletion);

        if (input.has(" ")) {
            if (this.hasThrown === false) {
                this.fireBall();
            }
        } else {
            this.hasThrown = false;
        }
    }

    draw(context) {
        context.fillStyle = "lightGreen";
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();

        this.balls.forEach(ball => {
            ball.draw(context);
        });
    }
}