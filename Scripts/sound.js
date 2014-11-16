/**
 * Created by Stoilkov on 16.11.2014 г..
 */
function balloonPoppingSound() {
    this.sound = document.getElementById("balloonPopping");
    this.play = function play() {
        this.sound.play();
    }
}
