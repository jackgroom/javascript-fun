export default class Vector2 {
  constructor(x, y) {
    this.x = x ? x : 0;
    this.y = y ? y : 0;
  }

  mult(val) {
    this.x *= val;
    this.y *= val;
  }

  add(otherVec) {
    this.x += otherVec.x;
    this.y += otherVec.y;
  }
}
