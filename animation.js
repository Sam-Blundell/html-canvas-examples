import Bouncer from "./bouncer.js";

export default class Animation {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.bouncer = new Bouncer(this);
    }

    update() {
        this.bouncer.update();
    }

    draw(context) {
        context.fillStyle = "black";
        context.fillRect(0, 0, this.width, this.height);
        this.bouncer.draw(context);
    }
}