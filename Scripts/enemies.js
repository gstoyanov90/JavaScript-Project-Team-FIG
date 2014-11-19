function Enemies() {
    this.enemies = [];
    this.velocity = 1;

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
        if (Math.round(Math.random() * 100) < 6) {
            var x = Math.round(Math.random() * (canvasWidth - 50));
            var y = Math.round(Math.random() * 200 + canvasHeight);
            var speed = Math.round(Math.random() * 5 + this.velocity);
			
            if (!isIntersected(x, this.enemies)) {
                var chance = Math.round(Math.random() * 100);

                if (chance <= 2) {
                    this.enemies.push(new Bonus(x, y, speed, "life"));
                } else if (chance <= 10) {
                    this.enemies.push(new Bonus(x, y, speed, "money"));
                } else {
                    this.enemies.push(new FloatingHead(x, y, speed, images.enemies[Math.round(Math.random() * 5)]));
                }
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

                if (this.enemies[i].type == undefined) {
                    player.reduceLives();
                }

                this.enemies.splice(i, 1);
            }
        }
    }

    this.incrementSpeed = function incrementSpeed() {
        this.velocity += 0.001;
    }
}