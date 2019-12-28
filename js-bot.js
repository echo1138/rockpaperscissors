function computerPlay(){
    let ans=["rock", "paper", "scissor"]
    let ran=Math.floor(Math.random()*3)+1
    switch(ran){
        case 1:
            return("rokku!")
            break;
        case 2:
            return("scissors!")
            break;
        case 3:
            return("paper!");
            break;
    }
}
/*
======= TESTING
let text=computerPlay()
console.log(text) */


 function playRound(playerSelection, computerSelection) { //basic rng of game
    if (computerSelection == "scissors!" && playerSelection == "rokku!"){
        return("u win!")
    }
    else if (computerSelection == "rokku!" && playerSelection == "scissors!"){
        return("computer wins!")
    }
    else if (computerSelection == "paper!" && playerSelection == "scissor!"){
        return("computer wins!")
    }
    else if (computerSelection == "scissor!" && playerSelection == "paper!"){
        return("u win!")
    }
    else if (computerSelection == "paper!" && playerSelection == "rokku!"){
        return("computer wins!")
    }
    else if (computerSelection == "rokku!" && playerSelection == "paper!"){
        return("u win!")
    }
    else{
        return("draw, play again.")
    }
}

// full round of games
let playercount=0
let compcount=0
let gamecount=0
game()
if(playercount<compcount){
    console.log("COMPUTER WINS THE GAME!")
}
else if (compcount<playercount){
    console.log("YOU WIN THE GAME!")
}
else{console.log("DRAW, NO ONE WINS.")}

function game(){
while(gamecount<5){
    const playerSelection="rokku!"
    const computerSelection = computerPlay()
    console.log("player: " + playerSelection)
    console.log("computer: " + computerSelection)
    console.log(playRound(playerSelection, computerSelection))

    if(playRound(playerSelection, computerSelection)=="computer wins!"){
        compcount++
        console.log("player = " + playercount)
        console.log("computer = " + compcount)
    }
    if(playRound(playerSelection, computerSelection)=="u win!"){
        playercount++
        console.log("player = " + playercount)
        console.log("computer = " + compcount)
    }
    if(playRound(playerSelection, computerSelection)=="draw, play again."){
        console.log("player = " + playercount)
        console.log("computer = " + compcount)
    }

    gamecount++
    console.log("\n")
}
}