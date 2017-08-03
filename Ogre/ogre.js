var HP = 100;
var Gold = 0;
var numberDefeated = 0;

function updateStats()
{
    $("stats").text("HP: " + HP + "// Gold: " + Gold + " //Ogres Slain" + numberDefeated);     
}

function spawnOgre()
{
    $("#ogres").prepend("<img src = 'http://orig01.deviantart.net/39c2/f/2012/152/6/6/blue_ogre_by_supajackle-d51we45.png'> </img>")
}

function attack()
{
    if(HP > 0)
    {
        if(Math.random() * 100 > gold)
        {
            Gold = Gold + 10;
            numberDefeated++;
            $("#ogres").prepend("<p style = 'color:blue'> You won! + 10 gold. </p>");
        }
        else
        {
            Gold --;
            HP--;
            $("#ogres").prepend("<p style = 'color:red'> You lost! -1 gold. </p>");
        } 
        updateStats();
        spawnOgre();
    }
    else
    {
        //game over
        $("#orges").prepend("<p style = 'colorr:red'> GAME OVER </p>");       
    }
}
        

function setup()
{
    $("body").append("<h1> Welcome to Ogre fighter v.1.0 </h1>");
    $("body").append("<div> <h3> STATS </h3> <p id = 'stats'></p> </div>")
    $("body").append("<div id = 'ogres'> </div>")
    $("body").append("<button onclick = 'attack()'> Attack the Ogre! </button>")
    updateStats();
    spawnOgre();
    attack();
}


// set up an HTML element
$(document).ready(setup);

//add Title to HTML - requires setup

// add user stats(HP, GOLD, numberDefeated) -  requires setup
// add random ogreImage to start of body tag - requires setup
// when player clicks on 'attack' button - requires setup

//if player has HP
    //if player defeats ogre
        //add paragraph tag saying you win
        //add gold to player
        //numb of ogre deafted
    //else
    // add paragraph tag saying you lose
    // player loses gold
    //player loses HP
    //update stats
//else
    //paragraph text saying game over