function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  
  background(6);
  noStroke();
}

function draw() {
  let circleSize = map(mouseX, 0, width, 20, 100);
  fill(random(250, 350), 80, 80, 40);
  circle(random(width), random(height), circleSize);
}

function keyPressed() {
  if (key === "s"){
    save("circles.png");
  }
}
