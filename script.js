//Ask player for move !!!!
    //Create prompt and assign it to variable!!!
    //Check is answer is valid !!!
        //Convert string to lower case  !!!
        //If valid - continue to computer move !!!
        //If not valid show alert and try one more time  !!!
//Create computer move !!
    //Create random number from 0 to 2 !!
    //Create switch with 0 means rock, 1 is paper and 2 is scissors !!
//Check who wins !!
    //Check is this a tie !!!
    //If player chose rock  !!!
        //Each of combinations !!!
            //If player have scissors !!!
                //If computer have rock !!!
                    //Game Failed !!!
                //If computer have paper !!!
                    //Game win !!!
//If game is won add score to player, if not to computer !!
//Start five more times !!



let gamesPlayed = 0;
let playerScore = 0;
let computerScore = 0;

Game();
function Game(){
if(gamesPlayed < 5){
let playerMove = prompt(`Pick your move (rock, paper, scissors). It's ${gamesPlayed + 1} game of 5`);
let computerChoice;

playerMove = playerMove.toLowerCase();

if(playerMove === "rock" || playerMove === "paper" || playerMove === "scissors"){
    computerMove();
}else{
    alert('Wrong option! Click ok to restart.')
    Game();
}


function computerMove(){
    const randomChoice = () => {
        let choice = Math.random() * 3
        choice = Math.trunc(choice);
        return choice;
    };
    switch(randomChoice()){
        case 0:
            computerChoice = "rock";
        break;
        case 1:
            computerChoice = "paper";
        break;
        case 2:
            computerChoice = "scissors";
        break;
    }
    checkWhoWins(computerChoice)


}
function checkWhoWins(computerChoice){
    if(playerMove === computerChoice){
        computerScore ++;
        playerScore ++;
        gamesPlayed ++;
        alert(`Its tie! Your score is ${playerScore}, and computer score is ${computerScore}. It's ${gamesPlayed} game of 5. To continue click ok.`);
        Game();
    }else{
        if(playerMove === "rock"){
            if(computerChoice == "scissors"){
                winMessage();
            }else{
                failMessage();
            }
        }
        if(playerMove === "scissors"){
            if(computerChoice === "paper"){
                winMessage();
            }else{
                failMessage();
            }
        }
        if(playerMove === "paper"){
            if(computerChoice == "rock"){
                winMessage();
            }else{
                failMessage();
            }
        }
    }

}
function winMessage(){
    playerScore ++;
    gamesPlayed ++;
    alert(`Congratulations! You win! Computer choice was ${computerChoice}. Your score is ${playerScore}, and computer score is ${computerScore}. It's ${gamesPlayed} game of 5. To continue click ok.`)
    Game();
}
function failMessage(){
    computerScore ++;
    gamesPlayed ++;
    alert(`Unfortunately you loose! Computer choice was ${computerChoice}. Your score is ${playerScore}, and computer score is ${computerScore}. It's ${gamesPlayed} game of 5. To continue click ok.`)
    Game();
}

}else{
    alert(`Game is ended!${whoWinsTheGame(playerScore, computerScore)} Your score is ${playerScore} and computer score is ${computerScore}. To start one more time click ok.`)
    gamesPlayed = 0;
    Game();
}
console.log(`Player move: ${playerMove}, computer move is ${computerChoice}`)
}

function whoWinsTheGame(playerScore, computerScore){
    if(playerScore > computerScore){
        return "You won the game!";
    }else if(playerScore < computerScore){
        return "You lose the game!";
    }else{
        return "It's tie!"
    }
}