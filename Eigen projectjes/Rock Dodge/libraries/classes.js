class rock {
    constructor(x,y) {
      this.x = x;
      this.y = y;
      this.speed = 5;
    }
    renderRock() {
      strokeWeight(2);
      fill("grey");
      image(rockImg,this.x,this.y,50);
    }
    updateRockPosition() {
      this.y += this.speed;
      if (this.y > height) {
        this.x = random(50,750);
        this.y = random(-800,25)
        this.speed = random(3,6);
        this.y = 0;
      }
    }
    checkRockCollisions1() {
      if (
        this.x + 50 >= player1.x &&
        this.x <= player1.x + 75 &&
        this.y + 50 >= player1.y) {
          gameOver1 = true;
        }
    }
    checkRockCollisions2() {
      if (
        this.x + 50 >= player2.x &&
        this.x <= player2.x + 75 &&
        this.y + 50 >= player2.y) {
          gameOver2 = true;
      }
    }
  }
  
  
  class coin {
    constructor(x,y) {
      this.x = x;
      this.y = y;
      this.speed = 5;
      }
    renderCoin() {
      strokeWeight(2);
      fill("yellow");
      circle(this.x,this.y,15);
    }
    updateCoinPosition() {
      this.y += this.speed;
      if (this.y > height) {
        this.x = random(50,750);
        this.y = random(-800,25)
        this.speed = random(3,6);
        this.y = 0;
      }
    }
    checkCoinCollisions() {
      if (
        this.x + 15 >= player1.x &&
        this.x <= player1.x + 75 &&
        this.y + 15 >= player1.y) {
          score1++
          this.x = random(50,750);
          this.y = random(-800,25)
          this.speed = random(3,6);
          this.y = 0;
        }
      if (
        this.x + 15 >= player2.x &&
        this.x <= player2.x + 75 &&
        this.y + 15 >= player2.y) {
          if (players == 2) {
            score2++
            this.x = random(50,750);
            this.y = random(-800,25)
            this.speed = random(3,6);
            this.y = 0;
          }
        }
    }
  }


class Button {
  constructor(text, x, y, width, height) {
      this.text = text;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color(255);
      this.hoverColor = color(220);
      this.hovered = false;
  }

  onClick = function() {}

  displayButton(label,button, buttonPressed) {
      this.label = label;
      this.button = button;
      this.buttonPressed = buttonPressed
      if (this.mouseAligned()) {
          this.hovered = true;
      } else {
          this.hovered = false;
      }
      
      if (this.hovered) {
          image(this.buttonPressed, this.x,this.y,this.width,this.height)
          textSize(30);
          fill("red")
          textAlign(CENTER);
          stroke(0)
          strokeWeight(4)
          text(this.label, this.x + this.width / 2, this.y + this.height / 2);
      } else {
          image(this.button, this.x,this.y,this.width,this.height)
          textSize(30);
          fill("red")
          textAlign(CENTER);
          stroke(0)
          strokeWeight(4)
          text(this.label, this.x + this.width / 2, this.y + this.height / 2);
      }
      
      if(mouseIsPressed && !this.clicked) {
          if(this.mouseAligned()) {
              this.clicked = true;
              this.onClick()
          }
      }
      else if (!mouseIsPressed) {
          this.clicked = false;
      }

      textAlign(CENTER, CENTER);
      fill(0);
  }

  mouseAligned() {
      if(mouseX > this.x && mouseX < this.x + this.width &&
          mouseY > this.y && mouseY < this.y + this.height) {
          return true;
      }
          return false;
  }
}

  