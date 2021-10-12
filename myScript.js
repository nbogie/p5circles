function setup() {
  createCanvas(600, 400);
  noLoop();
  rectMode(CENTER);
}
function draw() {
  background("linen");
  for (let i = 0; i < 5; i++) {
    drawRingSet(random(0, width), random(0, height), random(100, width / 2));
  }
}

function drawRingSet(x, y, diameter) {
  while (diameter > 0) {
    fill(random(0, 255));
    circle(x, y, diameter);
    diameter = diameter - 20;
  }
}
