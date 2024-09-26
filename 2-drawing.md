# Drawing

## Basic elements of a drawing

Drawings in the 2d canvas API are made up of four things mainly:

- lines
- arcs
- strokes
- fills

### lines and arcs

Lines and arcs are ways of moving the pen around the canvas.
Strokes and fills are where the actual content is drawn.

Typically the path is defined in multiple movements and then executed with a stroke or fill call like this:

```js
// draws a green box from (50, 50) to (200, 200)
context.strokeStyle = "green"; // defines line colour
context.beginPath(); // clears any previous paths
context.moveTo(50, 50); // moves to (50,50) without a line
context.lineTo(200, 50); // moves to (200, 50) with a line
context.lineTo(200, 200);
context.lineTo(50, 200);
context.closePath(); // returns to the first point on the current path
context.stroke(); // executes the drawing
```

Lines are straightforward, moving the pen from the current position to the new position in a straight line.

Arcs are more complicated. An arc basically describes movement along the edge of a circle.
example:

```js
context.arc(100, 100, 50, 0, Math.PI);
```

The first two arguments are the coordinates of the center of the circle, the third argument is the radius, and the last two arguments are the starting and ending angles in radians of the movement along the circumference of the circle.

The angle on the circle is measured starting at the rightmost X position.

If you imagine the circle as a compass then the 0 degree point is east, 90 degrees is south, 180 is west, and 270 is north.

### strokes and fills

The stroke method draws the line path defined by the previous lineTo and arc calls.

The fill method will attempt to fill a shape with colour if the previously defined path makes up an enclosed shape.

Example:

```js
// draws a red triangle of coordinates (75, 200), (300, 200), (250, 300)
context.fillStyle = "red";
context.beginPath();
context.moveTo(50, 300);
context.lineTo(100, 225);
context.lineTo(150, 300);
context.closePath();
context.fill();
```

### images

Images from files can also be drawn on the canvas

example:

```js
const cat = new Image(); // instantiate new image
cat.src = "./cat.jpg"; // set source file
cat.onload = () => {
  context.drawImage(cat, 60, 100, 369, 271);
};
// onload is necessary otherwise the draw will execute before the image is loaded and nothing will appear.
```
