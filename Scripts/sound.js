/**
 * Created by Stoilkov on 16.11.2014 г..
 */
 
 // The sound constructor
function Sound() {
	// the initial variables holding the audio files
    this.balloonPop = new Audio();
    this.balloonPop.src = "Audio/BalloonPopping.mp3";
    this.background = new Audio();
    this.background.src = "Audio/Background.mp3";
    this.gameOver = new Audio();
    this.gameOver.src = "Audio/GameOver.mp3";
    
	// sound player when an enemy is popped
    this.balloonPopPlay = function balloonPopPlay() {
        this.balloonPop.play();
    }

	// the background music
    this.backgroundPlay = function backgroundPlay() {
        this.background.play();
    }

	// stops the background music
    this.backgroundStop = function backgroundStop() {
        this.background.pause();
    }

	// the gameover music
    this.gameOverPlay = function gameOverPlay() {
        this.gameOver.play();
    }
}
