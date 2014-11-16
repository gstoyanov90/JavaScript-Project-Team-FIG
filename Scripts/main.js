var head,
    ctx,
    canvas,
    enemies,
    canvasWidth,
    canvasHeight,
    sound,
    background;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

    enemies = new Enemies();
    background = new Background();
    sound = new balloonPoppingSound();

    var button = document.getElementById("startGame");
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

    var loop = setTimeout('mainLoop()', 50);
}

function render() {
    ctx.save();

    background.render(ctx);
    enemies.render(ctx);

    ctx.restore();
}

function update() {
    enemies.update();
    enemies.incrementSpeed();
}

function clearScreen() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}