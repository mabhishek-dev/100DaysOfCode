let taskVal=[];
let dateVal=[];

function getData(){
    let taskValpush=document.querySelector('.js-taskInp');
    let dateValpush=document.querySelector('.js-dateInp');

    if(taskValpush.value !== '' && dateValpush.value !== ''){
        taskVal.push(taskValpush.value);
        dateVal.push(dateValpush.value);
        todoPrint();
    }else{
        alert('Task or Date cannot be empty');
    }

    taskValpush.value='';
    dateValpush.value='';
}

function todoPrint() {
    let htmlPrint='';
    for (let i = 0; i < taskVal.length; i++) {
        
        let html=`
        <div class="printData">
            <p class="js-para">${taskVal[i]}</p>
            <p class="js-para">${dateVal[i]}</p>  
            <button class="js-deleteBtn" onclick="
                    taskVal.splice(${i},1);
                    dateVal.splice(${i},1);
                    todoPrint();">
                    Delete
            </button>
        </div>`;
        htmlPrint+=html;
    }
    document.querySelector('.js-printData').innerHTML=htmlPrint;
}
