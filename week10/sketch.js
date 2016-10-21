var numShips = 20;
var spaceships = [];

function setup() {
	createCanvas(640, 480);

    for(var i = 0; i < numShips; i++){
        spaceships.push(new Spaceship());
    }
}

function draw(){
    background("white");
    rotate(PI/2);
    for(var i = 0; i < numShips; i++){
        spaceships[i].draw();
        spaceships[i].update(); 
    }
}

function Spaceship(){
    
    this.x = random(0,width);
    this.y = random(0,height);
    this.w = random(0, 100);
    this.h = random(0,100);
    this.speed = random(1,3);
    this.size = random(10,40);
    this.r = this.h/3;
    this.v = this.w/2;
    this.windowWidth = this.size/3.33;
    this.distance = this.size/2;      
    this.shipColor = color(random(0,255),random(0,255),random(0,255));
	
    this.draw = function(){
        //body
        noStroke();
        fill(this.shipColor);
        rect(this.x, this.y, this.w, this.h);
        ellipse(this.x + this.v, this.y, this.w, this.h);

        fill("red");
        arc(this.x + this.v,this.y + this.r*3,this.w - this.v/8,this.h + this.r*4,PI,this.r-this.r);
        fill("orange");
        arc(this.x + this.v,this.y + this.r*3,this.w - this.v/2,this.h + this.r*2,PI,this.r-this.r);

         //wings
        fill("black");
        triangle(this.x, this.y + this.r*3, this.x + this.v*2, this.y + this.r*3, this.x - this.v*2, this.y + this.r*5);
        triangle(this.x, this.y + this.r*3, this.x + this.v*2, this.y + this.r*3, this.x + this.v*4, this.y + this.r*5);

        //Thrusters
        ellipse(this.x + this.v,this.y + this.r*4.5,this.w + this.v/2,this.h - this.r);
        fill("red");
        ellipse(this.x + this.v,this.y + this.r*4.5,this.w + this.v/12,this.h - this.r*1.1);
        fill("DarkRed");
        ellipse(this.x + this.v,this.y + this.r*4.5,this.w - this.v/12,this.h/1.8);

        //hull
        fill("black");
        ellipse(this.x + this.v,this.y + this.r*3,this.w - this.v/3,this.h - this.r/3);
        fill("DarkGrey")
        ellipse(this.x + this.v,this.y + this.r*3,this.w - this.v/2,this.h - this.r/2);

        fill("white");
        arc(this.x + this.v,this.y + this.r*3.5,this.w - this.v,this.h,PI,this.r-this.r);
        fill("DarkGrey")
        ellipse(this.x + this.v,this.y  + this.r*3.5,this.w/2,this.h/2);

        fill("grey");
        ellipse(this.x + this.v,this.y + this.r*3.5,this.w/3,this.h/3);
    }
    
    this.update = function(){
        if(this.y > -height*1.8) this.y -= this.speed;
        else{this.y = 500;}
     }
}

