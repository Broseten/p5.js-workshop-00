function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);

  background(6);
  noStroke();
}

function draw() {
  let circleSize = 10; // map(mouseX, 0, width, 20, 100);
  fill(random(250, 350), 80, 80, 40);
  translate(mouseX, mouseY);
  if (mouseIsPressed) {
    let brushRadius = 30;
    let x = random(-brushRadius, brushRadius);
    let y = random(-brushRadius, brushRadius);
    if (random() > 0.5) {
      circle(x, y, circleSize);
    } else {
      square(x, y, circleSize);
    }
  }
}

function keyPressed() {
  if (key === "r") {
    background(6);
  }
  if (key === "s") {
    save("circles.png");
  }
}
