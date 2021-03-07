export default {
  line: (context, xPos, yPos, xStart, yEnd) => {
    context.beginPath();
    context.moveTo(xPos, yPos);
    context.lineTo(xStart, yEnd);
    context.stroke();
    context.closePath();
  },

  rect: (context, x, y, w, h, c) => {
    context.fillStyle = c ? c : 'white';
    context.fillRect(x, y, w, h);
  },

  ellipse: (context, xPos, yPos, r) => {
    context.beginPath();
    context.arc(xPos, yPos, r, 0, Math.PI * 2, false);
  },
};
