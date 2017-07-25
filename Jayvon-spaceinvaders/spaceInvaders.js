
function setup()
{
   createCanvas(1100, 750);//(1100, 750)
   background(51);
}
//The home screen text
var space = "SPACE";
var invaders = "INVADERS";
var play = "PLAY";

//shooter position
var shooterXPos = 500
var shooterYPOS = 690
var xbullet = shooterXPos
var ybullet = shooterYPOS

//The alien variables
var x = 90;
var y = 100;
var xregulate = 10;
var yregulate = 25;
var xTwo = 165;
var xThree = 230;
var xFour = 295;
var xFive = 360;
var xSix = 415;

//unimportant joke
var twoDGirls = 3;
var threeDGIrls = 2;

function Bullet()
{
    this.x = shooterXPos + 65
    this.y = 690
    this.draw = function()
    {
        fill(0, 255, 0)
        stroke("black")
        rect(this.x, this.y, 5, 10)
    }
    this.move = function()
    {
    this.y = this.y - 10
    }
}

bullet = new Bullet()
var bulletArray = [bullet]

var bullet;

function draw()
{ 
  //Space text
   textSize(100);
   fill(255, 255, 255);
   text(space, 375, 100);
   textFont("Helvetica");
   //Invaders text
   fill(255, 0, 0);
   text(invaders, 300 ,200);
   //play rectangle
   //rectangle (x1,y1,x2,y2)
   fill(255,255,255);
   rect(400, 550, 350, 150);
   fill(0,0,0);
   text(play, 445, 650);

   if(mouseIsPressed)
   {
       if(mouseButton == RIGHT)
       {
           var randomRed = Math.round(Math.random()*255);
           var randomBlue = Math.round(Math.random()*255)
           var randomGreen = Math.round(Math.random()*255)
           createCanvas(1100, 750)
           background(randomRed, randomBlue, randomGreen)
       }
       if(mouseButton == LEFT)
       {   
            //The ship code 
            clear();
            background(8)
            fill(0, 255, 0)
            rect(shooterXPos, shooterYPOS, 130, 20)
            fill(0, 255, 0)
            noStroke()
            fill(0, 255, 0)
            rect(150, 550, 110, 30)
            rect(380, 550, 110, 30)
            rect(620, 550, 110, 30)
            rect(860, 550, 110, 30)

            if (keyIsDown(RIGHT_ARROW))
            shooterXPos += 10
            
            if (keyIsDown(LEFT_ARROW))
            shooterXPos -= 10
            
            if (keyIsDown(32))
            {
                bulletArray.push(new Bullet())
                console.log(bulletArray)
            }
            for (i=0; i<bulletArray.length; i++)
            {
                console.log(i)
                bulletArray[i].move()
                bulletArray[i].draw()
            }  
            //alien movement
            x = xregulate + x
            if(x < 50 || x > 695)
            {
                y = y + yregulate;
                xregulate = -xregulate;
                if(y >= 700)
                {
                    y = 700;
                    console.log("Game Over!")
                }  
            }
            fill(255,255,255);
            ellipse(xTwo, y, 55,55)
            xTwo = xregulate + xTwo;

            ellipse(xThree, y, 55,55)
            xThree = xregulate + xThree;
    
            ellipse(xFour, y, 55,55)
            xFour = xregulate + xFour;

            ellipse(xFive, y, 55,55)
            xFive = xregulate + xFive;      
        }     
    }
    if(twoDGirls > threeDGIrls)
    {
        return true;
        console.log("2D is Better than 3D girls")
    }

}
