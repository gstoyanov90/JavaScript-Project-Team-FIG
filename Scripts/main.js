
// the initial global variables
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

	// the starting point of the game
function init() {
	// gets the canvas information
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

	// the width and height of the canvas
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;

	// initial objects
    enemies = new Enemies();
    images = new Images();
    background = new Background();
    player = new Player();
    sound = new Sound();
	
	// a boolean for checking whether the game is still running
    gameRunning = true;

	// adds an event listener for the mousedown event
    ctx.canvas.addEventListener('mousedown', mouseDown);

	// handles the display of the button
    button = document.getElementById("startGame");
    button.style.display = "none";
	
	// initialises the main loop
    mainLoop();

}

function mainLoop() {
	// clears the screen
    clearScreen();
	// generates new enemies
    enemies.generate();
	// calls the render functions of every object in the game
    render();
	// updates the logic of the game
    update();
	// checks whether any enemy has got out of bounds
    enemies.outOfBoundsCheck();
	// plays the background sound. It's epic isn't it?
    sound.backgroundPlay();

	// checks whether the game has ended
    if (gameRunning) {
        var loop = setTimeout('mainLoop()', 30);
    } else {
        gameOver();
    }
}

// calls the render functions of every object
function render() {
    ctx.save();

    background.render(ctx);
    enemies.render(ctx);
    player.drawStatistics(ctx);

    ctx.restore();
}

// updates the logic of the game
function update() {
    enemies.update();
    enemies.incrementSpeed();
}

// clears the screen
function clearScreen() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

// displays the game over screen
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

	// displays the initial buton again
    button.style.display = "inline-block";
    button.innerHTML = "Try Again?"
}