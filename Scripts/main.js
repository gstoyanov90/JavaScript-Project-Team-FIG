var head,
    ctx,
    canvas,
    button,
    enemies,
    canvasWidth,
    canvasHeight,
    sound,
    background,
    images,
    player,
    gameRunning;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

    enemies = new Enemies();
    images = new Images();
    background = new Background();
    player = new Player();
    sound = new Sound();
    gameRunning = true;

    ctx.canvas.addEventListener('mousedown', mouseDown);

    button = document.getElementById("startGame");
    button.style.display = "none";
    document.getElementById("canvasContainer").style.marginLeft = "200px";
    mainLoop();

}

function mainLoop() {
    clearScreen();
    enemies.generate();
    render();
    update();
    enemies.outOfBoundsCheck();
    sound.backgroundPlay();

    if (gameRunning) {
        var loop = setTimeout('mainLoop()', 30);
    } else {
        gameOver();
    }
}

function render() {
    ctx.save();

    background.render(ctx);
    enemies.render(ctx);
    player.drawStatistics(ctx);

    ctx.restore();
}

function update() {
    enemies.update();
    enemies.incrementSpeed();
}

function clearScreen() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

function gameOver() {
    sound.backgroundStop();
    sound.gameOverPlay();

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = "white";
    ctx.font = 'bold 100px Arial';
    ctx.fillText("GAME OVER", 100, canvasHeight / 2);

    ctx.fillStyle = "red";
    ctx.font = 'bold 70px Arial';
    ctx.fillText("SCORE: " + Math.round(player.score), 180, canvasHeight - 200);

    document.getElementById("canvasContainer").style.marginLeft = "0";

    button.style.display = "inline-block";
    button.innerHTML = "Try Again?"
}