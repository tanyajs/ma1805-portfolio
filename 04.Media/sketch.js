let img;
function preload(){
  sound = loadSound('humm.wav');
}

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mouseClicked(toggleSound);
  amplitude = new p5.Amplitude();
}

function draw() {
  background(220, 150);
  textAlign(CENTER);
  text('tap to play', width/2, 20);

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
  ellipse(width/2, height/2, size, size);
}

function toggleSound(){

}
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  
}

function preload () {
    img = loadImage('Antenna.jpg', 'IMG_4818.JPG');
}

function setup() {
    createCanvas(1480, 900);
}

function draw() {
    background(230, 255, 255);
    image(img, 0, 0);
    
}

