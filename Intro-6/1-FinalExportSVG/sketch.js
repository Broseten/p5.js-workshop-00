function setup() {
  createCanvas(600, 600, SVG);
  noStroke();
  noLoop();
  rectMode(CENTER);
}

function draw() {
  background(20);

  let gridOffset = 50;

  let gridSize = 5;

  // subtract the offset from both sides
  let gridWidth = width - 2 * gridOffset;

  let tileOffset = 5;

  let tileSize = gridWidth / gridSize;
  for (let col = 0; col < gridSize; col++) {
    for (let row = 0; row < gridSize; row++) {
      let x = gridOffset + col * tileSize + tileOffset;
      let y = gridOffset + row * tileSize + tileOffset;
      drawTile(x + tileSize / 2, y + tileSize / 2, tileSize - 2 * tileOffset);
    }
  }
}

function drawTile(cx, cy, size) {
  fill("rgb(218,218,218)");
  square(cx, cy, size);
  let imgChoice = int(random(4));

  fill(random(["#D83B46", "#ECBE34", "#0092D4"]));
  // TODO could draw custom img
  circle(cx, cy, size);

  // or this pattern
  drawPattern(cx, cy, size);
}

// inspired by https://genekogan.com/code/p5js-transformations/
function drawPattern(cx, cy, size) {
  push();

  // use alpha
  fill(20, 100);

  let r1 = random();
  // first rect rotation
  let ang1 = TWO_PI * random();
  // smaller rect rotation
  let ang2 = TWO_PI * random();
  // smaller rect skew after rotation
  let ang3 = TWO_PI * random();
  // smaller rect shift
  let rx = (size / 5) * random();
  // bigger rect shift
  let tx = (size / 4) * random();
  // bigger size
  let size1 = (size / 4) * random();
  // smaller size
  let size2 = (size / 5) * random();

  // move to tile center
  translate(cx, cy);
  let biggerRectCount = int(random(6, 10));
  let smallerRectCount = int(random(5, 8));
  for (let i = 0; i < biggerRectCount; i++) {
    push();
    rotate(ang1 + (TWO_PI * i) / biggerRectCount);
    translate(tx, 0);
    // draw bigger rect
    rect(0, 0, size1, size1);
    for (let j = 0; j < smallerRectCount; j++) {
      push();
      rotate(ang2 + (TWO_PI * j) / smallerRectCount);
      translate(rx, 0);
      // skew
      rotate(ang3);
      // draw
      rect(rx, 0, size2, size2);
      pop();
    }
    pop();
  }
  pop();
}

function mouseClicked() {
  draw();
}

function keyPressed() {
  if (key === "s") {
    save("grid.svg");
  }
}
