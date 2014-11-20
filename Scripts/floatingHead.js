// the FloatingHead constructor

function FloatingHead(x, y, speed, image) {
	// initial variables
    this.x = x;
    this.y = y;
    this.size = 60;
    this.speed = speed;
    this.image = image;
	
	// updates the logic of the object
    this.update = function update() {
       this.y -= speed;
    }

	// renders the object on the screen
    this.render = function render(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
}