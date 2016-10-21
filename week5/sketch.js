function setup() {
    createCanvas(640, 480);
    background("DarkGray");

    drawWindow(100,100,100,150); 
    drawWindow(25,25,25,50);
    drawWindow(200,200,100,150);
    drawWindow(400,200,300,350);

}

var drawWindow = function(x,y,w,h) {
    
        var r = h/3;
        var v = w/2;
    
        //window pane frame
		fill("Chocolate");
		noStroke();
		rect(x, y, w, h + r/2);
    
        //windows exterior outline
		noFill();
		stroke("SaddleBrown");
		strokeWeight(r/8);
		rect(x, y, w, h + height/65);
        
        //Interior panes
		fill("Cornsilk");
		noStroke();
		rect(x + w/11,  y + h/15,  w/3, h/4);
		rect(x + w/11,  y + h/2.6,   w/3, h/4);
		rect(x + w/11,  y + h/1.4, w/3, h/4);
		rect(x + w/1.8, y + h/15,  w/3, h/4);
		rect(x + w/1.8, y + h/2.6,   w/3, h/4);
		rect(x + w/1.8, y + h/1.4, w/3, h/4);
    
        //archway and bottom and top pane
		stroke("DimGrey");
		strokeWeight(r/40);
		fill("grey");
		arc(x + w/2.1, y - h/6 , w+v, h-r, PI, 0);
		arc(x + w/2.1, y - h/6 , w,   h/2, PI, 0);
		arc(x + w/2.1, y - h/6 , w-v, h/3, PI, 0);
    
        	rect(x - w/3.6, y - h/6,   w + v, h/6);
		rect(x - w/3.6, y + h+r/5, w + v, h/6);
    
        //inner shadow
		noFill();
		stroke("DimGrey");
		strokeWeight(r/7);
		rect(x - w/20, y - h/20, w + v/6, h+r/2);
		noStroke();
		fill("Grey");
		rect(x - w/4, y+r+h/1.1, w + v/1.1, h/7);
		fill("DimGrey");
		rect(x - w/4, y+r+h/1.1, w + v/1.1, h/9);


        //side panes bottom pane shadow
		strokeWeight(r/40);
		stroke("DimGrey");
		fill("DarkGrey");
		rect(x - w/3.6,  y - h/5.8, w/5, h+r);
		rect(x + w*1.04, y - h/5.8, w/5, h+r);
		strokeWeight(r/25);
		rect(x - w/3, y+r+h/1.2, w+v/.8, h/4);

		noStroke();
		fill("Grey");
		rect(x - w/4, y+r+h/1.1, w + v/1.1, h/7);
		fill("DimGrey");
		rect(x - w/4, y+r+h/1.1, w + v/1.1, h/9);
}