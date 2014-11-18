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
}