// The constructor for the player

function Player() {
	// initial variables
    this.score = 0;
    this.lives = 5;

	// draws the statistics on the screen
    this.drawStatistics = function drawStatistics(ctx) {
        ctx.fillStyle = "green";
        ctx.font = 'bold 40px Arial';
        ctx.fillText("SCORE: " + Math.round(this.score), 480, 50);
        ctx.fillStyle = "red";
        ctx.fillText("LIVES: " + this.lives, 30, 50);
    }

	// increments the player's score by given value
    this.incrementScore = function incrementScore(value) {
        this.score += value;
    }

	// reduces the lives of the player
    this.reduceLives = function reduceLives() {
        this.lives -= 1;
        if (this.lives <= 0) {
            gameRunning = false;
        }
    }

	// increases the lives of the player
    this.increaseLives = function increaseLives() {
        this.lives += 1;
    }
}