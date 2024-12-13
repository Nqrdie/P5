// First number is row, second number is colum
let circle11 = false;
let circle12 = false;
let circle13 = false;
let circle21 = false;
let circle22 = false;
let circle23 = false;
let circle31 = false;
let circle32 = false;
let circle33 = false;

let cross11 = false;
let cross12 = false;
let cross13 = false;
let cross21 = false;
let cross22 = false;
let cross23 = false;
let cross31 = false;
let cross32 = false;
let cross33 = false;

let playerCircle11 = false;
let playerCircle12 = false;
let playerCircle13 = false;
let playerCircle21 = false;
let playerCircle22 = false;
let playerCircle23 = false;
let playerCircle31 = false;
let playerCircle32 = false;
let playerCircle33 = false;

let playerCross11 = false;
let playerCross12 = false;
let playerCross13 = false;
let playerCross21 = false;
let playerCross22 = false;
let playerCross23 = false;
let playerCross31 = false;
let playerCross32 = false;
let playerCross33 = false;


let player1 = true;
let player2 = false;
let player1Won = false;
let player2Won = false;

function setup() {
  createCanvas(600, 600);
  resetButton = createButton("Reset")
  resetButton.position(650,300)
}

function draw() {
  checkIfWon()
  background(220);
  strokeWeight(5);

  // Grid
  stroke(0)
  line(0,200,600,200);
  line(0,400,600,400);
  line(200,0,200,600);
  line(400,0,400,600);
  

  // Circle drawing
  strokeWeight(3);
  noFill();

  // Row 1
  if (circle11 === true) {
    stroke("blue");
    circle(100,100,150);
  }
  if (cross11 === true) {
    stroke("red");
    line(25,25,175,175);
    line(25,175,175,25);
  }

  if (circle12 === true) {
    stroke("blue");
    circle(300,100,150);
  }
  if (cross12 === true) {
    stroke("red");
    line(225,25,375,175);
    line(225,175,375,25);
  }
  if (circle13 === true) {
    stroke("blue");
    circle(500,100,150);
  }
  if (cross13 === true) {
    stroke("red");
    line(425,25,575,175);
    line(425,175,575,25);
  }

  // Row 2
  if (circle21 === true) {
    stroke("blue");
    circle(100,300,150);
  }
  if (cross21 === true) {
    stroke("red");
    line(25,225,175,375);
    line(25,375,175,225);
  }

  if (circle22 === true) {
    stroke("blue");
    circle(300,300,150);
  }
  if (cross22 === true) {
    stroke("red");
    line(225,225,375,375);
    line(225,375,375,225);
  }
  if (circle23 === true) {
    stroke("blue");
    circle(500,300,150);
  }
  if (cross23 === true) {
    stroke("red");
    line(425,225,575,375);
    line(425,375,575,225);
  }

  // Row 3
  if (circle31 === true) {
    stroke("blue");
    circle(100,500,150);
  }
  if (cross31 === true) {
    stroke("red");
    line(25,425,175,575);
    line(25,575,175,425);
  }

  if (circle32 === true) {
    stroke("blue");
    circle(300,500,150);
  }
  if (cross32 === true) {
    stroke("red");
    line(225,425,375,575);
    line(225,575,375,425);
  }
  if (circle33 === true) {
    stroke("blue");
    circle(500,500,150);
  }
  if (cross33 === true) {
    stroke("red");
    line(425,425,575,575);
    line(425,575,575,425);
  }

  if (player1Won === true) {
    textSize(32)
    fill("blue")
    stroke(0)
    strokeWeight(1)
    text("Circles Won!",210,300);
  }
  if (player2Won === true) {
    textSize(32);
    fill("red");
    stroke(0);
    strokeWeight(1);
    text("Crosses Won!",205,300);
  }
  resetButton.mousePressed(reset);
}

