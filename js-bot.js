function computerPlay(){
    let ans=["rock", "paper", "scissor"]
    let ran=Math.floor(Math.random()*3)+1
    switch(ran){
        case 1:
            console.log("rokku!")
            break;
        case 2:
            console.log("scissors!")
            break;
        case 3:
            console.log("paper!")
            break;
    }
}

/* function playRound(playerSelection, computerSelection) {
	// your code here!
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection)) */