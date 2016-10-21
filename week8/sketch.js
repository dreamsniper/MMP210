function setup(){
    createCanvas(640,640);
	background("orange");

    var rows = 20;
   	var columns = 20;
    var w = width/columns;
    var h = height/rows;

    for(var x = 0; x < width; x += w){
        for(var y = 0; y < height+h/2; y += h){
    
            var r = random(0,255);
            var g = random(0,255);
            var b = random(0,255);
		 var a = random(0, 160);
            var rn = random(-10,10);
            var rx = random(0, 20);
	       var rndm = Math.round(random(0,1));
			
			if(y < height/4){
				if(x>width/3 && x<width/1.5){
					
					stroke("yellow");
					fill(255,255,b);
					rect(x,y,w-rn,h-rn);
					ellipseMode(CENTER);
					fill(255,rx,0);
					ellipse(x+w/2,y+h/2,w/2+rn,h/2);
					fill(255,g,rx);
					ellipse(x+w/2,y+h/2,w/4,h/4+rn);
				}else{
					stroke(255,255,b);
					fill(255,a,0);
					rect(x,y,w,h);
					ellipseMode(CENTER);
					fill(255,a,0);
					ellipse(x+w/2,y+h/2,w/2,h/2+rn);
					fill(255,a,rx);
					ellipse(x+w/2,y+h/2,w/4+rn,h/4);
				}
			}else if(y >= height/4 && y < height/2){
				stroke("brown");
				fill(r,g,0);
				if(rndm == 1){
                		arc(x+w/2,y+h,w/2,h+y,PI,0);
            		} else if(rndm ==2){
                		arc(x+w, y, w*2, h,HALF_PI, PI);
            		} else if(rndm ==3){
                 		arc(x, y+h*2, w*2, h*2,HALF_PI,0);
            		} else{
                		arc(x+w/2,y+h,w,h+y/2,PI,0);
            		}
			}else if(y >= height/2 && y < height/1.5){
				push();
				fill(r,g,255);
				stroke("lightBlue");
				rect(x,y,w+rx,h);
				fill(r*x,g,a);
				rect(x,y,w/4+rn,h/4-rn);
				rectMode(CENTER);
                fill(r,g,255);
				ellipse(x,y,w+rn,h/4);
				ellipse(x,y,w/8,h/8+rn);
				ellipse(x,y+h/2,w/4,h/4);
				ellipse(x,y+h/2,w/8,h/8);
				pop();
			}else if(y > height/2 && y < height){
				stroke("brown");
				fill(0,g,0);
				rect(x,y,w-rn,h+rn);
				fill(r,g,b);
				rect(x+w/2,y+h/4,rx,rx);
			}
			
		}
    }
}
