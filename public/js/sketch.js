import Player from './Player.js';
import Vector from './Vector2.js';

const gravity = new Vector(0, -1);

var players = [];

export function setup(canvas) {
  players.push(new Player(canvas, 'test'));
}

export function draw(canvas) {
  players.forEach((p) => {
    p.apply_force(gravity);
    p.render();
  });
}
