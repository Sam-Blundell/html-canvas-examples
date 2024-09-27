export default class Bouncer {
    constructor(game, xSpeed = 1, ySpeed = 1) {
        this.game = game;
        this.width = 128;
        this.height = 72;
        this.x = game.width / 2 - this.width / 2;
        this.y = game.height / 2 - this.height / 2;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.image = new Image();
        this.image.src = "assets/dvd-logo.svg";
    }

    update() {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;


        if (this.x < 0 || this.x > this.game.width - this.width) {
            this.xSpeed *= -1;
        }

        if (this.y < 0 || this.y > this.game.height - this.height) {
            this.ySpeed *= -1;
        }
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}