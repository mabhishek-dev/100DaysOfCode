const outcome={
    rock: {rock:'Tie' , paper:'Lose' , scissor:'Win'},
    paper: {rock:'Win' , paper:'Tie' , scissor:'Lose'},
    scissor: {rock:'Lose' , paper:'Win' , scissor:'Tie'}
};

const scoreObj = JSON.parse(localStorage.getItem('scoreObj')) ||
{
    win:0,
    lose:0,
    tie:0
}

document.getElementById("rock-btn-js").addEventListener('click',()=>selectedMove('rock'));
document.getElementById("paper-btn-js").addEventListener('click',()=>selectedMove('paper'));
document.getElementById("scissor-btn-js").addEventListener('click',()=>selectedMove('scissor'));


function computerMove(){
    let moves=['rock','paper','scissor'];
    return moves[Math.floor(Math.random()*3)];
}

function selectedMove(userMove){
    document.body.style.marginTop="-25px";
    let compMove=computerMove();
    scoreObj[(outcome[userMove][compMove]).toLowerCase()]++;
    document.getElementById('currResult-js').innerHTML=`Result : ${outcome[userMove][compMove]}`;
    document.getElementById('displayMove-js').innerHTML=`Your Move <img class="emoji" src="emoji/${userMove}-emoji.png"> <img class="emoji" src="emoji/${compMove}-emoji.png"> Computer Move`;

    updateResult();
}

function updateResult(){
    localStorage.setItem('scoreObj',JSON.stringify(scoreObj));
    document.getElementById('score-js').innerHTML=`Win: ${scoreObj.win} Lose: ${scoreObj.lose} Tie: ${scoreObj.tie}`
}
