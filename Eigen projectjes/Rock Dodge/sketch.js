let player1 = {
  x: 350,
  y: 725,
  speed: 7,
  right() {
    player1.x += player1.speed;
  },
  left() {
    player1.x -= player1.speed;
  }

}

let player2 = {
  x: 450,
  y: 725,
  speed: 7,
  right() {
    player2.x += player2.speed;
  },
  left() {
    player2.x -= player2.speed;
  }

}

let rocks = [];
let coins = [];
let rockAmount = 10;
let coinAmount = 2;
let gameOver1 = false;
let gameOver2 = false;
let restartText;
let score1 = 0;
let score2 = 0;
let players = 1;
let started = false;



function preload() {
  buttonImg = loadImage("assets/button.png");
  buttonPressedImg = loadImage("assets/buttonPressed.png");
  checkmark = loadImage("assets/checkmark.png")
  rockImg = loadImage("assets/rock.png")
}

function setup() {
  frameRate(60);
  createCanvas(800, 800);
  restartText = text("Restart", 350, 400)

  // Draw Rocks
  for (let i = 0; i < rockAmount; i++) {
    rocks.push(new rock(random(0, 750), random(-800, 25)));
  }

  for (let i = 0; i < coinAmount; i++) {
    coins.push(new coin(random(0, 775), random(-800, 25)));
  }


  startButton = new Button("", 300, 450, 200, 70)
  startButton.onClick = function () {
    started = true
    if(players == 2) {
      player1.y = 725
      player2.y = 725
    }
    else( player1.y = 725)
  }

  restartButton = new Button("", 300, 400, 200, 70)
  restartButton.onClick = function () {restartGame()}

  players1 = new Button("", 100, 200, 200, 70)
  players1.onClick = function () {players = 1}

  players2 = new Button("", 500, 200, 200, 70)
  players2.onClick = function () {players = 2}
}

function draw() {
  textAlign(LEFT)
  background("lime");
  textSize(64);

  if(players == 1) {
    fill("blue");
    text("Score: " + score1, 20, 50);
  }
  else if(players == 2) {
    fill("red");
    text("Score: " + score2, 500, 50);

    fill("blue");
    text("Score: " + score1, 20, 50);
  }




  // Draw Player
  if (players == 1) {
    fill("blue");
    square(player1.x, player1.y, 75);
  }
  else if(players == 2) {
    fill("red");
    square(player2.x, player2.y, 75);

    fill("blue");
    square(player1.x, player1.y, 75);
  }

  // Player Movement
  if (keyIsDown(68)) {
    player1.right();
  }
  if (keyIsDown(65)) {
    player1.left();
  }
  if (keyIsDown(16)) {
    player1.speed = 3;
  }
  else {
    player1.speed = 7;
  }

  // Side Borders
  if (player1.x <= 0) {
    player1.x = 0;
  }
  if (player1.x >= 725) {
    player1.x = 725;
  }

  // Player Movement
  if (keyIsDown(RIGHT_ARROW)) {
    player2.right();
  }
  if (keyIsDown(LEFT_ARROW)) {
    player2.left();
  }
  if (keyIsDown(16)) {
    player2.speed = 3;
  }
  else {
    player2.speed = 7;
  }

  // Side Borders
  if (player2.x <= 0) {
    player2.x = 0;
  }
  if (player2.x >= 725) {
    player2.x = 725;
  }

  // Call Rocks and coins
  if(started) {
    for (let i = 0; i < rocks.length; i++) {
      rocks[i].renderRock();
      rocks[i].updateRockPosition();
      rocks[i].checkRockCollisions1();
      rocks[i].checkRockCollisions2();
    }

    for (let i = 0; i < coins.length; i++) {
      coins[i].renderCoin();
      coins[i].updateCoinPosition();
      coins[i].checkCoinCollisions();
    }
  }

  if (players == 2) {
    if (gameOver1 && gameOver2) {
      endGame()
    }
    else if (gameOver1) {
      player1.y = 900;

    }
    else if (gameOver2) {
      player2.y = 900;
    }
  }
  else if (players == 1 && gameOver1) {
        endGame()
        player1.y = 900;
}

  if (!started) {
    background(95, 95, 95)
    startButton.displayButton("Start", buttonImg, buttonPressedImg)
    players1.displayButton("1 Player", buttonImg, buttonPressedImg)
    players2.displayButton("2 Players", buttonImg, buttonPressedImg)
  }

  if(!started && players == 1) {
    image(checkmark,310,200,60,60)
  }
  else if (!started && players == 2) {
    image(checkmark, 710,200,60,60)
  }
} 

function restartGame() {
  started = false
  gameOver1 = false;
  gameOver2 = false;
  score1 = 0;
  score2 = 0;
  player1.x = 350;
  player2.x = 450;
  player1.y = 725;
  player2.y = 725;
  for (let i = 0; i < rockAmount; i++) {
    rocks[i].y = random(-800, 0);
  }
  for (let i = 0; i < coinAmount; i++) {
    coins[i].y = random(-800, 0)
  }
}

function mousePressed() {
  if (gameOver1 && gameOver2) {
    if (mouseX >= 320 && mouseX <= 470 && mouseY <= 420 && mouseY >= 350) {
      restartGame();
    }
  }
}

function endGame() {
  background(95, 95, 95);
  fill("red");
  stroke(0)
  strokeWeight(4);
  textSize(50);
  text("Game Over", 275, 350);
  fill("red");
  textSize(40);
  text("Total Score: " + (score1 + score2), 280,100);
  restartButton.displayButton("Restart", buttonImg, buttonPressedImg)
}