let box = [];

let startX = 0;
let startY = 0;
let boxSize = 200;
let rows = 3;
let colums = 3;
let filledBoxes = 0;

let playerID = 1;
let gameWon = 0;
let gameReset = false;

const winCombi = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6]             
];


function setup() {
  background(220);
  createCanvas(600, 600);

  // Draw boxes
  for (x = 0; x < rows; x++) {
    for (y = 0; y < colums; y++) {
      strokeWeight(3);
      box.push(new Box(startX + boxSize * x, startY + boxSize * y, boxSize, boxSize));
    }
  }
}

function draw() {

  // Call functions
  for (i = 0; i < box.length; i++) {
    box[i].renderBox();
    box[i].checkWon();
  }



  // Check game state
  if (gameWon === 1) {
    textSize(50);
    fill(0);
    text("Blue wins!",250,250);
  }

  else if (gameWon === 2) {
    textSize(50);
    fill(0);
    text("Red wins!",250,250);
  }

  // Check draw
  if (filledBoxes >= box.length && gameWon == 0) {
    textSize(50);
    fill(0);
    text("Draw!",250,250);
    }
}

class Box {
  constructor(x, y, w, l) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.l = l;
    this.ID = 0;
  }

  // Draws color based on player ID
  renderBox() {

    if(this.ID === 0){
      noFill();
    }
    else if (this.ID === 1) {
      fill("blue");
    } 
    else if (this.ID === 2) {
      fill("red");
    } 
    rect(this.x, this.y, this.w, this.l);
  }

  // Checks if a box is clicked and sets the playerID to the box
  clickBox() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.l
    ) {
      if (this.ID === 0) {
        this.ID = playerID;
        filledBoxes++;
        if (playerID === 1) {
          playerID = 2;
        } 
        else {
          playerID = 1;
        }
      }
    }
  }

  // Checks if there is any combination with the same ID to see if someone has won
  checkWon() {
    for (const combi of winCombi) {
      const [a,b,c] = combi;
      if (box[a].ID === this.ID && box[b].ID === this.ID && box[c].ID === this.ID) {
        if (gameWon === 0) {
          gameWon = this.ID;
        }
      }
    }
  }
}

// On mouse press calls function clickbox
function mousePressed() {
  for (let i = 0; i < box.length; i++) {
    box[i].clickBox();
  }
}