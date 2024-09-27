# Working with time

In order to have a consistent animation speed we need to make sure the state of the animation updates at the same rate regardless of the refresh rate.

We can do this by measuring time between frames and only running our update logic if enough time has passed.

Another useful feature of requestAnimationFrame is that it provides a timestamp to it's callback argument. This timestamp is usually the number of milliseconds since the page loaded.

If we place our update logic inside a while loop like this...

```js
while (accumulatedTime >= TICK_RATE) {
  startingPositions[0] += 2;
  startingPositions[1] += 2;

  accumulatedTime -= TICK_RATE;
}
```

we can ensure that we only update the animation state if more time has passed than the tick rate.
This also protects against slow refreshes by allowing multiple updates to run if necessary.

We can use similar logic to lock the framerate if we wanted to, but most of the time it's fine to allow the draw methods to run at every call to requestAnimationFrame
