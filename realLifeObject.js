function basketBallPlayer(Name, Team, height, position, number ,isGood, netWorth, pastTeam) 
{
    this.Name = Name;
    this.Team = Team;
    this.height = height;
    this.position = position;
    this.number = number;
    this.isGood = isGood;
    this.netWorth = netWorth;
    this.pastTeam = pastTeam;
}
var Shaq = new basketBallPlayer("Shaquille o'neal", "Celtics", "7 feet 1 inches", "Center", 36 , true, 100000000, ["Magic", "Lakers", "calves", "Heats", "Bulls"]);
//console.log(shaq);

var Jayvon = new basketBallPlayer("Jayvon Downer", "Harlem GlobeTrotters", "6 feet", "power Foward", 17, false, -10000, ["School", "AfterSchool", "Before School"]);
//console.log(Jayvon);

var Lebron = new basketBallPlayer("Lebron James", "Cavaliers", "6 feet 8 innches", "small Foward", 32, true, 10000000000, ["heat"]);
console.log(Lebron);
Lebron.pastTeam.push(Lebron.Team);
Lebron.Team = "Warriors"; 
