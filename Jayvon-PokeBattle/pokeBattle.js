// function setup()
// {
//     createCanvas(600, 600);
// }
// var prompt = require("prompt-sync")();
// var questionOne = prompt("what is your name?");
// var questionTwo = prompt("what is your Gender?");
// var response = console.log("Hey "+ questionOne + " Lets Battle!!");

var quickAttack = 10;
var ironTail = 10;
var Tackle = 10;
var hydroCannon = 10;

function pokemon(name, type, hp, attack, turn)
{
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.attack = attack;
    this.turn = turn;   
}
var yourPokemon = new pokemon("Pikachu", "electric", 80, [["quickAttack", quickAttack], ["ironTail", ironTail]], true);
//console.log(yourPokemon);

var cpuPokemon = new pokemon("Blastoise", "water", 80, [["Tackle", Tackle], ["hydroCannon",hydroCannon]], false);
//console.log(cpuPokemon);


function pokeAttack()
{
    for(var i = 0; i < 2; i++)
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
 }
pokeAttack();

