/**
 * Created by Stoilkov on 16.11.2014 г..
 */
function Sound() {
    this.sound = new Audio();
    this.sound.src = "BalloonPopping.mp3";
    this.play = function play() {
        this.sound.play();
    }
}

function BackgroundSound() {
    this.bsound = new Audio();
    this.bsound.src = "getLucky.mp3";
    this.bsound.loop = true;
    this.play = function play(){
        this.bsound.play();
    }
}
