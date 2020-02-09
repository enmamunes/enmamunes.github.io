//hair ponytail
fill(99, 83, 50);
ellipse(78,85,70,120);

//face
fill(242, 220, 181);
noStroke ();
ellipse(78,65,60,70);

//blush
noStroke();
fill(250, 203, 203);
ellipse(60,67,20,10);
ellipse(90,67,20,10);

//freckles
stroke(214, 196, 163);
strokeWeight(2);
point(66,67);
point(56,70);
point(86,65);
point(92,70);
point(98,65);
point(60,65);

//hair over face
noStroke();
fill(99, 83, 50);
triangle(48,48,108,48,80,25);

//left eyebrow
strokeWeight(1);
stroke(99, 83, 50);
arc(65,50,10,4,180,360);

//right eyebrow
stroke(99, 83, 50);
arc(90,50,10,4,180,360);

//left ear
noStroke();
fill(242, 220, 181);
arc(50,65,15,25,90,270);

//right ear
fill(242, 220, 181);
arc(105,65,15,25,270,450);

//mouth
fill(255, 255, 255);
arc(78,75,30,25,1,180);

//lips
stroke(247, 158, 158);
arc(78,75,30,25,1,180);
line(63,75,92,75);

//nose
stroke(217, 207, 161);
fill(232, 209, 169);
arc(75,65,10,8,270,450);

//left eye
noStroke();
fill(255, 255, 255);
ellipse(65,55,15,10);

//right eye
fill(255, 255, 255);
ellipse(90,55,15,10);

//left eye color
fill(156, 177, 240);
ellipse(65,56,8,8);

//left pupil
fill(0, 0, 0);
ellipse(65,56,5,5);

//right eye color
fill (156, 177, 240);
ellipse(90,56,8,8);

//right pupil
fill(0, 0, 0);
ellipse(90,56,5,5);

//hat
noStroke();
fill(224, 120, 240);
arc(78,44,53,36,180,360);

//hat symbol
fill(45, 240, 159);
ellipse(78,35,6,6);

//sweater
fill(222, 155, 245);
noStroke();
quad(105,100,50,100,40,140,115,140);

//collar
fill(222, 155, 245);
stroke(197, 86, 237);
strokeWeight(2);
rect(47,90,60,15);

//initials
fill(131, 22, 158);
textSize(25);
text("EM",58,130);