function mousePressed() {
  // Row 1
  if (mouseX < 200 && mouseX > 0 && mouseY < 200 && mouseY > 0) {
    if (player1 === true && circle11 === false && cross11 == false) {
        circle11 = true;
        player1 = false;
        player2 = true;
        playerCircle11 = true;
    }
    else if (player2 === true && cross11 === false && circle11 === false) {
      cross11 = true;
      player2 = false;
      player1 = true;
      playerCross11 = true;
    }
  }

  if (mouseX < 400 && mouseX > 200 && mouseY < 200 && mouseY > 0) {
    if (player1 === true && circle12 === false && cross12 == false) {
        circle12 = true;
        player1 = false;
        player2 = true;
        playerCircle12 = true;
    }
    else if (player2 === true && cross12 === false && circle12 === false) {
      cross12 = true;
      player2 = false;
      player1 = true;
      playerCross12 = true;
    }
  }

  if (mouseX < 600 && mouseX > 400 && mouseY < 200 && mouseY > 0) {
    if (player1 === true && circle13 === false && cross13 == false) {
        circle13 = true;
        player1 = false;
        player2 = true;
        playerCircle13 = true;
    }
    else if (player2 === true && cross13 === false && circle13 === false) {
      cross13 = true;
      player2 = false;
      player1 = true;
      playerCross13 = true;
    }
  }
 
  // Row 2
  if (mouseX < 200 && mouseX > 0 && mouseY < 400 && mouseY > 200) {
    if (player1 === true && circle21 === false && cross21 == false) {
        circle21 = true;
        player1 = false;
        player2 = true;
        playerCircle21 = true;
    }
    else if (player2 === true && cross21 === false && circle21 === false) {
      cross21 = true;
      player2 = false;
      player1 = true;
      playerCross21 = true;
    }
  }

  if (mouseX < 400 && mouseX > 200 && mouseY < 400 && mouseY > 200) {
    if (player1 === true && circle22 === false && cross22 == false) {
        circle22 = true;
        player1 = false;
        player2 = true;
        playerCircle22 = true;
    }
    else if (player2 === true && cross22 === false && circle22 === false) {
      cross22 = true;
      player2 = false;
      player1 = true;
      playerCross22 = true;
    }
  }

  if (mouseX < 600 && mouseX > 400 && mouseY < 400 && mouseY > 200) {
    if (player1 === true && circle23 === false && cross23 == false) {
        circle23 = true;
        player1 = false;
        player2 = true;
        playerCircle23 = true;
    }
    else if (player2 === true && cross23 === false && circle23 === false) {
      cross23 = true;
      player2 = false;
      player1 = true;
      playerCross23 = true;
    }
  }

  // Row 3
  if (mouseX < 200 && mouseX > 0 && mouseY < 600 && mouseY > 400) {
    if (player1 === true && circle31 === false && cross31 == false) {
        circle31 = true;
        player1 = false;
        player2 = true;
        playerCircle31 = true;
    }
    else if (player2 === true && cross31 === false && circle31 === false) {
      cross31 = true;
      player2 = false;
      player1 = true;
      playerCross31 = true;
    }
  }

  if (mouseX < 400 && mouseX > 200 && mouseY < 600 && mouseY > 400) {
    if (player1 === true && circle32 === false && cross32 == false) {
        circle32 = true;
        player1 = false;
        player2 = true;
        playerCircle32 = true;
    }
    else if (player2 === true && cross32 === false && circle32 === false) {
      cross32 = true;
      player2 = false;
      player1 = true;
      playerCross32 = true;
    }
  }

  if (mouseX < 600 && mouseX > 400 && mouseY < 600 && mouseY > 400) {
    if (player1 === true && circle33 === false && cross33 == false) {
        circle33 = true;
        player1 = false;
        player2 = true;
        playerCircle33 = true;
    }
    else if (player2 === true && cross33 === false && circle33 === false) {
      cross33 = true;
      player2 = false;
      player1 = true;
      playerCross33 = true;
    }
  }
}

function checkIfWon() {
  if (
    playerCircle11 === true &&
    playerCircle12 === true &&
    playerCircle13 === true ||
    playerCircle11 === true &&
    playerCircle21 === true &&
    playerCircle31 === true ||
    playerCircle12 === true &&
    playerCircle22 === true &&
    playerCircle32 === true ||
    playerCircle13 === true &&
    playerCircle23 === true &&
    playerCircle33 === true ||
    playerCircle21 === true &&
    playerCircle22 === true && 
    playerCircle23 === true ||
    playerCircle31 === true &&
    playerCircle32 === true &&
    playerCircle33 === true ||
    playerCircle11 === true &&
    playerCircle22 === true &&
    playerCircle33 === true ||
    playerCircle13 === true &&
    playerCircle22 === true &&
    playerCircle31 === true) {
    player1Won = true
  }
  else if (
    playerCross11 === true &&
    playerCross12 === true &&
    playerCross13 === true ||
    playerCross11 === true &&
    playerCross21 === true &&
    playerCross31 === true ||
    playerCross12 === true &&
    playerCross22 === true &&
    playerCross32 === true ||
    playerCross13 === true &&
    playerCross23 === true &&
    playerCross33 === true ||
    playerCross21 === true &&
    playerCross22 === true && 
    playerCross23 === true ||
    playerCross31 === true &&
    playerCross32 === true &&
    playerCross33 === true ||
    playerCross11 === true &&
    playerCross22 === true &&
    playerCross33 === true ||
    playerCross13 === true &&
    playerCross22 === true &&
    playerCross31 === true) {
    player2Won = true
  }
}
function reset() {
   circle11 = false;
   circle12 = false;
   circle13 = false;
   circle21 = false;
   circle22 = false;
   circle23 = false;
   circle31 = false;
   circle32 = false;
   circle33 = false;

   cross11 = false;
   cross12 = false;
   cross13 = false;
   cross21 = false;
   cross22 = false;
   cross23 = false;
   cross31 = false;
   cross32 = false;
   cross33 = false;

   playerCircle11 = false;
   playerCircle12 = false;
   playerCircle13 = false;
   playerCircle21 = false;
   playerCircle22 = false;
   playerCircle23 = false;
   playerCircle31 = false;
   playerCircle32 = false;
   playerCircle33 = false;

   playerCross11 = false;
   playerCross12 = false;
   playerCross13 = false;
   playerCross21 = false;
   playerCross22 = false;
   playerCross23 = false;
   playerCross31 = false;
   playerCross32 = false;
   playerCross33 = false;


   player1 = true;
   player2 = false;
   player1Won = false;
   player2Won = false;
}