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
  translate(mouseX, mouseY);
  rotate(radians(frameCount))
  scale(map(sin(frameCount * 0.1), -1, 1, 0.5,2));
  image(img, 0, 0, 100, 100);
  
}