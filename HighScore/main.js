var playerScore = 0;
var cpuScore = 0; 
var cpuChoice = Math.random();
var playerChoice = ""; 

function setChoice(choice)
{
    playerChoice= choice;
    console.log(playerChoice);
    $("body").append("<h1> Player: " + playerChoice+ "</h1>");
}


console.log(cpuChoice);
function playRps()
{
    var cpuChoice = Math.random();
    if (cpuChoice <= 0.34)
    {
        cpuChoice = "scissors";

    }
    if (cpuChoice <= 0.67)
    {
        cpuChoice = "paper";
    }
    if (cpuChoice >= 0.68)
    {
        cpuChoice = "rock";
    }
    $("body").append("<h1> CPU: " + cpuChoice+ "</h1>");


    //Player choose Rock    
    if (playerChoice == cpuChoice )
        {
            $("body").append("<h1> It's a tie </h1>");
        }

    if (playerChoice == "rock" && cpuChoice == "scissors")
    {
            $("body").append("<h1> Player wins </h1>");
            playerScore = playerScore + 1;
            console.log("playerScore = " + playerScore);
    }
    if (playerChoice == "rock" && cpuChoice == "paper")
    {
            $("body").append("<h1> Cpu Wins </h1>");
            cpuScore = cpuScore + 1;
            console.log("cpuScore = " + cpuScore);
    }

    //Player choose Paper
    if (playerChoice == "paper" && cpuChoice == "scissors")
        {
            $("body").append("<h1>  CPU wins </h1>");
            cpuScore = cpuScore + 1;
            console.log("cpuScore = " + cpuScore);
        }

    if (playerChoice == "paper" && cpuChoice == "rock")
        {
            $("body").append("<h1>  Player wins </h1>");
            playerScore = playerScore + 1;
            console.log("playerScore = " + playerScore);
        }

    //Player choose Scissors
    if (playerChoice == "scissors" && cpuChoice == "paper")
    {
        $("body").append("<h1>  Player wins </h1>");
        playerScore = playerScore + 1;
        console.log("playerScore = " + playerScore);
    }

    if (playerChoice == "scissors" && cpuChoice == "rock")
    {
        $("body").append("<h1>  CPU wins </h1>");
        cpuScore = cpuScore + 1;
        console.log("cpuScore = " + cpuScore);
    }
}

