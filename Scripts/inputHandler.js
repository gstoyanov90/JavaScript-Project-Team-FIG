// handles the mousedown event

function mouseDown(event) {
    var mouseX = event.clientX - ctx.canvas.offsetLeft;
    var mouseY = event.clientY - ctx.canvas.offsetTop;

	// checks whether the player has clicked on any enemies object
    for (var index = 0; index < enemies.enemies.length; index++) {
        if (mouseX > enemies.enemies[index].x && mouseX < enemies.enemies[index].x + enemies.enemies[index].size &&
            mouseY > enemies.enemies[index].y && mouseY < enemies.enemies[index].y + enemies.enemies[index].size) {

            sound.balloonPopPlay();
			// checks whether the clicked enemy is a bonus or a regular one
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