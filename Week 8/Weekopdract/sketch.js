let shopOpened = false;
let shopX = 35;
let shopY = 800;
let shopAnimOpen = false;
let shopAnimClose = false;

let cheatY = 800;
let cheatOpened = false;
let cheatAnimOpen = false;
let cheatAnimClose = false;

let buttonSRP = ["Start", "Reset", "Pause"];
let buttonAdd = [1,5,10,25];
let cheatButtonConfig = [];
let comicFont;

let countdown;
let timerMin = 0;
let timerSec = 0;
let timerState = 0; // 0 Stopped, 1 Running

let happyState = 3; // 0 happy, 1 neutral, 2 unhappy, 3 sleep

let coinAmount = 0;
let coinTimerCheck = false;
let coinTimer;
let runOnce = true;

function preload() {
  comicFont = loadFont("assets/COMIC.ttf");

  bg = loadImage("assets/design.png");
  coin = loadImage("assets/coin.png");
  cat = loadImage("assets/cat.png");
  catSleep = loadImage("assets/catSleep.png");
  catHappy = loadImage("assets/catHappy.png");
  catMad = loadImage("assets/catMad.png");
  shopButtonImg = loadImage("assets/shopButton.png");
  shopButtonPressedImg = loadImage("assets/shopButtonPressed.png");
  shopDesign = loadImage("assets/shopDesign.png");
  buttonAddImg = loadImage("assets/buttonAdd.png");
  buttonAddPressedImg = loadImage("assets/buttonAddPressed.png");
  buttonSRPImg = loadImage("assets/buttonSRP.png");
  buttonSRPPressedImg = loadImage("assets/buttonSRPPressed.png");
  cheatButtonImg = loadImage("assets/cheat.png");
  cheatButtonPressedImg = loadImage("assets/cheatPressed.png");
  cheatMenuImg = loadImage("assets/cheatMenu.png");
  cheatConfigButtonImg = loadImage("assets/cheatConfigButton.png");
  cheatConfigButtonPressedImg = loadImage("assets/cheatConfigButtonPressed.png");
  
}

function setup() {
  createCanvas(800, 598);
  
  //localStorage.clear();

  coinAmount = parseInt(localStorage.getItem(("coins")));
  timerSec = parseInt(localStorage.getItem(("sec")));
  timerMin = parseInt(localStorage.getItem(("min")));
  timerState = parseInt(localStorage.getItem(("timerState")));
  happyState = parseInt(localStorage.getItem(("happyState")));

  shopButton = new Button("", 120, 540, 202, 42);
  shopButton.onClick = function () { buttonPressed("openShop") }

  cheatButton = new Button("", 650, 20, 120, 40)
  cheatButton.onClick = function () { buttonPressed("cheatMenu") }

  buttonAdd[0] = new Button("", 520,301,75,50);
  buttonAdd[0].onClick = function () { buttonPressed("1") }

  buttonAdd[1] = new Button("", 595,301,75,50);
  buttonAdd[1].onClick = function () { buttonPressed("5") }

  buttonAdd[2] = new Button("", 520,351,75,50);
  buttonAdd[2].onClick = function () { buttonPressed("10") }

  buttonAdd[3] = new Button("", 595,351,75,50);
  buttonAdd[3].onClick = function () { buttonPressed("25") }

  buttonSRP[0] = new Button("", 445,200,150,50);
  buttonSRP[0].onClick = function () { buttonPressed("Start") }

  buttonSRP[1] = new Button("", 595,200,150,50);
  buttonSRP[1].onClick = function () { buttonPressed("Reset") }

  buttonSRP[2] = new Button("", 520,251,150,50);
  buttonSRP[2].onClick = function () { buttonPressed("Pause") }
}

function draw() {
  
  image(bg, 0, 0);
  image(coin, 20, 10, 80, 60);

  fill(240, 20, 230);
  textSize(30);
  textAlign(LEFT);
  text(coinAmount, 90, 35);
  
  stored();
  timer();
  states();
  menu();
  buttons();
  shop();
  cheats();
}

