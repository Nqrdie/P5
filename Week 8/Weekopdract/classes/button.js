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
            fill(240, 20, 230);
            textAlign(CENTER);
            textFont(comicFont)
            text(this.label, this.x + this.width / 2, this.y + this.height / 2 - 8);
        } else {
            image(this.button, this.x,this.y,this.width,this.height)
            textSize(30);
            fill(240, 20, 230);
            textAlign(CENTER);
            textFont(comicFont)
            text(this.label, this.x + this.width / 2, this.y + this.height / 2 - 8);
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

