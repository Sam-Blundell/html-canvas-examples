export default class Bouncer {
    constructor(animation, xSpeed = 1, ySpeed = 1) {
        this.animation = animation;
        this.width = 128;
        this.height = 72;
        this.x = animation.width / 2 - this.width / 2;
        this.y = animation.height / 2 - this.height / 2;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.image = new Image();
        this.image.src = "assets/dvd-logo.svg";
    }

    update() {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;


        if (this.x < 0 || this.x > this.animation.width - this.width) {
            this.xSpeed *= -1;
        }

        if (this.y < 0 || this.y > this.animation.height - this.height) {
            this.ySpeed *= -1;
        }
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}