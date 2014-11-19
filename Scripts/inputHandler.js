function mouseDown(event) {
    var mouseX = event.clientX - ctx.canvas.offsetLeft;
    var mouseY = event.clientY - ctx.canvas.offsetTop;

    for (var index = 0; index < enemies.enemies.length; index++) {
        if (mouseX > enemies.enemies[index].x && mouseX < enemies.enemies[index].x + enemies.enemies[index].size &&
            mouseY > enemies.enemies[index].y && mouseY < enemies.enemies[index].y + enemies.enemies[index].size) {

            sound.balloonPopPlay();
            if (enemies.enemies[index].type != undefined) {
                enemies.enemies[index].getBonus();
            } else {
                player.incrementScore(enemies.enemies[index].y / 2 + enemies.enemies[index].speed * 10);
            }

            enemies.enemies.splice(index, 1);
            break;
        }
    }

}