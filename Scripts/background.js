/**
 * Created by Georgi.A.Stoyanov on 16.11.2014.
 */
var bg = new Image();
bg.src = "skyUbackground.jpg";

function Background() {
    this.x = 0, this.y = 0, this.w = bg.width, this.h = bg.height;
    this.render = function (ctx) {
        ctx.drawImage(bg, this.x-=5, 0 );
        if(this.x <= -1975){
            this.x = 0;
        }
    }
}