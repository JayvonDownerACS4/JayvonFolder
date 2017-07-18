var prompt = require('prompt-sync')();

var balance = 1000;
var backpack = [];

while(balance >= 100)
{
    var answer = prompt("You can buy Yeezy's for 400, guicci flip flops for 200 or ray bans for 100");
    if(answer.toLowerCase == "yeezy" && balance > 500)
    {
       balance = balance - 400;
       backpack.push("Yeezy's");
       console.log("You have successfully bought Yeezy's");
    }
    else if(answer.toLowerCase == "guicci flip flop" && balance > 200)
    {
        balance = balance - 300;
        backpack.push("Guicci FLip Flops");
        console.log("You have successfully bought Guicci Flip Flops");
    }
    else if(answer.toLowerCase == "ray bans" && balance > 100)
    {
        balance = balance - 200;
        backpack.push("Ray Bans");
        console.log("You have successfully bought Ray Bans");
    }
    else
    {
        console.log("Nah B, you buggin home-dawg, pick something already");
    }
}
