import Vector2 from './Vector2.js';
import Shape from './Shape.js';

export default class Player {
  constructor(canvas, name) {
    this.name = name;
    this.canvas = canvas;

    this.pos = new Vector2(canvas.width / 2, canvas.height / 2);
    this.size = new Vector2(25, 25);
    this.vel = new Vector2(0, 0);
    this.acc = new Vector2(0, 0);
  }

  apply_force(force) {
    this.acc.add(force);
    this.acc.mult(0);
  }

  draw() {
    var context = this.canvas.getContext('2d');
    Shape.rect(
      context,
      this.pos.x - this.size.x / 2,
      this.pos.y - this.size.y / 2,
      this.size.x,
      this.size.y
    );
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
  }

  render() {
    this.update();
    this.draw();
  }
}
