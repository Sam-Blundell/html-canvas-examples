import GreenGuy from "./greenGuy.js";
import InputHandler from "./inputHandler.js";

export default class Animation {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.inputHandler = new InputHandler();
        this.greenGuy = new GreenGuy(this);
    }

    update() {
        this.greenGuy.update(this.inputHandler.getCurrentInput());
    }

    draw(context) {
        context.fillStyle = "black";
        context.fillRect(0, 0, this.width, this.height);
        this.greenGuy.draw(context);
    }
}