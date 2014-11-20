// The bonus constructor

function Bonus(x, y, speed, type) {
	// initial variables
    this.x = x;
    this.y = y;
    this.size = 50;
    this.speed = speed;
    this.type = type;

	// updates the logic of the object
    this.update = function update() {
        this.y -= speed;
    }

	// renders the object on the screen
    this.render = function render(ctx) {
        if (this.type == "life") {
            ctx.drawImage(images.life, this.x, this.y);
        } else {
            ctx.drawImage(images.money, this.x, this.y);
        }
    }

	// function occurs when a bonus is collected
    this.getBonus = function getBonus() {
        if (this.type == "life") {
            player.increaseLives();
        } else {
            player.incrementScore(2500);
        }
    }
}