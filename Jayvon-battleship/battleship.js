function setup()
{
    createCanvas(840,650);
}
function draw()
{
    background("Grey");
    text("BATTLESHIP", 275, 100); 
    textSize(40); 
    
    line(265, 110,  530, 110);
    //Vertical lines, (the Y changes)
    //line(x1, y1, x2, y2)
    line(10, 220, 810, 220);
    line(10, 270, 810, 270);
    line(10, 320, 810, 320);
    line(10, 370, 810, 370);
    line(10, 420, 810, 420);
    line(10, 470, 810, 470);
    line(10, 520, 810, 520);
    line(10, 570, 810, 570);
    line(10, 620, 810, 620);
    
    //horizontal lines, (the X changes)
    //line(x1, y1, x2, y2)    
    line(10, 220, 10, 620);
    line(110, 220, 110, 620);
    line(210, 220, 210, 620);
    line(310, 220, 310, 620);
    line(410, 220, 410, 620);
    line(510, 220, 510, 620);
    line(610, 220, 610, 620);
    line(710, 220, 710, 620);
    line(810, 220, 810, 620);

    ellipse(65, 245, 25, 25);    


}

//  the 8x8 grid
// var grid =[
//     [0, 0, 0, 0, 0, 0, 0, 0]
//     [0, 0, 0, 0, 0, 0, 0, 0]
//     [0, 0, 0, 0, 0, 0, 0, 0]
//     [0, 0, 0, 0, 0, 0, 0, 0]
//     [0, 0, 0, 0, 0, 0, 0, 0]
//     [0, 0, 0, 0, 0, 0, 0, 0]
//     [0, 0, 0, 0, 0, 0, 0, 0]
//     [0, 0, 0, 0, 0, 0, 0, 0]]