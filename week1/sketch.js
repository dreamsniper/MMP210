function setup() {
    createCanvas(420, 480)
}

function draw() {
smooth();



//background
noStroke();
background(29, 40, 115);
fill(36, 49, 138);
ellipse(73, 69, 450, 450);
fill(44, 60, 163);
ellipse(54, 39, 350, 350);
fill(49, 68, 189);
ellipse(38, 35, 250, 250);
fill(58, 80, 207);
ellipse(37, 42, 150, 150);
      
//moon and fill
fill(165, 244, 250);
ellipse(41, 49, 75, 75);
fill(225, 244, 250);
ellipse(26, 36, 20, 20);
ellipse(25, 59, 10, 10);
ellipse(42, 58, 20, 20);
ellipse(47, 33, 10, 10);

//small stars
ellipse(6,25,5,5);
ellipse(3,86,3,3);
ellipse(73,12,2,2);
ellipse(12,8,5,5);
ellipse(45,128,5,5);
ellipse(55,128,2,2);
ellipse(45,118,3,3);
ellipse(12,167,4,4);
ellipse(51,242,5,5);
ellipse(23,177,3,3);
ellipse(330,79,5,5);
ellipse(332,88,3,3);
ellipse(374,90,4,4);
ellipse(55,336,5,5);
ellipse(315,33,3,3);
ellipse(322,25,2,2);
ellipse(386,273,5,5);
ellipse(386,128,5,5);
ellipse(379,128,2,2);
ellipse(292,251,3,3);
ellipse(318,167,4,4);
ellipse(293,262,5,5);
ellipse(285,317,3,3);
ellipse(392,100,5,5);
ellipse(293,327,3,3);
ellipse(388,20,4,4);
 
//shoulders
stroke(0, 0, 0);
fill(97, 97, 97);
rect(-16,354, 440,188, 200);
noStroke();
fill(66, 63, 63);
rect(-16,367, 440,398, 146);
stroke(0, 0, 0);
rect(148, 212, 134,185, 30);

//neck
fill(227, 161, 102);
rect(148, 196, 134,185, 30);
 
//neck shadow
fill(163, 99, 2);
noStroke();
beginShape();
curveVertex(267, 266);
curveVertex(151, 325);
curveVertex(245, 272);
curveVertex(251, 173);
curveVertex(268, 308);
curveVertex(166, 367);
curveVertex(113, 206);
endShape();
stroke(0, 0, 0);

//head
fill(227, 161, 102);
beginShape();
curveVertex(100,  70);
curveVertex(100, 70);
curveVertex(62,  130);
curveVertex(71,  184);
curveVertex(66,  244);
curveVertex(120, 340);
curveVertex(249, 272);
curveVertex(259, 228);
curveVertex(283, 216);
curveVertex(283, 159);
curveVertex(245, 157);
curveVertex(228, 216);
curveVertex(226, 144);
curveVertex(196, 142);
curveVertex(197,83);
curveVertex(101,70);
curveVertex(5,5);
endShape();

//stubble
noStroke();
fill(163, 134, 118);
beginShape();
curveVertex(64,  279);
curveVertex(104,  255);
curveVertex(66,  244);
curveVertex(120, 340);
curveVertex(249, 272);
curveVertex(250, 228);
curveVertex(228, 212);
curveVertex(259, 228);
endShape();

//face shadow
noStroke();
fill(163, 99, 2);
beginShape();
curveVertex(64,83);
curveVertex(112,298);
curveVertex(146,298);
curveVertex(141,253);
endShape();

//nose shadow
beginShape();
curveVertex(53,92);
curveVertex(115,242);
curveVertex(84,243);
curveVertex(142,210);
endShape();

//ear shadow
beginShape();
vertex(237,265);
vertex(273,215);
curveVertex(266,167);
curveVertex(243,189);
curveVertex(264,217);
curveVertex(251,281);
endShape();
stroke(0, 0, 0);

//hair
fill(0, 0, 0);
beginShape();
curveVertex(249, 272);
curveVertex(259, 228);
curveVertex(283, 216);
curveVertex(283, 159);
curveVertex(245, 157);
curveVertex(228, 216);
curveVertex(226, 144);
curveVertex(196, 141);
curveVertex(197,83);
curveVertex(101,70);
curveVertex(78,19);
curveVertex(118,11);
curveVertex(150,8);
curveVertex(293,62);
curveVertex(307,199);
curveVertex(283,263);
curveVertex(286,270);
endShape();

fill(0, 0, 0);
beginShape();
curveVertex(120, 80);
curveVertex(85,49);
curveVertex(89, 80);
curveVertex(102, 65);
curveVertex(102, 43);
curveVertex(53, 8);
endShape();

//eyes
fill(255, 255, 255);
beginShape();
curveVertex(124,101);
curveVertex(175, 162);
curveVertex(151, 184);
curveVertex(128, 169);
curveVertex(175, 162);
curveVertex(284, 183);
endShape();

beginShape();
curveVertex(86,88);
curveVertex(99, 167);
curveVertex(83, 177);
curveVertex(70, 160);
curveVertex(98, 167);
curveVertex(235, 233);
endShape();

//iris
ellipseMode(RADIUS);
fill(94, 68, 3);
ellipse(85,170,7,8);
ellipse(152,173,11,11);

//cornea
fill(31, 22, 0);
ellipseMode(CENTER);
ellipse(85,170,7,7);
ellipse(151,173,12,12);

//nose
noFill();
beginShape();
curveVertex(348, 258);
curveVertex(95, 250);
curveVertex(105, 188);
curveVertex(22, 153);
endShape();

//mouth
fill(255, 255, 255);
stroke(59, 30, 0);

beginShape();
vertex(87,259);
bezierVertex(95, 278, 109, 293, 135, 285);
bezierVertex(207, 236, 116, 274, 87,259);
endShape();

//teeth
stroke(0, 0, 0);
line(93,271,92,260);
line(102,281,101,263);
line(115,286,115,263);
line(128,287,129,261);
line(143,280,144,259);
line(157,267,157,258);

//nostril
strokeWeight(3);
point(110, 245);

//eyebrows
strokeWeight(7);
noFill();
beginShape();
vertex(179, 150);
bezierVertex(178, 145, 169, 135, 127, 145);
endShape();

noFill();
beginShape();
vertex(94, 146);
bezierVertex(105, 146, 61, 133, 62, 137);
endShape();

//text
noStroke();
fill(255,255,255)
textFont("Times New Roman");
textSize(35);
text("theDREAMSNIPER",60,425,100,300);
;}