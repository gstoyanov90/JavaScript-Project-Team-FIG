var head, ctx, canvas, enemies;
window.onload = init();

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    enemies = [];

    enemies.push(new FloatingHead(500, 500, 2));
    mainLoop();
}

function mainLoop() {
    ctx.clearRect(0, 0, 600, 600);

    ctx.save();
    enemies[0].render(ctx);
    ctx.restore();
    enemies[0].update();

    var loop = setTimeout('mainLoop()', 100);
}