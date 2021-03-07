import Player from './Player.js';
import Vector from './Vector2.js';

var players = [];

export function setup(canvas) {
  players.push(new Player(canvas, 'test'));
}

export function draw(canvas) {
  players.forEach((p) => {
    p.render();
  });
}
