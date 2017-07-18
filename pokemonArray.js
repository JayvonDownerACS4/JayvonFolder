var myPokemonRoster = ["Bidoof", "Magikarp", "Jigglypuff", "Diglett", "Ditto","Unown"]
var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1];
myPokemonRoster.pop();
myPokemonRoster.pop();
myPokemonRoster.push("Muk");
myPokemonRoster.push("Stunfisk");
var rostersize = myPokemonRoster.length();

//Bonus #1
for(var i = 0;; i < myPokemonRoster.length; itt)
{
    console.log(myPokemonRoster[i]);
}

//Bonus #2
for(var i = myPokemonRoster.length; i > 0; i--)
{
    console.log(myPokemonRoster[i]);
}

// Bonus #3
if(myPokemonRoster.length < 5)
{
    console.log("You Can't Play! Not Enough Pokemon");
}
else
{
    console.log(myPokemonRoster[i]);
}