function Player() {
    this.score = 0;
    this.lives = 5;

    this.drawStatistics = function drawStatistics(ctx) {
        ctx.fillStyle = "green";
        ctx.font = 'bold 40px Arial';
        ctx.fillText("SCORE: " + this.score, 480, 50);
        ctx.fillStyle = "red";
        ctx.fillText("LIVES: " + this.lives, 30, 50);
    }

    this.incrementScore = function incrementScore(value) {
        this.score += value;
    }

    this.reduceLives = function reduceLives() {
        this.lives -= 1;
        if (this.lives <= 0) {
            gameRunning = false;
        }
    }

    this.increaseLives = function increaseLives() {
        this.lives += 1;
    }
}