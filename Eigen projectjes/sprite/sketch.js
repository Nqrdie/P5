let img;
let spriteSheet;
let animation = [];
let currentFrame = 0;
let counter = 0;
let animationSpeed = 10;

let char = {
  x: 0,
  y: 0,
  speed: 0.7,
  up() {
    char.y -= char.speed
  },
  down() {
    char.y += char.speed
  },
  left() {
    char.x -= char.speed
  },
  right() {
    char.x += char.speed
  }
}


function preload() {
  spriteSheet = loadImage('assets/Spritesheet.png')
}

function setup() {
  createCanvas(400, 400)
  translate(20,20)
  animation.push(spriteSheet.get(0, 9, 25, 20));
  animation.push(spriteSheet.get(35, 9, 25, 20));
  animation.push(spriteSheet.get(65, 9, 25, 20));
  animation.push(spriteSheet.get(95, 9, 25, 20));
}



function draw() {
  background(220)
  if (keyIsDown(87)) {
    char.up();
  }
  if (keyIsDown(83)) {
    char.down();

  }
  if (keyIsDown(68) && !keyIsDown(65)) {
    char.right();
    image(animation[currentFrame], char.x, char.y)
  }

  if (keyIsDown(65) && !keyIsDown(68)) {
    char.left();
    scale(-1,1)
    translate(-27,0)
    image(animation[currentFrame], -char.x, char.y)
  }
  if(!keyIsDown(UP_ARROW)) {
    image(animation[3],char.x,char.y)
  }

  counter++;
  if (counter >= animationSpeed) {
    currentFrame++;
    counter = 0;
    if(currentFrame > 3) {
      currentFrame = 0
    }
  }

}