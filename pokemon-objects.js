function pokemon(Name, Type, HP, DEF, ATK, Legend)
{
    this.Name = Name;
    this.Type = Type;
    this.HP = HP;
    this.DEF = DEF;
    this.ATK = ATK;
    this.Legned = Legend;
}
var Pikachu = new pokemon("Pikachu", "Electric", 35, 40, 55, false);
var Tornadus = new pokemon("Tornadu", "Flying", 79, 70, 115, true);
var Stunfisk = new pokemon("Stunkfish", ["Electric", "Ground"], 109, 84, 66, false);
var Zekrom = new pokemon("Zekrom", ["Dragon", "Electric"], 100, 120, 150, true);
var Gothitelle = new pokemon("Gothitelle", "Psychic", 70, 95, 55, false);
var Blaziken = new pokemon("Blaziken", ["Fire", "Fighting"], 80, 70, 120, false);
var pokeRoster = [Pikachu, Tornadus, Stunfisk, Zekrom, Gothitelle, Blaziken];

function printRoster()
{
    for(var i = 0; i < pokeRoster.length; i++)
    {
        console.log(pokeRoster[i]);
    }   
}
//printRoster();
function pokemonAttack()
{
    for (var i = 0; i < pokeRoster.length; i++)
    {
       pokeRoster[i].HP = pokeRoster[i].HP - 10;
       console.log(pokeRoster[i]); 
    }
}
//pokemonAttack();

//function randomAttack()
//{
    //var attack = 
    //for (var i = 0; i < pokeRoster.length; i++)
    //{
       //pokeRoster[math.round(math.random()*pokeRoster.length)].HP = pokeRoster[math.round(math.random()*pokeRoster.length)].HP - attack
       //console.log(pokeRoster[i]); 
    //}
//}
