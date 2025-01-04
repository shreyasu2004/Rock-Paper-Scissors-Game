let users=0;
let comps=0;
const choices=document.querySelectorAll(".u");
const msgs=document.querySelector("#msg");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");

const genComputerchoice=()=>{
    //rock,paper,scissor
    const options=["rock","scissors","paper"];
    const rand=Math.floor(Math.random()*3);
    return options[rand];
}
const drawGame=()=>{
    console.log("draw");
    msgs.innerText="Game was draw Try again!"
    msgs.style.backgroundColor="blue"
}
const showwinner=(userwin,compChoice,userChoice)=>{
    if(userwin){
        users++;
       userScore.innerText= users;
        msgs.innerText=`you win your ${userChoice} beats ${compChoice}`;
        msgs.style.backgroundColor="green"
        
    }
    else{
        comps++;
       compScore.innerText= comps;
        msgs.innerText=`you lose comp ${CompChoice} beats your ${userChoice}`;
        msgs.style.backgroundColor="red"
    }
}
const playGame=(userChoice)=>
    {
    console.log("user chooice=",userChoice);
    //generate computer choice-> modular
    const compChoice=genComputerchoice();
    console.log("compChoice=",compChoice);
    if(userChoice===compChoice){
drawGame();

    }

    else{
        let userwin=true;
        if(userChoice==="rock"){
            //s,p
            userwin=compChoice==="paper"?false:true;

        }
    else if(userChoice=="paper")
    
    {
        userWin=compChoice==="scissor"?false:true;
    } 
    else
     {
        //r,p
        userWin=compChoice==="rock"?false:true;
    }
    showwinner(userWin,compChoice,userChoice);

    }
}
choices.forEach((u)=>
    {
        
    u.addEventListener("click",()=>{
        const userChoice=u.getAttribute("id")
        
        playGame(userChoice);
    });
});