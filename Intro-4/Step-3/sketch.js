let brush = 0;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);

  background(6);
}

function draw() {
  let circleSize = 10; // map(mouseX, 0, width, 20, 100);
  translate(mouseX, mouseY);
  if (mouseIsPressed) {
    let brushRadius = 30;
    let x = random(-brushRadius, brushRadius);
    let y = random(-brushRadius, brushRadius);
    if (brush === 0) {
      stroke(220, 20, 100, 60);
      strokeWeight(2);
      noFill();
      rectMode(CENTER);
      // draw 50% circles 50% squares
      if (random() > 0.5) {
        circle(x, y, 2 * circleSize);
      } else {
        square(x, y, 2 * circleSize);
      }
      // add a random letter
      strokeWeight(1);
      textSize(12);
      textAlign(CENTER, CENTER);
      text(random(["w", "h", "a", "t"]), x, y);
    } else {
      noStroke();
      fill(random(180, 280), 80, 80, 40);
      // draw ellipses with random width and height
      ellipse(
        x,
        y,
        random(circleSize / 2, circleSize),
        random(circleSize / 2, circleSize)
      );
    }
  }
}

function keyPressed() {
  if (key === "r") {
    background(6);
  } else if (key === "s") {
    save("brush.png");
  } else if (key === "0") {
    brush = 0;
  } else if (key === "1") {
    brush = 1;
  }
}
