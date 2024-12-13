let circles = [];
let rects = [];
let objectAmount = 10;


function setup() {
  createCanvas(800, 600);
}


function draw() {
  background(220)
  // Drawing every circle in the circles array
  for (let i = 0; i < circles.length; i++) {
    circles[i].renderCircles();
  }
  // Drawing every rectangle in the circles array
  for (let i = 0; i < rects.length; i++) {
    rects[i].renderRects();
  }
}



function keyPressed() {
  // If you press backspace it clears the arrays first so that if there is anything in it it gets removed
  if (keyCode === BACKSPACE) {
    circles = []
    rects = []
    // Putting all of the circles and rectangles in the array to draw them in the draw function
    for (let i = 0; i < objectAmount; i++) {
      circles.push(new Circles(random(0, width), random(0, height), random(50, 100)));
      rects.push(new Rects(random(0, width), random(0, height), random(50, 100), random(50, 100)));
    }
  }
}