function setup()
{
    createCanvas(1100, 750);
    background(51);
}
var space = "SPACE";
var invaders = "INVADERS";
var play = "PLAY";
function draw()
{    //Space text
    textSize(100);
    fill(255, 255, 255);
    text(space, 375, 100);
    textFont("Helvetica");
    
    //Invaders text
    fill(255, 0, 0);
    text(invaders, 300 ,200);

    //play rectangle
    fill(255,255,255);
    rect(400, 550, 350, 150);
    fill(255,255,255);
    text(play, 445, 650);
}