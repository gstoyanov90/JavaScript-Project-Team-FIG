function FloatingHead(x, y, speed) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.speed = speed;
    this.update = function update() {
       this.y -= speed;
    }

    this.render = function render(ctx) {
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
	// ctx.canvas.addEventListener('click', function(event){
		// this.mouseX = event.clientX - ctx.canvas.offsetLeft;
		// this.mouseY = event.clientY - ctx.canvas.offsetTop;
			// if(mouseX >= x && mouseX < x+size && mouseY >= y && mouseY < y+size){
				// this.size=0;
				// this.speed=0;
			// }
	// });
}