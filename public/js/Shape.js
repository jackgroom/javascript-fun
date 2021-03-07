export default function Shape(context) {
  this.ctx = context;
  line = (xPos, yPos, xStart, yEnd) => {
    ctx.beginPath(this.ctx);
    ctx.moveTo(xPos, yPos);
    ctx.lineTo(xStart, yEnd);
    ctx.stroke();
    ctx.closePath();
  };

  rect = (x, y, w, h, c) => {
    ctx.fillStyle = c ? c : 'white';
    ctx.fillRect(x, y, w, h);
  };

  ellipse = (xPos, yPos, r) => {
    ctx.beginPath();
    ctx.arc(xPos, yPos, r, 0, Math.PI * 2, false);
  };
}
