const screen = document.getElementById("screen");
const context = screen.getContext("2d");

// drawing the white background
context.fillStyle = "white";
context.fillRect(0, 0, screen.width, screen.height);

// drawing lines
// set colour and thickness of the pen
context.strokeStyle = "black";
context.lineWidth = 5;

// // draw a line from (100, 100) to (400, 50)
// context.beginPath(); // clear previous positions
// context.moveTo(100, 20); // move to this coordinate without drawing
// context.lineTo(400, 50); // define a line from current coordinate to (300, 50)
// context.stroke(); // draw the line

// // draw a green box from (50, 50) to (200, 200)
// context.strokeStyle = "green";
// context.beginPath();
// context.moveTo(50, 50);
// context.lineTo(200, 50);
// context.lineTo(200, 200);
// context.lineTo(50, 200);
// context.lineTo(50, 50); // this works to close the box but .closePath() is better
// // context.closePath(); // close the path
// context.stroke();

// // a blue box with missing vertical sides from (100, 100) to (150, 150)
// context.strokeStyle = "blue";
// context.beginPath();
// context.moveTo(100, 100);
// context.lineTo(150, 100);
// context.moveTo(150, 150); // because we used moveTo, the pen will move to this point without drawing
// context.lineTo(100, 150);
// context.stroke();

// // draw a filled red triangle from (75, 200) to (300, 200) to (250, 300)
// context.fillStyle = "red";
// context.beginPath();
// context.moveTo(50, 300);
// context.lineTo(100, 225);
// context.lineTo(150, 300);
// context.closePath();
// context.fill();

// // draw an arc from (300, 300) with radius 50, starting at 0 degrees and ending at 180 degrees
// context.strokeStyle = "black";
// context.beginPath();
// context.arc(300, 300, 100, 0, Math.PI/3);
// context.stroke();
// context.arc(300, 300, 100, Math.PI/3, Math.PI/(1.5));
// // context.beginPath();
// context.arc(300, 300, 100, Math.PI/(1.5), Math.PI);
// context.stroke();

// // draw an image on the canvas
// const cat = new Image();
// cat.src = "./cat.jpg";
// cat.onload = () => {
//   context.drawImage(cat, 60, 100, 369, 271);
// };