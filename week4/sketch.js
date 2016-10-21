function setup(){
    createCanvas(640,700);
    background("SaddleBrown");
    
    var x = 0;
    var y = 0;
    var xinc = 50;
    var yinc = 90;
    var ratio = 3;
    var increment = width/ratio;
    var yincrement = height/ratio;
    var spacing = 70;
    var brickSpace = 40;
    
    //horizontal lines
    for(var i = 10; i < height; i+= brickSpace){
        stroke("maroon");
        line(0, i, width, i);
    }

    //vertical lines
    for(var a = 10; a < width; a+= brickSpace){
        line(a ,x, a, y+10);
        line(a + 20, y + 50, a + 20, y+10);
    	}

	//create windows
	for(var i = 0; i < ratio * ratio; i++) {
		//window pane frame
		fill("Chocolate");
		noStroke();
		rect(xinc, yinc, 100,170);

		//windows exterior outline
		noFill();
		stroke("SaddleBrown");
		strokeWeight(6);
		rect(xinc, yinc, 100, 170);

		//Interior panes
		fill("Cornsilk");
		noStroke();
		rect(xinc + 7, yinc + 7, 40, 50);
		rect(xinc + 7, yinc + 60, 40, 50);
		rect(xinc + 7, yinc + 113, 40, 50);
		rect(xinc + 52, yinc + 7, 40, 50);
		rect(xinc + 52, yinc + 60, 40, 50);
		rect(xinc + 52, yinc + 113, 40, 50);

		//archway and bottom and top pane
		stroke("DimGrey");
		strokeWeight(2);
		fill("grey");
		arc(xinc + 50 , yinc - 25 , 150, 100, PI, 0);
		arc(xinc + 50, yinc - 25 , 110, 75, PI, 0);
		arc(xinc + 50, yinc - 25 , 75, 50, PI, 0);
		
        rect(xinc - 23, yinc - 25, 146, 20);
		rect(xinc - 10, yinc + 169, 120, 20);

		//side panes
		stroke("DimGrey");
		fill("DarkGrey");
		rect(xinc - 30, yinc - 24, 20, 210);
		rect(xinc + 109, yinc - 24, 20, 210);
		strokeWeight(1);
		rect(xinc - 32, yinc + 180, 163, 40);

		//inner shadow
		noFill();
		stroke("DimGrey");
		strokeWeight(6);
		rect(xinc - 6, yinc - 5, 111,175);
		noStroke();
		fill("Grey");
		rect(xinc - 22, yinc + 190, 140, 20);
		fill("DimGrey");
		rect(xinc - 20, yinc + 192, 136, 16);

		xinc += increment;
        if (xinc > width) {
            xinc = 50;
            yinc += yincrement;
        }
	}
}
