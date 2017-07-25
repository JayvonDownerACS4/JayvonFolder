function setup()
{
     createCanvas(1200, 800);
     background(4,94,239);
 }

function draw()
{
    rect(30, 575, 1150, 200); //moves
    rect(30, 50, 1150, 500, 50); // battel box
    rect(90, 300, 50, 200); // pokemon 1
    rect(1075, 90, 50, 200); // pokemon 2
    rect(90, 275, 50, 20); // pokemon 1 hp
    rect(1075, 65, 50, 20); // pokemon 2 hp
    rect(70, 600, 200, 50); // move 1
    rect(70, 700, 200, 50); // move 2
    rect(900, 700, 200, 50); // move 3
    rect(900, 600, 200, 50); // move 4
    rect(900, 400, 250, 100); // text box
    rect(475, 50 , 250, 100); //turn box
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var prompt = require("prompt-sync")();
var questionOne = prompt("what is your name? ");
var questionTwo = prompt("what is your Gender? ");
var response = console.log("Hey "+ questionOne + " Lets Battle!!");

var quickAttack = 10;
var ironTail = 10;
var Tackle = 10;
var hydroCannon = 10;
var hornAttack = 10;
var incinerate = 10;
var suckerPunch = 10;

function pokemon(name, type, hp, attack, turn)
{
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.attack = attack;
    this.turn = turn;   
}
var yourPokemon = new pokemon("Pikachu", "electric", 80, ["quickAttack", quickAttack], true);
//console.log(yourPokemon); this will print out the pokefacts
var yourPokemonTwo =new pokemon("Charmeleon", "fire",90, ["Incinerate", incinerate], true);
var yourPokemonThree = new pokemon("Rattata","Normal",100,["sucker Punch", suckerPunch],true); 
var yourPokemonFour = new pokemon("Nidorino","Poison",90,["Horn Attack", hornAttack], true);

var cpuPokemon = new pokemon("Blastoise", "water", 80, ["Tackle", Tackle], false);
var cpuPokemonTwo = new pokemon("");
var cpuPokemonThree = new pokemon("");
var cpuPokemonFour = new pokemon("");
//console.log(cpuPokemon);


function pokeAttack()
{
    if(yourPokemon.turn == true)
    {
        cpuPokemon.hp = cpuPokemon.hp - yourPokemon.attack[1];
        yourPokemon.turn = false;
        cpuPokemon.turn = true;
        console.log(cpuPokemon.hp);
        console.log("You attacked the enemy"); 
    }
    else if(cpuPokemon.turn == true)
    {
        yourPokemon.hp = yourPokemon.hp - cpuPokemon.attack[1];
        yourPokemon.turn = true;
        cpuPokemon.turn = false;
        console.log(yourPokemon.hp);
        console.log("You've been attacked");
    }
 }
pokeAttack();

