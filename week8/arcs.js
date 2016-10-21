function setup(){
    createCanvas(640,640);
    background("white");
    
    noStroke();
    
    var rows = 12;
    var columns = 12;
    
    var w = width/columns;
    var h = height/rows;
    
    for(var x = 0; x < width; x+=w){
        for(var y = 0; y < height; y += h){
            
            var rn = Math.round(random(0,1));
            
            /*if(rn == 1){
                fill("green");
                rect(x+w/2, y+h/2,w,h);

                fill("blue");
                ellipse(x + w/2, y + h/2 ,w, h);
            }*/
            
            fill("blue");
            if(rn == 1){
                arc(x, y, w*2, h*2,0,HALF_PI);
            } else if(rn ==2){
                arc(x+w, y, w*2, h*2,HALF_PI, PI);
            } else if(rn==3){
                 arc(x, y+h, w*2, h*2,PI+HALF_PI,0);
            } else{
                arc(x*2, y, w, h,PI,HALF_PI);
            }
        }
            
    }
}