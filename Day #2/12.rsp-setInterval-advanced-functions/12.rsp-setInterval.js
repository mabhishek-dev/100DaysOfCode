let scoreObj=JSON.parse(localStorage.getItem('scoreObj')) || 
    {
    win: 0,
    losses: 0,
    tie: 0
};

    updateScoreElement();

function updateScoreElement (){
    document.querySelector('.js-score').innerHTML = `Win: ${scoreObj.win}  Losses: ${scoreObj.losses}  Tie: ${scoreObj.tie}`;   
}

function pickComputerMove(){
    const randomNumber =Math.random();
    let computerMove='';
    if(randomNumber>=0 && randomNumber<1/3){
        computerMove='rock';
    } else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove='paper';
    } else{
        computerMove='scissor';
    }
    return computerMove;
}

function resultMove(selectedMove){
    const computerMove = pickComputerMove();
    let result='';
    if(selectedMove === 'rock'){
        if(computerMove=='rock'){
            result='Tie';
        } else if(computerMove=='paper'){
            result='Lose';
        } else{
            result='Win';
        }
    } else if(selectedMove === 'paper'){
        if(computerMove=='rock'){
            result='Win';
        } else if(computerMove=='paper'){
            result='Tie';
        } else{
            result='Lose';
        }
    } else{
        if(computerMove=='rock'){
            result='Lose';
        } else if(computerMove=='paper'){
            result='Win';
        } else{
            result='Tie';
        }
    }

    if(result === 'Win'){
    scoreObj.win+=1;
    } else if(result==='Lose'){
    scoreObj.losses+=1;
    } else{
    scoreObj.tie+=1;
    }

    localStorage.setItem('scoreObj',JSON.stringify(scoreObj));
    document.querySelector('.js-moves').innerHTML = `Your Move<img src="${selectedMove}-emoji.png">  <img src="${computerMove}-emoji.png">Computer Move`;
    document.querySelector('.js-result').innerHTML = `Result : ${result}`
    updateScoreElement();
}

// function autoPlay(){
//     setInterval(function(){
//         const playerMove = pickComputerMove();
//         resultMove(playerMove);
//     },1000);
// } Putting just this will not stop it after the button autoplay is clicked so:

let isAutoPlaying =false;
let intervalId;//we create this out as setInterval return a new ID every interval so if we want to stop it we cannot stop it if new id is present.

function autoPlay(){
    if (!isAutoPlaying) {
        intervalId= setInterval(function(){
            const playerMove = pickComputerMove();
            resultMove(playerMove);
        },1000);
        isAutoPlaying=true;
    } else {
        clearInterval(intervalId); //This is used to stop the interval
        isAutoPlaying=false;
    }
}