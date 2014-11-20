/**
 * Created by Georgi.A.Stoyanov on 16.11.2014.
 */
 
 // loading the images from the corresponding paths
var bg = new Image();
var life = new Image();
var money = new Image();

var aleks = new Image();
var dido = new Image();
var nakov = new Image();
var vlado = new Image();
var bogomil = new Image();
var georgi = new Image();

bg.src = "Images/background.jpg";
life.src = "Images/heart.png";
money.src = "Images/money.png";

aleks.src = "Images/aleks.png";
dido.src = "Images/dido.png";
nakov.src = "Images/nakov.png";
vlado.src = "Images/vlado.png";
bogomil.src = "Images/bogomil.png";
georgi.src = "Images/georgi.png";


// constructor for the animated background
function Background() {
    this.x = 0, this.y = 0, this.w = bg.width, this.h = bg.height;
	
	// renders the animated background
    this.render = function (ctx) {
        ctx.drawImage(bg, this.x-=4, 0 );
        if(this.x <= -1975){
            this.x = 0;
        }
    }
}

// holds the variables for the different images
function Images() {
    this.life = life;
    this.money = money;
    this.enemies = [aleks, dido, nakov, vlado, bogomil, georgi];
}