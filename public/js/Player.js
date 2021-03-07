import Vector2 from './Vector2.js';
import Shape from './Shape.js';

export default class Player {
  constructor(canvas, name) {
    this.gravity = new Vector2(0, -0.3);

    this.name = name;
    this.canvas = canvas;

    this.pos = new Vector2(canvas.width / 2, canvas.height / 2);
    this.size = new Vector2(25, 25);
    this.vel = new Vector2(0, 0);
    this.acc = new Vector2(0, 0);
  }

  apply_force(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.x + this.size.x >= this.canvas.width) {
      this.pos.x = this.canvas.width - this.size.x / 2;
    } else if (this.pos.x <= 0) {
      this.pos.x = 0 + this.size.x / 2;
    } else if (this.pos.y >= this.canvas.height) {
      this.pos.y = this.canvas.height - this.size.y / 2;
    } else if (this.pos.y <= 0) {
      this.pos.y = 0 + this.size.y / 2;
    }
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
    this.acc.mult(0);

    this.edges();
  }

  render() {
    this.apply_force(this.gravity);
    this.update();
    this.draw();
  }
}
