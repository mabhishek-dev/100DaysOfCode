document.getElementById('reset-score').addEventListener('click',()=>reset());

function reset(){
    scoreObj.win=0;
    scoreObj.lose=0;
    scoreObj.tie=0;

    document.getElementById('currResult-js').innerHTML='';
    document.getElementById('displayMove-js').innerHTML='';
    
    updateResult();
    document.body.style.marginTop="25px";
}