// Movement link
const playerlink = {
  x: 250,
  y: 250,
  speed: 20,
  up() {
    playerlink.y -= playerlink.speed;
  },
  down() {
    playerlink.y += playerlink.speed;
  },
  left() {
    playerlink.x -= playerlink.speed
  },
  right() {
    playerlink.x += playerlink.speed
  },
};

// Movement Mario
const playermario = {
  x: 250,
  y: 50,
  speed: 20,
  up() {
    playermario.y -= playermario.speed;
  },
  down() {
    playermario.y += playermario.speed;
  },
  left() {
    playermario.x -= playermario.speed
  },
  right() {
    playermario.x += playermario.speed
  },
};

function setup() {
  createCanvas(1920, 1080);
  mario = loadImage("mario.png")
  link = loadImage("Link.png")
}

function draw() {
  background("teal");

  // Name
  textSize(10);
  fill("black");
  text("Roy van Leeuwen", 20, 30);

  // Flag
  strokeWeight(0)
  fill("red");
  rect(20, 50, 70, 15);
  fill("white");
  rect(20, 65, 70, 15);
  fill("blue");
  rect(20, 80, 70, 15);

  // Chess Patt
  strokeWeight(0);
  fill("black");
  square(20, 120, 30);
  fill("white");
  square(20, 150, 30);
  fill("black");
  square(20, 180, 30);
  fill("white");
  square(50, 120, 30);
  fill("black");
  square(50, 150, 30);
  fill("white");
  square(50, 180, 30);
  fill("black");
  square(80, 120, 30);
  fill("white");
  square(80, 150, 30);
  fill("black");
  square(80, 180, 30);

  // House
  strokeWeight(1)
  line(70, 230, 100, 260);
  line(70, 230, 40, 260);
  line(40, 260, 100, 260);
  line(40, 260, 40, 300);
  line(40, 300, 100, 300);
  line(100, 260, 100, 300);

  // Traffic light
  fill("grey");
  rect(150, 50, 40, 100);
  rect(162, 150, 15, 40);
  fill("red");
  circle(170, 75, 25);
  fill("orange");
  circle(170, 105, 25);
  fill("lime");
  circle(170, 135, 25);

  // Dice
  fill("white");
  strokeWeight(5);
  square(120, 200, 100, 20);
  strokeWeight(0);
  fill("black");
  circle(150, 230, 15);
  circle(170, 250, 15);
  circle(190, 270, 15);

  // Mario
  if (keyIsDown(87)) {
    playermario.up()
  }
  if (keyIsDown(83)) {
    playermario.down()
  }
  if (keyIsDown(65)) {
    playermario.left()
  }
  if (keyIsDown(68)) {
    playermario.right()
  }
  textSize(20);
  fill("red");
  text("Mario", 270, 40);
  image(mario, playermario.x, playermario.y, 100, 100);

  // Link
  if (keyIsDown(UP_ARROW)) {
    playerlink.up()
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerlink.down()
  }
  if (keyIsDown(LEFT_ARROW)) {
    playerlink.left()
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerlink.right()
  }
  
  fill("lime");
  text("Link", 270, 240);
  image(link, playerlink.x, playerlink.y, 100, 100);
}
