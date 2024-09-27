const screen = document.getElementById("screen");
const context = screen.getContext("2d");

// define some state outside of the animation loop
let startingPositions = [0, 0, 100, 100];

const animate = () => {
    // drawing
    context.fillStyle = "white";
    context.fillRect(0, 0, screen.width, screen.height);
    context.fillStyle = "red";
    context.fillRect(...startingPositions); // shorthand method to draw a filled rectangle

    // updating state
    startingPositions[0] += 2;
    startingPositions[1] += 2;

    // schedule next frame
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
