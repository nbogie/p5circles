function setup() {
  createCanvas(600, 400);
  noLoop();
}
function draw() {
  background("linen");

  let diameter = width;
  const x = width / 2;
  const y = height / 2;
  while (diameter > 0) {
    fill(random(0, 255));
    circle(x, y, diameter);
    diameter = diameter - 20;
  }
}