function timer() {
  if(timerSec != 0 && timerSec > 0 && timerState == 1) {
    timerSec -= deltaTime / 1000;
  }

  if (timerSec <= 0 && timerMin <= 0) {
    timerSec = 0;
    timerState = 0;
  }

  if (timerSec >= 60) {
    timerSec = 0;
    timerMin++;
  }
  if (timerSec <= 0 && timerState == 1) {
    timerSec = 59;
    timerMin--;
  } 

  if(timerState == 1 && coinTimer != 0) {
    runOnce = true;
  }

  if(timerState == 1 && coinTimer == 0 && runOnce) {
    coinAmount++;
    runOnce = false;
  }

  if(timerState == 0) {
    happyState = 3;
  }
  else if(timerMin <= 5 && timerState == 1) {
    happyState = 2;
  }
  else if (timerMin <= 15 && timerMin > 5 && timerState == 1) {
    happyState = 1;
  }
  else if (timerMin > 15 && timerState == 1) {
    happyState = 0;
  }

  coinTimer = Math.round(timerSec);
  countdown = nf(timerMin, 2) + ':' + nf(round(timerSec), 2);
  textSize(50);
  text(countdown,530,150);
}

function states() {
  if(happyState == 0) {
    image(catHappy,109,183)
  }
  else if(happyState == 1) {
    image(cat,100,250);
  }
  else if (happyState == 2) {
    image(catMad, 100, 250);
  }
  else if (happyState == 3) {
    image(catSleep, 90, 155);
  }
}

function menu() {
  if (shopOpened) {
    shopAnimOpen = true;
    shopY -= 30;

    if (shopY <= 75) {
      shopY = 75;
      shopAnimOpen = false;
    }
  }

  if (shopAnimClose) {
    shopY += 25;
    if (shopY >= 800) {
      shopAnimClose = false;
    }
  }

  if (cheatOpened) {
    cheatAnimOpen = true;
    cheatY -= 30;

    if (cheatY <= 75) {
      cheatY = 75;
      cheatAnimOpen = false;
    }
  }

  if (cheatAnimClose) {
    cheatY += 25;
    if (cheatY >= 800) {
      cheatAnimClose = false;
    }
  }

  image(shopDesign, shopX, shopY);
  image(cheatMenuImg, 20, cheatY);
}

function buttonPressed(label) {
  if (label == "openShop") {
    if (shopOpened) {
      shopOpened = false
      shopAnimClose = true;
    }
    else {
      shopOpened = true
      shopAnimClose = false
    }
  }

  else if(label == "cheatMenu") {
    if (cheatOpened) {
      cheatOpened = false
      cheatAnimClose = true;
    }
    else {
      cheatOpened = true
      cheatAnimClose = false
    }
  }

  else if (label == "Start") {
    timerState = 1
  }

  else if (label == "Reset") {
    timerMin = 0
    timerSec = 0
  }

  else if (label == "Pause") {
    timerState = 0
  }

  else if (label == "1") {
    timerMin += 1
  }

  else if (label == "5") {
    timerMin += 5
  }

  else if (label == "10") {
    timerMin += 10
  }

  else if (label == "25") {
    timerMin += 25
  }
}

function stored() {
  localStorage.setItem("coins", coinAmount)
  localStorage.setItem("sec", timerSec)
  localStorage.setItem("min", timerMin)
  localStorage.setItem("timerState", timerState)
  localStorage.setItem("happyState", happyState)
}

function buttons() {
  shopButton.displayButton("",shopButtonImg,shopButtonPressedImg);
  buttonAdd[0].displayButton("+1",buttonAddImg,buttonAddPressedImg)
  buttonAdd[1].displayButton("+5",buttonAddImg,buttonAddPressedImg)
  buttonAdd[2].displayButton("+10",buttonAddImg,buttonAddPressedImg)
  buttonAdd[3].displayButton("+25",buttonAddImg,buttonAddPressedImg)

  buttonSRP[0].displayButton("Start",buttonSRPImg,buttonSRPPressedImg)
  buttonSRP[1].displayButton("Reset",buttonSRPImg,buttonSRPPressedImg)
  buttonSRP[2].displayButton("Pause",buttonSRPImg,buttonSRPPressedImg)

  cheatButton.displayButton("Cheats",cheatButtonImg,cheatButtonPressedImg)
}

function shop() {
  
}

function cheats() {

}