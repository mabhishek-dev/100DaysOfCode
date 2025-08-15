let autoPlaying=false;
let intervalId;
document.getElementById('auto-play').addEventListener('click',()=>autoPlay());

function autoPlay(){
    if(!autoPlaying){
        autoPlaying=true;
        document.getElementById('auto-play').innerHTML='Click to Stop';
        intervalId=setInterval(()=>{
            selectedMove(computerMove());
        },1000);
    }else{
        document.getElementById('auto-play').innerHTML='AutoPlay';
        clearInterval(intervalId);
        autoPlaying=false;
    }
}