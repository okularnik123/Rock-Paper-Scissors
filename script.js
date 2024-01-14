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


const selectBtn = document.querySelectorAll("#selectBtn");
const results = document.querySelector("#results");

const scores = document.querySelector("#scores");


let gamesPlayed = 0;
let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

updateScores();
Game();

function Game(){
    selectBtn.forEach(element => {
        element.addEventListener('click', (e) => {
            playerChoice = e.target.textContent.toLowerCase();
            computerMove();
        });
    });

function computerMove(){
    const randomChoice = () => Math.floor(Math.random() * 3);
    switch(randomChoice()){
        case 0:
            computerChoice = "kamień";
        break;
        case 1:
            computerChoice = "papier";
        break;
        case 2:
            computerChoice = "nożyce";
        break;
    }
    checkWhoWins(computerChoice)


}
function checkWhoWins(computerChoice){
    if(playerChoice === computerChoice){
        tieMessage();
    }else{
        if(playerChoice === "kamień"){
            if(computerChoice == "nożyce"){
                winMessage();
            }else{
                failMessage();
            }
        }
        if(playerChoice === "nożyce"){
            if(computerChoice === "papier"){
                winMessage();
            }else{
                failMessage();
            }
        }
        if(playerChoice === "papier"){
            if(computerChoice == "kamień"){
                winMessage();
            }else{
                failMessage();
            }
        }
    }

}
function tieMessage(){
    updateResults("Remis! :|");
    updateScores();
    checkWhoWinsGame();
}

function winMessage(){
    playerScore ++;
    updateResults("Wygrałeś! :)");
    updateScores();
    checkWhoWinsGame();
}
function failMessage(){
    computerScore ++;
    updateResults("Przegrałeś! :(");
    updateScores();
    checkWhoWinsGame();
}



console.log(`Player move: ${playerChoice}, computer move is ${computerChoice}`)
}
function checkWhoWinsGame(){
    finalPlayerScore = playerScore;
    finalComputerScore = computerScore;

    if(playerScore >= 5){
        playerScore = 0;
        computerScore = 0;
        updateScores();
        updateResults("");
        alert(`Gratulacje wygrałeś grę! Ty zdobyłeś ${finalPlayerScore} punktów, a komputer ${finalComputerScore}. Naciśnij ok aby zacząć od nowa`)
 
    }else if(computerScore >= 5){
        playerScore = 0;
        computerScore = 0;
        updateScores();
        updateResults("");
        alert(`Niestety przegrałeś! Ty zdobyłeś ${finalPlayerScore} punktów, a komputer ${finalComputerScore}. Naciśnij ok aby zacząć od nowa`)

    }
}


function updateResults(result){
    results.innerHTML = result;
}

function updateScores(){
    scores.innerHTML = `Your score: ${playerScore} <br> Computer score: ${computerScore}`
};
