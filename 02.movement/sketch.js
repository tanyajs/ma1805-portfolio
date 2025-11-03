let i = 0;
let x = 1;
let y = 2
let p = 1
let t = 4
let s = 3
//the other raindrops
let c = 0
let o = 2
let u = 4
let l = 1
let j = 3
let e = 1.5
let d = 6
//sun
let z = 9


function setup() {
  createCanvas(1480, 950)

}

function draw(){
  background(255, 230, 255)

  //raindrops
  fill(204, 230, 255)
  noStroke();
  ellipse(50, i, 10, 25);
  ellipse(90, x, 10, 25);
  ellipse(120, y, 10, 25);
  ellipse(150, p, 10, 25);
  ellipse(50, t, 10, 25);
  ellipse(89, s, 10, 25);

  //raindrops on the other side
  ellipse(600, c, 10, 25)
  ellipse(400, o, 10, 25)
  ellipse(200, u, 10, 25)
  ellipse(500, l, 10, 25)
  ellipse(650, j, 10, 25)
  ellipse(350, e, 10, 25)
  ellipse(330, d, 10, 25)
  


//sun
fill(255, 255, 128) 
circle(1480, 50, z); 



// increment 1
i = i+1;
//increment 2
x = x+2;
//increment 3
y = y+3
//incremet 4
p = p+2
//increment 5
t = t+5
//increment 6
s = s+4
//the other raindrops
c = c+1
o = o+3
u = u+5
l = l+2
j = j+4
e = e+2.5
d = d+7
//sun
z = z+10






}