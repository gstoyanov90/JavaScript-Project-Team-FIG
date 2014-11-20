// The enemies constructor

function Enemies() {
	// initial variables
    this.enemies = [];
    this.velocity = 1;

	// renders the object on the screen
    this.render = function render() {
        for (var index = 0; index < this.enemies.length; index++) {
            this.enemies[index].render(ctx);
        }
    }

	// updates the logic of the object
    this.update = function update() {
        for (var index = 0; index < this.enemies.length; index++) {
            this.enemies[index].update();
        }
    }

	// generates enemies based on a random number
    this.generate = function generate() {
        if (Math.round(Math.random() * 100) < 6) {
            var x = Math.round(Math.random() * (canvasWidth - 50));
            var y = Math.round(Math.random() * 200 + canvasHeight);
            var speed = Math.round(Math.random() * 5 + this.velocity);
			
			// checks whether the new enemy intersects the path of an already existing one
            if (!isIntersected(x, this.enemies)) {
                var chance = Math.round(Math.random() * 100);

				// spawns bonuses from time to time
                if (chance <= 2) {
                    this.enemies.push(new Bonus(x, y, speed, "life"));
                } else if (chance <= 10) {
                    this.enemies.push(new Bonus(x, y, speed, "money"));
                } else {
					// spawns a enemy with a random image of the enemies images
                    this.enemies.push(new FloatingHead(x, y, speed, images.enemies[Math.round(Math.random() * 5)]));
                }
            }
        }

		// returns a boolean whether the new position intersects an already existing one
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

	// checks whether the enemy has gone out of bounds.
    this.outOfBoundsCheck = function outOfBoundsCheck() {
        for (var i = 0; i < this.enemies.length; i++) {

            if (this.enemies[i].y <= -100) {

				// if the enemy is not of type bonus, the player loses a life
                if (this.enemies[i].type == undefined) {
                    player.reduceLives();
                }

                this.enemies.splice(i, 1);
            }
        }
    }

	// constantly increases the speed of the enemies for a more competitive gameplay
    this.incrementSpeed = function incrementSpeed() {
        this.velocity += 0.001;
    }
}