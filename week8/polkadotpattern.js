function setup(){
    createCanvas(640,640);
    background("white");
    
    noStroke();
    fill("blue");
    
    var rows = 12;
    var columns = 12;
    var w = width/columns;
    var h = height/rows;
    
    for(var x = 0; x < width; x+=w){
        for(var y = 0; y<height; y += h){

		var r = random(0,255);
		var g = random(0,255);
		var b = random(0,255);
            
            if (x > w*3 && x < w*7 && y > h*3 && y < h*7) {
	           fill(r * 10, g/10, b * 10);
            } else {
	           fill(r, g, b);
            }
            
            //var rs = random(-5, 5);
            //var rx = random(-w/2,w/2);
            ellipse(x + w/2, y + h/2 ,w/2, h/2);
        }
    }
}