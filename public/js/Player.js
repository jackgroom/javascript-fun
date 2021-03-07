import Vector2 from './Vector2.js';

export default class Player {
  constructor(canvas, name) {
    this.name = name;

    this.pos = new Vector2(canvas.width / 2, canvas.height / 2);
    this.vel = new Vector2();
    this.acc = new Vector2();
  }

  draw() {}

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }

  render() {
    this.update();
    this.draw();
  }
}
