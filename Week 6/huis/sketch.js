let wallColors = []; 
let roofColors = []; 

function setup() {
  createCanvas(3000, 3000); // 
  for (let i = 0; i < 25; i++) {
    wallColors.push(color(random(0, 255), random(0, 255), random(0, 255))); 
    roofColors.push(color(random(0, 255), random(0, 255), random(0, 255))); 
  }
}

function draw() {
  background(220);
  strokeWeight(2);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      house(170 * i, 300 * j, 20, 1, wallColors[i * 5 + j], roofColors[i * 5 + j]);
    }
  }
}

function house(x, y, space, amount, wallColor, roofColor) {
  let height = 200;
  let width = 150;
  let doorwidth = 30;
  let doorheight = 50;

  for (let i = 0; i < amount; i++) {
    fill(wallColor);
    rect(x + (width + space) * i, y, width, height);
    fill(roofColor);
    triangle(x + (width + space) * i, y, x + 75 + (width + space) * i, y - 75, x + 150 + i * (width + space), y);
    fill(200,120,0);
    rect(x + 20 + (width + space) * i, y + height - 50, doorwidth, doorheight);
  }
}