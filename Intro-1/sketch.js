function setup() {
  createCanvas(400, 400);
}

function draw() {
  // grayscale
  background(220);
  
  // weight in pixels
  strokeWeight(4);
  
  fill(255, 0, 0);
  // nula vlevo nahore
  circle(20, 20, 30);
  
  fill(0, 255, 0);
  // x, y, w, h
  rect(100, 100, 200, 50);
  fill(0, 0, 255);
  // x, y, radius
  circle(200, 200, 60);
  
  // x, y, x2, y2
  line(0, 0, 400, 400);
}