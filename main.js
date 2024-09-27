const screen = document.getElementById("screen");
const context = screen.getContext("2d");

const TICK_RATE = 1000 / 60; // 60 updates per second

// define some state outside of the animation loop
let startingPositions = [0, 0, 100, 100];

let prevTime = performance.now();
let accumulatedTime = 0;

const animate = (timeNow) => {
    // calculate time since last frame
    const deltaTime = timeNow - prevTime;
    // update previous time
    prevTime = timeNow;
    // add to accumulated time
    accumulatedTime += deltaTime;

    // lock update rate
    while (accumulatedTime >= TICK_RATE) {
        // updating state
        startingPositions[0] += 2;
        startingPositions[1] += 2;
        accumulatedTime -= TICK_RATE;
    }

    // drawing
    context.fillStyle = "white";
    context.fillRect(0, 0, screen.width, screen.height);
    context.fillStyle = "red";
    context.fillRect(...startingPositions);

    // schedule next frame
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
