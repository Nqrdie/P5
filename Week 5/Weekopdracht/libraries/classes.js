// Creating a class for the circles to create multiple circles with random positions and colors
class Circles {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
  }

  renderCircles() {
    fill(this.color);
    circle(this.x, this.y, this.d);
  }
}

// Creating a class for the rectangles to create multiple circles with random positions and colors
class Rects {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    this.rotation = random(90)
  }

  renderRects() {
    fill(this.color);
    rotate(this.rotation)
    rect(this.x, this.y, this.w, this.h);
  }
}

