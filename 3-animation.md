# Animation

It's possible to create an animation just by placing your drawing inside of a loop but there are a lot of problems with this.

Computer screens have a refresh rate. The most common refresh rate is 60Hz meaning that the screen image can only change 60 times per second or roughly once every 16.7 milliseconds.

A loop will execute orders of magnitude faster than this meaning most of the loop cycles will try to draw images on the canvas that never have time to show up on the screen as they occur between screen refreshes. This leads to most of your animation frames being lost and a lot of wasted CPU cycles.

## requestAnimationFrame

requestAnimationFrame is a browser method that optimises animations.

This is how it's typically used:

```js
function animate() {
  // Animation state update logic
  // and calls to draw methods go here

  requestAnimationFrame(animate); // recurse forever
}

requestAnimationFrame(animate); // Entry point
```

requestAnimationFrame is called and passed a callback function that contains the animation logic and ends with a recursive call to requestAnimationFrame.

The way requestAnimationFrame helps us is by synchronising itself with the refresh rate, the next call to requestAnimationFrame will wait until just before the next screen refresh before executing.

It also pauses when the tab is out of focus, again saving frames and optimising CPU usage.

This ensures there are no dropped frames and no wasted CPU usage.

## drawbacks

The example above is very simple, it encapsulates the both animation state updates and the calls to canvas draw methods inside the requestAnimationFrame loop, meaning both will execute once per screen refresh roughly.

This has it's own problems though, for instance someone running the animation on a 120hz monitor would see it run twice as fast as someone on a 60hz monitor.

To fix that we need to decouple update logic from drawing logic.
