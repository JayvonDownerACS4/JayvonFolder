function setUp()
{
    createCanvas(900,900);
    background(900);
    frameRate(100);
}

function draw()
{
    line(mouseX, mouseY, pmouseX, pmouseY);
    print(pmouse + "->" + mouseX);
}

function mousePressed()
{
    var value = 0;
    function draw()
    {
        fill(value);
        line(mouseX, mouseY, pmouseX, pmouseY);
        if(value == 0;)
        {
            value = 255
        }
        else()
        {
            value = 0;
        }
    }
}
while(mousePressed == true)
{
    draw();
}

    









var value = 0;
function draw()
{
    fill(value);
    line(mouseX, mouseY, pmouseX, pmouseY);
    value = value + 5;
    if(value > 255)
        {
            value = 0;
        }
}