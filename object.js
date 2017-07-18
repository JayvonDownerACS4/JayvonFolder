var charizard = {
                "attack": "blaze",
                "HP":266, 
                "Legendary": false, 
                "types": ["fire","flying"]
                };
console.log(charizard.attack);
console.log(charizard.HP);
console.log(charizard["HP"]);
console.log(charizard.types);
charizard.hp = 100;
console.log(charizard.hp);

function Superhero(realName)
{
    this.realName = realName;
}
var superman = new Superhero("CLark Kent");
console.log(superman.realName);