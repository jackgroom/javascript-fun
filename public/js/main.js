import { setup, draw } from './sketch.js';

window.onload = start;

var canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;

export var vectors = [];

function start() {
  fps = 60;
  setup(canvas);
  startAnimation(fps);
}

function startAnimation(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  gameLoop();
}

function gameLoop() {
  window.requestAnimationFrame(gameLoop);
  now = Date.now();
  elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);

    vectors.forEach((vector) => {
      vector.update();
    });

    drawLoop();
    frameCount++;
  }
}

function drawLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw(canvas);
}
