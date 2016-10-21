var numShips = 20;
var x = [];
var y = [];
var speed = [];
var size = [];
var shipColor = [];

function setup() {
	createCanvas(640, 480);
    
      for(var i = 0; i < numShips; i++){
        x[i] = random(0,width/4);
        y[i] = random(0,height);
        speed[i] = random(1,3);
        size[i] = random(1,40);
        
        var r = random(0,255);
        var g = random(0,255);
        var b = random(0,255);
          
        shipColor[i] = color(r,g,b);
    }
}

function draw(){
    background("white");
    for(var i = 0; i < numShips; i++){
        
        fill(shipColor[i]);
        spaceShip(x[i], y[i],size[i],size[i]);
        if(x[i]<width){ 
            x[i]+= speed[i];
        }else {x[i]=0;}
    }
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