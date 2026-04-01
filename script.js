let userScore =0;
let compScore =0;
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    // console.log("you win!");
     msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
}
else{
    compScore++;
    compScore.innerText=compScore;
    // console.log("you lose.");
   msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    
}
};
const drawGame = () => {
  msg.innerText = "Game Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
//   console.log ("game draw");
};
const genCompChoice=()=>{
    const options = ["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3)//will generate number random from 0 to 2
    return options[randomIdx];
}
const playGame=(userChoice)=>{
console.log(userChoice,`choice was clicked by user`);
//generate computer choice --->modular way like break every thing into
//  function reusable components
const compChoice = genCompChoice();
console.log(compChoice,`choice was clicked by comp`);

if(userChoice === compChoice){
    //draw game
    drawGame();
}
else{
    let userWin = true;
    if (userChoice === "rock"){
        //comp choice --scissors,paper
        userWin=compChoice ==="paper"?false:true;
    }
    else if(userChoice ==="paper"){
        //rock,scissors
        userWin =compChoice ==="scissors"?false:true;
    }
    else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
