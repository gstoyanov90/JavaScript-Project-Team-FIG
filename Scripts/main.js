var head, ctx, canvas;
window.onload = init();

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    head = new FloatingHead(500, 500, 3);
    mainLoop();
}

function mainLoop() {
    ctx.clearRect(0, 0, 600, 600);
    head.render(ctx);
    head.update();

    var loop = setTimeout('mainLoop()', 25);
}