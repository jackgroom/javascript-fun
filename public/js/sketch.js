import Player from './Player.js';
import math from './Math.js';

var players = [];

export function setup(canvas) {
  players.push(new Player(canvas, 'test'));
}

export function draw(canvas) {
  players.forEach((p) => {
    p.render();
  });
}
