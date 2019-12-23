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


 function playRound(playerSelection, computerSelection) {
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
        return("computer wins!!")
    }
    else if (computerSelection == "rokku!" && playerSelection == "paper!"){
        return("u win!")
    }
    else{
        return("draw, play again.")
    }
}
function output(){
    console.log("player: " + playerSelection)
    console.log("computer: " + computerSelection)
    console.log(playRound(playerSelection, computerSelection))
    }

const playerSelection="rokku!"
const computerSelection = computerPlay()
output()
