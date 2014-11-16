var head, ctx, canvas, background;
window.onload = init();

function init() {
    ctx = document.getElementById('canvas').getContext('2d');
    background = new Background();
    head = new FloatingHead(500, 500, 3);
    mainLoop();
}

function mainLoop() {
    ctx.clearRect(0, 0, 600, 600);
    head.render(ctx);
    head.update();
    background.render(ctx);
    var loop = setTimeout('mainLoop()', 25);
}