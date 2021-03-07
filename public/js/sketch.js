import Player from './Player.js';

var players = [];

export function setup(canvas) {
  players.push(new Player(canvas, 'test'));
  console.log(players[0]);
}

export function draw(canvas) {
  players.forEach((p) => {
    p.render();
  });
}
