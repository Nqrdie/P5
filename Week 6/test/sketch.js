let isDragging = false;
let startX = 100;
let startY = 100;
let width = 100;
let height = 40;
let offsetX = 0;
let offsetY = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(isDragging ? "red" : "white");
  rect(startX, startY, width, height);
}

function mousePressed() {
  if (
    mouseX > startX &&
    mouseX < startX + width &&
    mouseY > startY &&
    mouseY < startY + height
  ) {
    isDragging = true;
    offsetX = mouseX - startX;
    offsetY = mouseY - startY;
  }
}

function mouseReleased() {
  isDragging = false;
}

function mouseDragged() {
  if (isDragging) {

    startX = mouseX - offsetX;
    startY = mouseY - offsetY;
  }
}