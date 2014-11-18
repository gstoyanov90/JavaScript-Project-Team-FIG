/**
 * Created by Stoilkov on 16.11.2014 г..
 */
function Sound() {
    this.balloonPop = new Audio();
    this.balloonPop.src = "Audio/BalloonPopping.mp3";
    this.background = new Audio();
    this.background.src = "Audio/Background.mp3";
    this.gameOver = new Audio();
    //this.gameOver.src = "Audio/GameOver.mp3";
    
    this.balloonPopPlay = function balloonPopPlay() {
        this.balloonPop.play();
    }

    this.backgroundPlay = function backgroundPlay() {
        this.background.play();
    }

    this.backgroundStop = function backgroundStop() {
        this.background.pause();
    }

    this.gameOverPlay = function gameOverPlay() {
        this.gameOver.play();
    }
}
