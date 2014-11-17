var head,
    ctx,
    canvas,
    button,
    enemies,
    canvasWidth,
    canvasHeight,
    sound,
    background,
    player,
    gameRunning;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

    enemies = new Enemies();
    background = new Background();
    player = new Player();
    sound = new balloonPoppingSound();
    gameRunning = true;

    button = document.getElementById("startGame");
    button.style.display = "none";

    mainLoop();

}

function mainLoop() {
    clearScreen();
    sound.play();

    enemies.generate();
    render();
    update();
    enemies.outOfBoundsCheck();

    if (gameRunning) {
        var loop = setTimeout('mainLoop()', 50);
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
    player.incrementScore(100);
}

function clearScreen() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

function gameOver() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "white";
    ctx.font = 'bold 100px Arial';
    ctx.fillText("GAME OVER", 100, canvasHeight / 2);
    button.style.display = "inline-block";
    button.innerHTML = "Try Again?"
}