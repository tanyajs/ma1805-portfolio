function setup() {
  createCanvas(2000, 2000);

}

function draw() {
  background(168, 102, 255)
 
//face
fill(92, 0, 153)
circle(598, 310, 515)

//eyes
fill(51, 0, 51)
circle(500, 200, 125);
circle(700, 200, 125)

//smaller eyes
fill(255, 255, 255)
circle(500, 180, 55)
circle(700, 180, 55)

//ears
fill(92, 0, 153)
noStroke();
circle(390, 100, 160)
circle(810, 100, 160)

//smaller ears
fill(51, 0, 51)
circle(390, 100, 90)
circle(810, 100, 90)


// mouth
fill(224, 179, 255)
ellipse(600, 450, 280, 160);

//nose
fill(64, 0, 128)
square(570, 280, 55, 20);



// Style the line
fill(0, 0 ,0)
stroke(77, 0, 102);
strokeWeight(5);






}
