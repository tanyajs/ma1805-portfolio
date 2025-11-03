let theText = ["hello", "there", "hi", "hiya", "good evening", "afternoon", "morning"];
let word = theText[0];
let i = 0 

function setup () {
    createCanvas(1490, 1000);
}
function draw() {
    background(230, 255, 230);
    frameRate(6);

    //text display
    textSize(30);
    text(word, random(1000), height/2);

    //change value of word 
    word = theText[i];
    i=i+1;
    if(i>theText.length){
        i=0;
    }
    console.log(i)
}



