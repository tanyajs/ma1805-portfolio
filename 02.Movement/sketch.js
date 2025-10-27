let i = 0

function setup() {
  createCanvas(800, 800);

}

function draw() {
  background(216, 177, 218);

  //eyes
  fill(86, 55, 92);
  circle(80, 90, 90);
  circle(30, 30, 30);

  //mouth
  fill(112, 11, 100)
  ellipse(300, i, 200, 65);

  //increment i
i = i+1;
}