export default class InputHandler {
    constructor() {
        this.validInput = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "];
        this.input = new Set();
        window.addEventListener("keydown", this.handleKeyDown.bind(this));
        window.addEventListener("keyup", this.handleKeyUp.bind(this));
    }

    handleKeyDown(event) {
        event.preventDefault();
        if (this.validInput.includes(event.key)) {
            this.input.add(event.key);
        }
    }

    handleKeyUp(event) {
        event.preventDefault();
        if (this.validInput.includes(event.key)) {
            this.input.delete(event.key);
        }
    }

    getCurrentInput() {
        return this.input;
    }
}
