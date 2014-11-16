function FloatingHead(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.update = function update() {
       this.y -= speed;
    }

    this.render = function render(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 30, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}