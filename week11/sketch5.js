var r=255, g=255, b=255;
var angle=0;
var x,y,w,h;

function setup(){
    createCanvas(720,360);
    rectMode(CENTER);
}
function draw(){
    background("black");
    fill(r,g,b);
    
    x= 60;
    y = 20;
    w = 100;
    h = 20;
    
    rect(x,y,w,h);
    
    push();
    translate(width/2,height/2);
    rotate(angle);
    rect(0,0,200,200);
    pop();
}
function mousePressed(){
    if(mouseX > x-w/2 && mouseX< x+w/2 && mouseY-h/2 && mouseY + h/2){
        
       angle += 0.1;
    }
}