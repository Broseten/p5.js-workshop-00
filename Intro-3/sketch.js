function setup() {
  createCanvas(500, 500);
  textSize(30);
  
  frameRate(30);
  
  // move it here instead of draw
  background(20);
}

function draw() {
  fill(0,8);
  rect(0,0,width, height);
  
  // use just brightness and alpha
  fill(255, 40);
  
  translate(width/2, height/2);
  rotate(frameCount/120);
  
  for (let i = 0; i < 4; i++) {
    text("tohle neni logo", 0, 0);
    rotate(HALF_PI);
  }
}
