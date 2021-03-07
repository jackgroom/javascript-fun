import { vectors } from './main.js';

export default class Vector2 {
  constructor(x, y) {
    this.x = x ? x : 0;
    this.y = y ? y : 0;

    this.magnitude = this.get_magnitude();
    this.direction = this.get_direction();
    this.limit = null;

    vectors.push(this);
  }

  update() {
    this.magnitude = this.get_magnitude();
    this.direction = this.get_direction();
  }

  add(otherVector) {
    this.x += otherVector.x;
    this.y += otherVector.y;
  }

  sub(otherVector) {
    this.x -= otherVector.x;
    this.y -= otherVector.y;
  }

  mult(value) {
    this.x *= value;
    this.y *= value;
  }

  div(value) {
    this.x /= value;
    this.y /= value;
  }

  get_magnitude() {
    return this.limit
      ? Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)) < this.limit
        ? Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
        : this.limit
      : Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  get_direction() {
    return Math.atan(this.y / this.x);
  }

  dot_product(otherVector) {
    return this.x * otherVector.x + this.y * otherVector.y;
  }

  distance_between(otherVector) {
    return Math.sqrt(
      Math.pow(this.x - otherVector.x, 2) + Math.pow(this.y - otherVector.y, 2)
    );
  }

  angle_between(otherVector) {
    return (
      this.dot_product(otherVector) / (this.magnitude * otherVector.magnitude)
    );
  }

  normalise() {
    this.div(this.magnitude);
  }
}
