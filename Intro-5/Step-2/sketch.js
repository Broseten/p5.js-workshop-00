let img;

function preload() {
  img = loadImage("cat.png");
}

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);
  background(220);
}

function draw() {
  // translate(mouseX, mouseY);
  // rotate(radians(frameCount))
  // scale(map(sin(frameCount * 0.1), -1, 1, 0.5,2));
  // image(img, 0, 0, 100, 100);
  
  let x = map(mouseX, 0, width, 0, img.width);
  let y = map(mouseY, 0, height, 0, img.height);
  let pixelColor = img.get(x, y);
  
  noStroke();
  fill(pixelColor);
  circle(mouseX, mouseY, 15);
}