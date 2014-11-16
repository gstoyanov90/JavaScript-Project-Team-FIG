var head,
    ctx,
    canvas,
    enemies,
    canvasWidth,
    canvasHeight,
    sound;

window.onload = init();

function init() {
    canvas = document.getElementById('canvas');
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    ctx = canvas.getContext('2d');
    enemies = [];

    mainLoop();
}

function mainLoop() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    generateHeads();
    render();
    update();
    outOfBoundsCheck();

    var loop = setTimeout('mainLoop()', 100);
}

function render() {
    ctx.save();

    for (var index = 0; index < enemies.length; index++) {
        enemies[index].render(ctx);
    }

    ctx.restore();
}

function update() {
    for (var index = 0; index < enemies.length; index++) {
            enemies[index].update();
    }
}

function outOfBoundsCheck() {
    for (var i = 0; i < enemies.length; i++) {

        if (enemies[i].y <= 0) {
            enemies.splice(i, 1);
        }
    }
}

function generateHeads() {
    if (Math.round(Math.random() * 100) < 50) {
        var x = Math.round(Math.random() * canvasWidth - 50);
        var y = Math.round(Math.random() * 200 + canvasHeight);
        var speed = Math.round(Math.random() * 10 + 5);

        enemies.push(new FloatingHead(x, y, speed));
    }
}