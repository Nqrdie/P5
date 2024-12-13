let bg;
let gameState = 0
let timer = 0
let interval = 0.7
let timeOutWrong = false;
let timeOutRight = false;
let score = 0;
let box1 = [100, 650, 300, 150];
let box2 = [550, 800, 300, 150];


function preload() {
  bg = loadImage("assets/bg.png");
  checkmark = loadImage("assets/checkmark.png")
  pyramid = loadImage("assets/pyramid.jpg");
  windmill = loadImage("assets/windmill.jpg");
  eiffeltower = loadImage("assets/Eiffeltower.jpg");
  mountEverest = loadImage("assets/mountEverest.jpg");
  sweden = loadImage("assets/sweden.png");
  cross = loadImage("assets/cross.png");
  buttonImg = loadImage("assets/button.png");
  buttonImgPressed = loadImage("assets/buttonPressed.png");
}

let startButton;
let endButton;
let keys


function setup() {
  createCanvas(1000, 1000);
  startButton = new Button("", 300, 425, 300, 150);
  questButton1 = new Button("", box1[0], box1[1], box1[2], box1[3])
  questButton2 = new Button("", box2[0], box2[1], box1[2], box1[3])
  questButton3 = new Button("", box1[0], box2[1], box2[2], box2[3])
  questButton4 = new Button("", box2[0], box1[1], box2[2], box2[3])
  startButton.onClick  = function () { buttonPressed("Zero") };
  questButton1.onClick = function () { buttonPressed("One") };
  questButton2.onClick = function () { buttonPressed("Two") };
  questButton3.onClick = function () { buttonPressed("Three") };
  questButton4.onClick = function () { buttonPressed("Four") };
}

function buttonPressed(button) {

  // Start
  if (button === "Zero" && gameState === 0) {
    gameState = 1
  }

  //Question 1
  else if (gameState === 1 && button === "Two") {
    timer = 0
    timeOutRight = true;
    score++
  }

  else if (gameState === 1 && button != "Two") {
    timer = 0
    timeOutWrong = true;
  }

  //Question 2
  else if (gameState === 2 && button === "Three") {
    timer = 0
    timeOutRight = true;
    score++
  }

  else if (gameState === 2 && button != "Three") {
    timer = 0
    timeOutWrong = true;
  }
    //Question 3
  else if (gameState === 3 && button === "Four") {
    timer = 0
    timeOutRight = true;
    score++
  }

  else if (gameState === 3 && button != "Four") {
    timer = 0
    timeOutWrong = true;
  }
  //Question 4
  else if (gameState === 4 && button === "One") {
    timer = 0
    timeOutRight = true;
    score++
  }

  else if (gameState === 4 && button != "One") {
    timer = 0
    timeOutWrong = true;
  }
  //Question 5
  else if (gameState === 5 && button === "Two") {
    timer = 0
    timeOutRight = true;
    score++
  }

  else if (gameState === 5 && button != "Two") {
    timer = 0
    timeOutWrong = true;
  }
}

