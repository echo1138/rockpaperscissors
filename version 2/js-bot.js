
// set variables
let playercount=0
let compcount=0
let gamecount=0
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")
const reset = document.getElementById("reset")

rock.addEventListener("click", function (){ return ("rock")})
paper.addEventListener("click", function (){ return ("paper")})
scissor.addEventListener("click", function (){ return ("scissor")})
reset.addEventListener("click", function (){
    playercount = 0
    compcount = 0
    gamecount = 0
 })


/*
startgame()
function startgame(){
let butt=document.querySelector(`.start`) // back tick makes a difference?
butt.addEventListener("click", function(){
    game()
}
)}

// =========== functions ==========

// AI chooses their hand
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

// basic rng function
 function playRound(playerSelection, computerSelection) { 
    if (computerSelection == "scissors!" && playerSelection == "rokku!"){
        return("u win!")
    }
    else if (computerSelection == "rokku!" && playerSelection == "scissor!"){
        return("computer wins!")
    }
    else if (computerSelection == "paper!" && playerSelection == "scissor!"){
        return("u win!")
    }
    else if (computerSelection == "scissors!" && playerSelection == "paper!"){
        return("computer wins!")
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

// button choosing
function select(){

}

// play game!
function game(){
    ///////////////////////
    //   FOR NON BUTTON //
    //////////////////////
while(gamecount<5){



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
    playerSelection = null
    console.log("\n")
}

if(playercount<compcount){
    console.log("COMPUTER WINS THE GAME!")
}
else if (compcount<playercount){
    console.log("YOU WIN THE GAME!")
}
else{console.log("DRAW, NO ONE WINS.")}

// refresh counts for the next game to execute if wanted
gamecount = 0
playercount = 0
compcount = 0
} */