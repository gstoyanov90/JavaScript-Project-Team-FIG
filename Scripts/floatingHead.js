function FloatingHead(x, y, speed, image) {
    this.x = x;
    this.y = y;
    this.size = 60;
    this.speed = speed;
    this.image = image;
    this.update = function update() {
       this.y -= speed;
    }

    this.render = function render(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
    }
}