function FloatingHead(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.update = function update() {
        if (y > 0) {
            y -= speed;
        }
    }

    this.render = function render(ctx) {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    }
}