let colorsLink = [
  [220, 220, 220], // Bg
  "black",         // Black
  [235, 208, 165], // Skin color
  [100, 160, 100], // Green color
  [243, 210, 97],  // Hair color
  [175, 90, 51],    // Shoes color
  "white",
  [187,208,115]
];

let colorsSmurfin = [
  [220, 220, 220], // Bg
  "black",         // Black
  [66, 135, 245], // Skin color
  [255, 255, 255], // Green color
  [255, 224, 161],  // Hair color
  [175, 90, 51],    // Shoes color
  "white",
  [255, 255, 255]
];


let link = [
  [0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,1,3,3,3,3,1,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,3,3,3,3,3,3,1,1,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,1,3,3,3,3,3,3,3,3,1,1,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,3,1,4,4,4,4,4,4,1,3,1,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,1,4,4,4,4,4,4,4,4,1,1,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,4,4,1,4,4,4,4,1,4,4,1,1,0,0,0,0,0,0,0,0],
  [1,1,1,1,4,1,4,4,4,4,1,1,1,4,1,1,1,1,0,0,0,0,0,0],
  [1,2,2,1,1,4,4,4,4,1,1,2,1,4,1,2,2,1,0,0,0,0,0,0],
  [0,1,1,1,1,4,4,1,1,1,2,2,1,4,1,1,1,0,0,0,0,0,0,0],
  [0,0,1,4,1,1,1,1,1,2,1,1,1,1,4,1,0,0,0,0,0,0,0,0],
  [0,0,1,4,1,6,1,1,2,2,1,1,6,1,4,1,0,0,0,0,0,0,0,0],
  [0,0,1,1,1,2,1,6,2,2,6,1,2,1,1,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,7,1,3,3,3,3,3,3,1,7,1,0,0,0,0,0,0,0,0,0],
  [0,0,1,7,7,1,3,3,3,3,3,3,1,7,7,1,0,0,0,0,0,0,0,0],
  [0,1,2,2,1,1,3,3,3,3,3,3,1,1,2,2,1,0,0,0,0,0,0,0],
  [0,1,1,2,1,3,1,1,4,4,1,1,3,1,2,1,1,0,0,0,0,0,0,0],
  [0,0,1,1,1,3,3,1,4,4,1,3,3,1,1,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,3,3,3,3,1,1,1,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,5,5,5,1,1,1,1,5,5,5,1,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,5,5,1,1,0,0,1,1,5,5,1,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0]
]

let smurfin = [
  [0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,1,3,3,3,3,1,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,3,3,3,3,3,3,1,1,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,1,3,3,3,3,3,3,3,3,1,1,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,3,1,4,4,4,4,4,4,1,3,1,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,1,4,4,4,4,4,4,4,4,1,1,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,4,4,1,4,4,4,4,1,4,4,1,1,0,0,0,0,0,0,0,0],
  [1,1,1,1,4,1,4,4,4,4,1,1,1,4,1,1,1,1,0,0,0,0,0,0],
  [1,2,2,1,1,4,4,4,4,1,1,2,1,4,1,2,2,1,0,0,0,0,0,0],
  [0,1,1,1,1,4,4,1,1,1,2,2,1,4,1,1,1,0,0,0,0,0,0,0],
  [0,0,1,4,1,1,1,1,1,2,1,1,1,1,4,1,0,0,0,0,0,0,0,0],
  [0,0,1,4,1,6,1,1,2,2,1,1,6,1,4,1,0,0,0,0,0,0,0,0],
  [0,0,1,1,1,2,1,6,2,2,6,1,2,1,1,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,2,2,2,2,2,2,1,1,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,7,1,3,3,3,3,3,3,1,7,1,0,0,0,0,0,0,0,0,0],
  [0,0,1,7,7,1,3,3,3,3,3,3,1,7,7,1,0,0,0,0,0,0,0,0],
  [0,1,2,2,1,1,3,3,3,3,3,3,1,1,2,2,1,0,0,0,0,0,0,0],
  [0,1,1,2,1,3,1,1,4,4,1,1,3,1,2,1,1,0,0,0,0,0,0,0],
  [0,0,1,1,1,3,3,1,4,4,1,3,3,1,1,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,3,3,3,3,1,1,1,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,5,5,5,1,1,1,1,5,5,5,1,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,5,5,1,1,0,0,1,1,5,5,1,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0]
]



let drawLink = false;
let drawSmurfin = false;
let currentFrame = -1;
let isAnimating = false;
let animationInterval;

function setup() {
  createCanvas(640, 480);


  button1 = createButton("1");
  button1.mousePressed(animateLink);
  button2 = createButton("2");
  button2.mousePressed(animateSmurfin);
  button1.size(100)
  button2.size(100)
}

function draw() {
  background(220);

  // Set the current pixels to link or smurfin based on if drawLink is true or not
  let currentPixels = drawLink ? link : smurfin;

  for (let x = 0; x <= currentFrame; x++) {
    for (let y = 0; y < currentPixels[x].length; y++) {
      if (currentPixels[x][y] !== 0) {
        noStroke();
        // Set the colors to link or smurfin based on if drawLink is true or not
        fill(drawLink ? colorsLink[currentPixels[x][y]] : colorsSmurfin[currentPixels[x][y]])
        rect(20 * y, 20 * x, 20, 20);
      }
    }
  }
}

// Starts the animation and resets the currentFrame 
function animateLink() {
  drawLink = true;
  drawSmurfin = false;
  currentFrame = 0;
  startAnimation();
}

function animateSmurfin() {
  drawLink = false;
  drawSmurfin = true;
  currentFrame = 0;
  startAnimation();
}

// Set an interval to indicate how fast the frames load
function startAnimation() {
  if (!isAnimating) {
    isAnimating = true;
    animationInterval = setInterval(nextFrame, 50);
  }
}

// Adds 1 to currentFrame until its more than the length of the array
function nextFrame() {
  if (currentFrame < link.length - 1) {
    currentFrame++;
  } else {
    stopAnimation();
  }
}

// Clears the interval and makes sure it doesn't keep going
function stopAnimation() {
  clearInterval(animationInterval);
  isAnimating = false;
}