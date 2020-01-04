
// set variables
let playercount=0
let compcount=0
let gamecount=0

startgame()
function startgame(){
let butt=document.querySelector(`.start`) // back tick makes a difference?
butt.addEventListener("click", function(){
    game()
}
)}

/* =========== functions ========== */

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

// play game!
function game(){
while(gamecount<5){
    playerSelection="start"
    while ( playerSelection == "start" ){ // this will force the player to input a correct choice
     playerSelection = prompt("what is ur hand?")
     if (playerSelection != null){
        playerSelection = playerSelection.toLowerCase()
     }
     if (playerSelection == "rokku"){
         playerSelection = "rokku!"
     }
     else if (playerSelection == "scissor"){
         playerSelection = "scissor!"
     }
     else if (playerSelection == "paper"){
         playerSelection = "paper!"
    }
    else if ( playerSelection == null){
        gamecount = 0
        playercount = 0
        compcount = 0
        return;
    }
    else{
        alert("That is not an answer")
        playerSelection = "start"
    }
}
    // add button selections later

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
}