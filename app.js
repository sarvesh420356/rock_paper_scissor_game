let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    // rock, paper, scissor
}

//draw game
const drawGame = () => {
    // console.log("Game was draw.")
    msg.innerText = "Game was draw. Play again."
    msg.style.backgroundColor = "rosybrown"
}

const showWin = (userWin, userChoice, compChoice) => {
    if(userWin){
        // console.log("You win!");
        userScore ++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!.Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "cyan";
    }else{
        compScore ++;
        compScorePara.innerText = compScore;
        // console.log("You Lose!");
        msg.innerText = `You lost!. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "tomato";
    }
}
const playGame = (userChoice) =>{
    // console.log("user choice = ",userChoice)
    // Generate computer choice
    const compChoice = genCompChoice()
    // console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame()
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper, scissor
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            // rock, scissor
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWin(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice)
    })
});