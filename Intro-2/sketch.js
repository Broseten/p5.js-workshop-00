let hue = 0;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  background(20);
  
  fill(hue, 70, 60);
  // same as: hue = hue + 1;
  // or: hue += 1;
  hue++;
  // same as: hue = hue % 360;
  hue %= 360;
  
  // local variable <- assign value 50
  let circleSize = 50;
  // jak popsat "x-ova pozice mysi"? mouseX
  circle(mouseX, mouseY, circleSize);
  circle(mouseY, mouseX, circleSize);
  // local variable (using other variables)
  let inverseMouseX = width - mouseX;
  let inverseMouseY = height - mouseY;
  circle(inverseMouseX, inverseMouseY, circleSize);
  circle(inverseMouseY, inverseMouseX, circleSize);
}
