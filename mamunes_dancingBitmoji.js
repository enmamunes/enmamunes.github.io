var bitmojiX = random(200,400);
var bitmojiY = random(200,400);

//hair ponytail
fill(99, 83, 50);
ellipse(bitmojiX-122,bitmojiY-115,70,120);

//face
fill(242, 220, 181);
noStroke ();
ellipse(bitmojiX-122,bitmojiY-135,60,70);

//blush
noStroke();
fill(250, 203, 203);
ellipse(bitmojiX-140,bitmojiY-133,20,10);
ellipse(bitmojiX-110,bitmojiY-133,20,10);

//freckles
stroke(214, 196, 163);
strokeWeight(2);
point(bitmojiX-134,bitmojiY-133);
point(bitmojiX-144,bitmojiY-130);
point(bitmojiX-114,bitmojiY-135);
point(bitmojiX-108,bitmojiY-130);
point(bitmojiX-102,bitmojiY-135);
point(bitmojiX-140,bitmojiY-135);

//hair over face
noStroke();
fill(99, 83, 50);
triangle(bitmojiX-152,bitmojiY-152,bitmojiX-92,bitmojiY-152,bitmojiX-120,bitmojiY-175);

//left eyebrow
strokeWeight(1);
stroke(99, 83, 50);
arc(bitmojiX-135,bitmojiY-150,10,4,180,360);

//right eyebrow
stroke(99, 83, 50);
arc(bitmojiX-110,bitmojiY-150,10,4,180,360);

//left ear
noStroke();
fill(242, 220, 181);
arc(bitmojiX-150,bitmojiY-135,15,25,90,270);

//right ear
fill(242, 220, 181);
arc(bitmojiX-95,bitmojiY-135,15,25,270,450);

//mouth
fill(255, 255, 255);
arc(bitmojiX-122,bitmojiY-125,30,25,1,180);

//lips
stroke(247, 158, 158);
arc(bitmojiX-122,bitmojiY-125,30,25,1,180);
line(bitmojiX-137,bitmojiY-125,bitmojiX-108,bitmojiY-125);

//nose
stroke(217, 207, 161);
fill(232, 209, 169);
arc(bitmojiX-125,bitmojiY-135,10,8,270,450);

//left eye
noStroke();
fill(255, 255, 255);
ellipse(bitmojiX-135,bitmojiY-144,15,10);

//right eye
fill(255, 255, 255);
ellipse(bitmojiX-110,bitmojiY-144,15,10);

//left eye color
fill(156, 177, 240);
ellipse(bitmojiX-135,bitmojiY-144,8,8);

//left pupil
fill(0, 0, 0);
ellipse(bitmojiX-135,bitmojiY-144,5,5);

//right eye color
fill (156, 177, 240);
ellipse(bitmojiX-110,bitmojiY-144,8,8);

//right pupil
fill(0, 0, 0);
ellipse(bitmojiX-110,bitmojiY-144,5,5);

//hat
noStroke();
fill(224, 120, 240);
arc(bitmojiX-122,bitmojiY-156,53,36,180,360);

//hat symbol
fill(45, 240, 159);
ellipse(bitmojiX-122,bitmojiY-165,6,6);

//sweater
fill(222, 155, 245);
noStroke();
quad(bitmojiX-95,bitmojiY-100,bitmojiX-150,bitmojiY-100,bitmojiX-160,bitmojiY-60,bitmojiX-85,bitmojiY-60);

//collar
fill(222, 155, 245);
stroke(197, 86, 237);
strokeWeight(2);
rect(bitmojiX-153,bitmojiY-110,60,15);

//initials
fill(131, 22, 158);
textSize(25);
text("EM",bitmojiX-142,bitmojiY-70);
