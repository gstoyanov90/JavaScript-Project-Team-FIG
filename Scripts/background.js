/**
 * Created by Georgi.A.Stoyanov on 16.11.2014.
 */
var bg = new Image();
bg.src = "../Images/8BPimage.png";

function Background() {
    this.x = 0, this.y = 0, this.w = 800px, this.h = 600px;
    this.render = function () {
        ctx.drawImage(bg, this.x--, 0 );
        if(this.x <= -599){
            this.x = 0;
        }
    }
}