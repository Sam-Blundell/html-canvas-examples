import animation from "./animation.js";

const TICK_RATE = 1000 / 60; // 60 updates per second

const screen = document.getElementById("screen");
const context = screen.getContext("2d");

const Animation = new animation(screen.height, screen.width);

let prevTime = performance.now();
let accumulatedTime = 0;

const animate = (timeNow) => {
    const deltaTime = timeNow - prevTime;
    prevTime = timeNow;
    accumulatedTime += deltaTime;

    // lock update rate
    while (accumulatedTime >= TICK_RATE) {
        Animation.update();
        accumulatedTime -= TICK_RATE;
    }

    Animation.draw(context);

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
