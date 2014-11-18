function Enemies() {
    this.enemies = [];
    this.velocity = 5;

    this.render = function render() {
        for (var index = 0; index < this.enemies.length; index++) {
            this.enemies[index].render(ctx);
        }
    }

    this.update = function update() {
        for (var index = 0; index < this.enemies.length; index++) {
            this.enemies[index].update();
        }
    }

    this.generate = function generate() {
        if (Math.round(Math.random() * 100) < 10) {
            var x = Math.round(Math.random() * (canvasWidth - 50));
            var y = Math.round(Math.random() * 200 + canvasHeight);
            var speed = Math.round(Math.random() * this.velocity + 2);
			
			// ctx.canvas.addEventListener('click', function(event){
			// this.mouseX = event.clientX - ctx.canvas.offsetLeft;
			// this.mouseY = event.clientY - ctx.canvas.offsetTop;
				// if(mouseX >= x && mouseX < x+size && mouseY >= y && mouseY < y+size){
					// this.size=0;
					// this.speed=0;
				// }
			// });
			
			if (!isIntersected(x, this.enemies)) {
                this.enemies.push(new FloatingHead(x, y, speed));
            }
        }

        function isIntersected(x, enemies) {
            for (var index = 0; index < enemies.length; index++) {
                if (x < enemies[index].x + enemies[index].size &&
                    x + enemies[index].size > enemies[index].x) {
                    return true;
                }
            }

            return false;
        }
    }
	
	

    this.outOfBoundsCheck = function outOfBoundsCheck() {
        for (var i = 0; i < this.enemies.length; i++) {

            if (this.enemies[i].y <= -100) {
                this.enemies.splice(i, 1);
                player.reduceLives();
            }
        }
    }

    this.incrementSpeed = function incrementSpeed() {
        this.velocity += 0.01;
    }
}