var x = 300;
var y = 300;
var w = 100;
var h = 150;

function setup() {
	createCanvas(640, 480);
}

function draw(){
    background(frameCount/4,191,255);
    
       
    push();
    rotate(PI/2);
    spaceShip(x-100,y,100,150);
    spaceShip(400,y*2, 50,100);
    pop();
    
    spaceShip(x,y*3,100,150);
    
    push();
    rotate(TWO_PI)
    spaceShip(200,y+h*2, 50,100);
    pop();
    
    push();
    
    translate(width/4,height/4);
    rotate(PI/10);
    
    spaceShip(x+w,y+h*3,100,150);
    spaceShip(300,y, 50,100);
    pop();
    
    y--;
    if(y < -height*2){
        y = 400;
    }
    y-=5;
}

var spaceShip = function(x,y,w,h){
    
    var r = h/3
    var v = w/2
    var q = random(0,255);
    var g = random(0,255);
    var b = random(0,255);
	
	//body
    noStroke();
	fill(q,g,b);
	rect(x, y, w, h);
	ellipse(x+v, y, w, h);
    
    fill("red")
    arc(x+v,y+r*3,w-v/8,h+r*4,PI,r-r);
    fill("orange");
    arc(x+v,y+r*3,w-v/2,h+r*2,PI,r-r);
    
     //wings
    fill("black");
    triangle(x, y+r*3, x+v*2, y+r*3, x-v*2, y+r*5);
    triangle(x, y+r*3, x+v*2, y+r*3, x+v*4, y+r*5);
    
    //Thrusters
    ellipse(x+v,y+r*4.5,w+v/2,h-r);
    fill("red");
    ellipse(x+v,y+r*4.5,w+v/12,h-r*1.1);
    fill("DarkRed");
    ellipse(x+v,y+r*4.5,w-v/12,h/1.8);
    
    //hull
    fill("black")
    ellipse(x+v,y+r*3,w-v/3,h-r/3);
    fill("DarkGrey")
    ellipse(x+v,y+r*3,w-v/2,h-r/2);
    
    fill("white")
    arc(x+v,y+r*3.5,w-v,h,PI,r-r);
    fill("DarkGrey")
    ellipse(x+v,y+r*3.5,w/2,h/2);
    
    fill("grey")
    ellipse(x+v,y+r*3.5,w/3,h/3);
    
}