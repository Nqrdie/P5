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

    displayButton(label) {
        this.label = label;
        if (this.mouseAligned()) {
            this.hovered = true;
        } else {
            this.hovered = false;
        }
        
        if (this.hovered) {
            image(buttonImgPressed, this.x,this.y,this.width,this.height)
            text(this.label, this.x + this.width / 2, this.y + this.height / 2);
        } else {
            image(buttonImg, this.x,this.y,this.width,this.height)
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

