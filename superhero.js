function superHero(realName, ability, gender, archNemis, age, weakness)
{
    this.realName = realName;
    this.ability = ability;
    this.gender = gender;
    this.archNemis = archNemis;
    this.age = age;
    this.weakness = weakness;
    
    this.talk = function()
    {
        console.log("hello, I'm" + realName);
    }
    this.callForHelp = function(call)
    {
        console.log(call);
    }
}
var wonderWomen = new superHero("Diana Prince", "super Strength", "Female", "Donald Trump", "Unknown", "Guns");
console.log(wonderWomen);

var superMan = new superHero("Clark Kent", "Everything", "Male", "Immigration police", "36", "Kryptonite");
superHero.ability = "Lazer Vision";
console.log(superMan);

wonderWomen.archNemis = superMan.realName;

wonderWomen.callForHelp("I need assistance, DeadassMan");
superMan.callForHelp("Yo b, help out");

var deadAssMAn = new superHero("Tyrone Dickson", "Swag"," Male", "Police", "24", "Police");
/////////////////////////////////////////////////////////////