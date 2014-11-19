function Bonus(x, y, speed, type) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.speed = speed;
    this.type = type;

    this.update = function update() {
        this.y -= speed;
    }

    this.render = function render(ctx) {
        if (this.type == "life") {
            ctx.drawImage(images.life, this.x, this.y);
        } else {
            ctx.drawImage(images.money, this.x, this.y);
        }
    }

    this.getBonus = function getBonus() {
        if (this.type == "life") {
            player.increaseLives();
        } else {
            player.incrementScore(2500);
        }
    }
}