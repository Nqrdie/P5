let timeh = 0;
let timem = 0;
let alarmh1 = 0;
let alarmh2 = 0;
let alarmm1 = 0;
let alarmm2 = 0;

function setup() {
  createCanvas(400, 400);

  buttoninch = createButton("˄");
  buttondech = createButton("˅");
  buttonincm = createButton("˄");
  buttondecm = createButton("˅");
  buttonr = createButton("Reset")


  buttoninch.position(0, 0);
  buttondech.position(0,20);
  buttonincm.position(150, 0);
  buttondecm.position(150,20);
  buttonr.position(173,12)
}
function draw() {
  frameRate(60)
  console.log(timeh)
  console.log(timem)
  background("aqua");
  if(hour() === timeh) {
    if(minute() === timem) {
      background("pink")
    }
  }

    // alarm function call
  buttoninch.mousePressed(alarminch)
  buttondech.mousePressed(alarmdech)
  buttonincm.mousePressed(alarmincm)
  buttondecm.mousePressed(alarmdecm)
  buttonr.mousePressed(resetall)

  // alarm
  fill("white")
  rect(20,0,30,41)
  rect(50,0,27,41)
  circle(90,10,10)
  circle(90,30,10)
  rect(100,0,30,41)
  rect(125,0,30,41)

  fill("black")
  textSize(35)
  text(alarmh1, 27,33)
  text(alarmh2, 54,33)
  text(alarmm1, 104,33)
  text(alarmm2, 130,33)

  // clock
  fill("grey")
  rect(80, 150, 235, 60);
  fill(150,0,0,175);
  rect(90, 155, 215, 50);

  // table
  fill(99, 18, 18);
  rect(0,210,400,30);
  fill(99, 18, 18);
  rect(0, 240, 30, 160);
  fill(99, 18, 18);
  rect(50, 240, 30, 160);
  fill(99, 18, 18);
  rect(370, 240, 30, 160);
  fill(99, 18, 18);
  rect(320, 240, 30, 160);

  // timer
  textSize(50);
  fill("red");
  text(hour()+ ":", 102.5, 200);
  text(minute(), 172.5, 200);
  text("." + second(), 224.5, 200);
}

// alarm functions
function alarminch()  { 
  alarmh()
  if(alarmh2 <= 8) {
    alarmh2 = alarmh2 + 1
  }
  else {
    alarmh2 = 0
    alarmh1 = alarmh1 + 1
  }
}

function alarmdech()  { 
  alarmdh()
  if(alarmh1 != 0) {
    alarmh1 = alarmh1 - 1
  }
  else {
    alarmh2 = alarmh2 - 1
  }
}

function alarmincm()  { 
  alarmm()
  if(alarmm2 <= 8) {
    alarmm2 = alarmm2 + 1
  }
  else {
    alarmm2 = 0
    alarmm1 = alarmm1 + 1
  }
}

function alarmdecm()  { 
  alarmdm()
  if(alarmm1 != 0) {
    alarmm1 = alarmm1 - 1
  }
  else {
    alarmm2 = alarmm2 - 1
  }
}

function alarmh() {
  timeh = timeh + 1
}

function alarmm() {
  timem = timem + 1
}

function alarmdh() {
  timeh = timeh - 1
}

function alarmdm() {
  timem = timem - 1
}

function resetall() {
  timeh = 0;
  timem = 0;
  alarmh1 = 0;
  alarmh2 = 0;
  alarmm1 = 0;
  alarmm2 = 0;
}
