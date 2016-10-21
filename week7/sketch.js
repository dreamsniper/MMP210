var x = 100;
var y = 100;
var w = 100;
var h = 100;
var sr = 100;
var lx = 0;
var rx = 0;
var yu = 0;
var yd = 0;

function setup() {
    createCanvas(640,480);
}

function draw(){
	var v = w/2;
    	var r = h/2;

	background(184, 236, 255);
	sunMoon(x+w,y,w,h);

	translate(width/2, height/2);

	push();
	fill(184, 236, 255);
	rect(x-v*3.5,yu-r*2.5,w+v,h);
	rect(x-v*3.5,yd+r/2,w+v,h);
	pop();

	push()
	for(var i = 0; i < 20; i++){
		rotate(frameCount/1000);
		fill("yellow");
		ellipse(100,100,20,20);
	}
	pop();
	
	push();
	sun(0,0,sr/2,h);
	cloud(lx-10,y-y,w,h);
	cloud(rx-10,y-y,w,h);
	
	if(rx > width/8){
		textStyle("bold");
		textFont("Garamond");
		textSize(30);
		text("STEVEN   TAVERAS",0-135,0+h/10);
		
		stroke(255);
		line(lx,-35,rx,-35);
		line(lx,35,rx,35);

		yu--;
		yd++;
	}
	pop();

	lx--;
	rx++;
	sr+=10;
}

var cloud = function(x,y,h,w){
    var v = w/2;
    var r = h/2;
    
    noStroke();
    fill("white");
    ellipse(x, y, w, h);
    ellipse(x-v, y, w-v/2, h-r/2);
    ellipse(x+v, y, w-v/2, h-r/2);
}

var sun = function(x,y,w,h){
    var v = w/2;
    var r = h/2;

    noStroke();
    fill(255, 170, 0);
    ellipse(x*2, y, w, h);
}

var sunMoon = function(x,y,w,h){
	var v = w/2;
    	var m = h/2;

	fill("DarkOrange");
	noStroke();
	arc(width/2, height/2.5 , w+v, h+m, PI, 0);
	fill("lightBlue");
	arc(width/2, y+m*3.8 , w+v, h+m, TWO_PI, PI);
}








