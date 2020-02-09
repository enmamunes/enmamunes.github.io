var frogX = 100;
var frogY = 350;

var bunnyX = -100;
var bunnyY = 0;

var bitmojiX = 180;
var bitmojiY = 510;

var bunnySpeed = random(1,5);
var frogSpeed = random(1,5);
var bitmojiSpeed = random(1,5);

draw= function() {

//bitmoji
background(255, 255, 255);
fill(99, 83, 50);//hair ponytail
ellipse(bitmojiX-122,bitmojiY-115,70,120);

fill(242, 220, 181);//face
noStroke ();
ellipse(bitmojiX-122,bitmojiY-135,60,70);

noStroke();//blush
fill(250, 203, 203);
ellipse(bitmojiX-140,bitmojiY-133,20,10);
ellipse(bitmojiX-110,bitmojiY-133,20,10);

stroke(214, 196, 163);//freckles
strokeWeight(2);
point(bitmojiX-134,bitmojiY-133);
point(bitmojiX-144,bitmojiY-130);
point(bitmojiX-114,bitmojiY-135);
point(bitmojiX-108,bitmojiY-130);
point(bitmojiX-102,bitmojiY-135);
point(bitmojiX-140,bitmojiY-135);

noStroke();//hair over face
fill(99, 83, 50);
triangle(bitmojiX-152,bitmojiY-152,bitmojiX-92,bitmojiY-152,bitmojiX-120,bitmojiY-175);

strokeWeight(1);//left eyebrow
stroke(99, 83, 50);
arc(bitmojiX-135,bitmojiY-150,10,4,180,360);

stroke(99, 83, 50);//right eyebrow
arc(bitmojiX-110,bitmojiY-150,10,4,180,360);

noStroke();//left ear
fill(242, 220, 181);
arc(bitmojiX-150,bitmojiY-135,15,25,90,270);

fill(242, 220, 181);//right ear
arc(bitmojiX-95,bitmojiY-135,15,25,270,450);

fill(255, 255, 255);//mouth
arc(bitmojiX-122,bitmojiY-125,30,25,1,180);

stroke(247, 158, 158);//lips
arc(bitmojiX-122,bitmojiY-125,30,25,1,180);
line(bitmojiX-137,bitmojiY-125,bitmojiX-108,bitmojiY-125);

stroke(217, 207, 161);//nose
fill(232, 209, 169);
arc(bitmojiX-125,bitmojiY-135,10,8,270,450);

noStroke();//left eye
fill(255, 255, 255);
ellipse(bitmojiX-135,bitmojiY-144,15,10);

fill(255, 255, 255);//right eye
ellipse(bitmojiX-110,bitmojiY-144,15,10);

fill(156, 177, 240);//left eye color
ellipse(bitmojiX-135,bitmojiY-144,8,8);

fill(0, 0, 0);//left pupil
ellipse(bitmojiX-135,bitmojiY-144,5,5);

fill (156, 177, 240);//right eye color
ellipse(bitmojiX-110,bitmojiY-144,8,8);

fill(0, 0, 0);//right pupil
ellipse(bitmojiX-110,bitmojiY-144,5,5);

noStroke();//hat
fill(224, 120, 240);
arc(bitmojiX-122,bitmojiY-156,53,36,180,360);

fill(45, 240, 159);//hat symbol
ellipse(bitmojiX-122,bitmojiY-165,6,6);

fill(222, 155, 245);//sweater
noStroke();
quad(bitmojiX-95,bitmojiY-100,bitmojiX-150,bitmojiY-100,bitmojiX-160,bitmojiY-60,bitmojiX-85,bitmojiY-60);

fill(222, 155, 245);//collar
stroke(197, 86, 237);
strokeWeight(2);
rect(bitmojiX-153,bitmojiY-110,60,15);

fill(131, 22, 158);//initials
textSize(25);
text("EM",bitmojiX-142,bitmojiY-70);

//frog
scale(0.8);
noStroke();
fill(30, 204, 91); // a nice froggy green!

ellipse(frogX, frogY, 200, 100); // face
ellipse(frogX - 50, frogY - 50, 40, 40); // left eye socket
ellipse(frogX + 50, frogY - 50, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(frogX - 50, frogY - 50, 30, 30); // left eyeball
ellipse(frogX + 50, frogY - 50, 30, 30); // right eyeball

fill(0, 0, 0);//pupils
rect(frogX-60,frogY-55,10,10);//left pupil
rect(frogX+50,frogY-55,10,10);//right pupil

fill(0, 0, 0);//mouth
ellipse(frogX,frogY,150,75);

//bunny
var eyeSize= 15;
var teethHeight= 15;

fill(255, 255, 255);
stroke(0, 0, 0);
ellipse(bunnyX+150, bunnyY+70, 60, 120);  // left ear
ellipse(bunnyX+240, bunnyY+70, 60, 120);  // right ear

ellipse(bunnyX+200, bunnyY+170, 150, 150);    // face

fill(0, 0, 0);              //eyes
ellipse(bunnyX+170, bunnyY+150, eyeSize, eyeSize);  // left eye
ellipse(bunnyX+230, bunnyY+150, eyeSize, eyeSize);  // right eye

line(bunnyX+150, bunnyY+200,bunnyX+ 250, bunnyY+200);   // mouth

noFill();
rect(bunnyX+185,bunnyY+ 200, 15, teethHeight); // left tooth
rect(bunnyX+200,bunnyY+ 200, 15, teethHeight); // right tooth
    
    bunnyX = bunnyX+bunnySpeed;
    frogX = frogX+frogSpeed;
    bitmojiX = bitmojiX+bitmojiSpeed;
    
};