function draw() {
  timer += deltaTime / 1000
  console.log(timer)
  background(220);

  
  image(bg, 0, 0);


  textSize(30);
  fill(0)
  if (gameState === 0) {
    strokeWeight(5);
    stroke("purple")
    fill(255,102,0)
    startButton.displayButton("Start")
  }
  if (gameState === 1) {
    fill(255,102,0)
    questButton1.displayButton("France")
    fill(255,102,0)
    questButton2.displayButton("Egypt")
    fill(255,102,0)
    questButton3.displayButton("Netherlands")
    fill(255,102,0)
    questButton4.displayButton("England")
    strokeWeight(5);
    stroke("purple")
    fill(255,102,0)
    textSize(40)
    text("Score: " + score,475,630) 
    fill("white")
    image(pyramid, 100, 100, 750, 500)
    textSize(30);
    fill(255,102,0)
    text("What country is famous for pyramids?", 100 + 750 / 2, 75)
  }
  if (gameState === 2) {
    fill(255,102,0)
    questButton1.displayButton("Peru")
    fill(255,102,0)
    questButton2.displayButton("Thailand")
    fill(255,102,0)
    questButton3.displayButton("Netherlands")
    fill(255,102,0)
    questButton4.displayButton("Kenia")
    strokeWeight(5);
    stroke("purple")
    fill(255,102,0)
    textSize(40)
    text("Score: " + score,475,630) 
    image(windmill, 100, 100, 750, 500)
    textSize(30);
    fill(255,102,0)
    text("What country is famous for windmills?", 100 + 750 / 2, 75)
  }
  if (gameState === 3) {
    fill(255,102,0)
    questButton1.displayButton("Russia")
    fill(255,102,0)
    questButton2.displayButton("China")
    fill(255,102,0)
    questButton3.displayButton("Mexico")
    fill(255,102,0)
    questButton4.displayButton("France")
    strokeWeight(5);
    stroke("purple")
    fill(255,102,0)
    textSize(40)
    text("Score: " + score,475,630) 
    image(eiffeltower, 100, 100, 750, 500)
    textSize(30);
    fill(255,102,0)
    text("In what country resides the famous Eiffel Tower?", 100 + 750 / 2, 75)
  }
  if (gameState === 4) {
    fill(255,102,0)
    questButton1.displayButton("Stockholm")
    fill(255,102,0)
    questButton2.displayButton("Helsinki")
    fill(255,102,0)
    questButton3.displayButton("Oslo")
    fill(255,102,0)
    questButton4.displayButton("Copenhagen")
    strokeWeight(5);
    stroke("purple")
    fill(255,102,0)
    textSize(40)
    text("Score: " + score,475,630) 
    image(sweden, 100, 100, 750, 500)
    textSize(30);
    fill(255,102,0)
    text("What is the capital of Sweden?", 100 + 750 / 2, 75)
  }
  if (gameState === 5) {
    fill(255,102,0)
    questButton1.displayButton("Mt. Fuji")
    fill(255,102,0)
    questButton2.displayButton("Mt. Everest")
    fill(255,102,0)
    questButton3.displayButton("Mt. Rushmore")
    fill(255,102,0)
    questButton4.displayButton("Mt. Killimanjaro")
    strokeWeight(5);
    stroke("purple")
    fill(255,102,0)
    textSize(40)
    text("Score: " + score,475,630) 
    image(mountEverest, 100, 100, 750, 500)
    textSize(30);
    fill(255,102,0)
    text("What is the highest mountain?", 100 + 750 / 2, 75)
  }
  if (gameState === 6) {
    if(score >= 3) {
      textSize(90)
      fill(255,102,0)
      strokeWeight(5);
      text("You did it!", 500, 450)
      text("Score: " + score + " / 5", 500, 550)
    }
    else {
      textSize(90)
      fill(255,102,0)
      strokeWeight(5);
      text("Noob", 500, 450)
      text("Score: " + score + " / 5", 500, 550)
    }
  }
  if(timeOutWrong) {
    textSize(90)
    image(bg, 0, 0);
    fill(255,102,0)
    image(cross,350,350,300,300)
    if(timer >= interval) {
      if(gameState == 1) {
        gameState = 2
      }
      else if(gameState == 2) {
        gameState = 3
      }
      else if(gameState == 3) {
        gameState = 4
      }
      else if(gameState == 4) {
        gameState = 5
      }
      else if(gameState == 5) {
        gameState = 6
      }
      timeOutWrong = false
    }
  }
  if(timeOutRight) {
    textSize(90)
    image(bg, 0, 0);
    fill(255,102,0)
    image(checkmark,400,400)
    if(timer >= interval) {
      if(gameState == 1) {
        gameState = 2
      }
      else if(gameState == 2) {
        gameState = 3
      }
      else if(gameState == 3) {
        gameState = 4
      }
      else if(gameState == 4) {
        gameState = 5
      }
      else if(gameState == 5) {
        gameState = 6
      }
      timeOutRight = false
    }
  }
}
