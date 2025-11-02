let img;

function preload(){
    img = loadImage("Antenna.jpg");
}

function setup() {
    createCanva(windowWidth, windowHeight);
}

function draw() {
    background(220)
    Image(img, 0, 0, windowwidth, windowHeight)
}