let oink;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("lime");
  strokeWeight(2)
  console.log("mouseX: " + mouseX)
  console.log("mouseY: " + mouseY)

  // Legs
  fill(255, 120, 217);
  rect(125,260,25,125);
  rect(240,260,25,125);
  fill(66, 1, 1)
  rect(125,370,25,15)
  rect(240,370,25,15)

  // Body
  fill(255, 120, 217);
  ellipse(200,200,300,250);

  // Ears
  ellipse(150,130,30,50)
  ellipse(250,130,30,50)
  
  //Head
  circle(200,200,150);

  // Nose
  fill(227, 84, 187);
  ellipse(200,215,50,25)

  fill("black");
  circle(190,215,10);
  circle(210,215,10);

  // Eyes
  fill("white");
  circle(175,165,25);
  circle(225,165,25);
  fill("black");
  circle(175,165,14);
  circle(225,165,14);

  // Mouth
  fill(0,0,0,0)
  curve(175,100,175,250,225,250,160,175)

  // Text
  if(mouseIsPressed) {
    if(mouseX >= 175 && mouseX <= 225 && mouseY >= 200 && mouseY <= 225) {
      oink = true
    }
  }
  else {
    oink = false
  }
  if (oink) {
    fill("black")
    textSize(50)
    text("OINK! OINK!", 65,50)
  }
}