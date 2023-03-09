function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  // set up grid parameters
  let gridSize = 100; // toto se da hezky menit a uz tak to ovlivni vizual
  let tileWidth = width / gridSize;
  let tileHeight = height / gridSize;

  // loop through each tile in the grid
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      // calculate tile position
      let x = i * tileWidth;
      let y = j * tileHeight;

      // apply translation to center of tile
      push();
      translate(x + tileWidth / 2, y + tileHeight / 2);
      // here you can draw a tile
      fill(random(["red", "blue", "yellow"]));
      strokeWeight(0.1);
      circle(0,0, 3);
      pop()
    }
  }
}