function setup(){
    	createCanvas(640,480);
}
 function draw(){
	background(0,0,0);
	
	var col = 0;
	var red = color(frameCount,0,col);
	var blue = color(frameCount,64, frameCount);
	var green = color(frameCount,255,frameCount);
	var purple = color(128, frameCount, frameCount);

	stroke("yellow");
	strokeWeight(1);
	ellipse

	stroke("black");
	strokeWeight(2);
	
	line(width/2,0,width/2, height);

	line(0, height/2, width, height/2);

	if(mouseX <= width/2 && mouseY <= height/2 && mouseX >= 0 && mouseY >=0){
		fill(red);
		rect(0, 0, width/2, height/2);
	} else if(mouseX >= width/2 && mouseY <= height/2 && mouseX <= width && mouseY >=0){
		fill(blue);
		rect(width/2, 0, width/2, height/2);
	} else if(mouseY >= height/2 && mouseX <= width/2 && mouseY <= height && mouseX <= height) {
		fill(green);
		rect(0, height/2, width/2, height/2);
	} else if(mouseY >= height/2 && mouseX >= height/2 && mouseX <= width && mouseY <= height) {
		fill(purple);
		rect(width/2, height/2, width/2, height/2);
	}
}