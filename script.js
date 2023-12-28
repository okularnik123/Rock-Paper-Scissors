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
    //Check is this a tie
    //If player chose rock 
        //Each of combinations
            //If player have scissors
                //If computer have rock
                    //Game Failed
                //If computer have paper
                    //Game win
//Start game one more time
Game();
function Game(){
let playerMove = prompt("Pick your move (rock, paper, scissors)");
let computerChoice;

playerMove = playerMove.toLowerCase();
console.log(playerMove);
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
        alert("Its tie! Click ok to play one more time.")
        Game()
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
    alert(`Congratulations! You win! Computer choice was ${computerChoice}. To play one more time click ok.`)
    Game();
}
function failMessage(){
    alert(`Unfortunately you loose! Computer choice was ${computerChoice}. To play one more time click ok.`)
    Game();
}
}
