var r,g,b;
var button;
var angle = 0;

function setup(){
    var myCanvas = createCanvas(720,360);
    myCanvas.parent("sketch")
    rectMode(CENTER);
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    
    button = createButton("Rotate");
    button.mousePressed(rotateAngle);
    button.parent("sketch")
    button.position(200,300);
}
function draw(){
    background("black");
    fill(r,g,b);
    
    push();
    translate(width/2,height/2);
    rotate(angle);
    rect(0,0,200,200);
    pop();
}
function rotateAngle(){
       angle += 0.1;
}