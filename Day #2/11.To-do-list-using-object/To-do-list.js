let todoListdata={
    taskdateVal:[]
};


function getData(){
    const tempname=document.querySelector('.js-taskInp');
    const tempdate=document.querySelector('.js-dateInp');

    let name =tempname.value;
    let date=tempdate.value;
    //as p:v both have same name,no need for name:name

    if(name ===''|| date === ''){
        alert('Name or Date can not be empty');
    }else{
        todoListdata.taskdateVal.push({name,date}); //name:name as p:v value are same we can diretly give name itself
        renderTasks();
    }
    tempname.value='';
    tempdate.value='';
}

function renderTasks(){
    let printDataVal='';
    todoListdata.taskdateVal.forEach((task,idx)=>{ //forEach takes{element,index} as parameters index can be optional but here we need it as we remove a specific task
        printDataVal+=`<p class="renderVal">${task.name} ${task.date} <button class="js-remove"
        onclick="
        removeTask(${idx})
        ">Remove</button></p>`
    });
    document.querySelector('.js-printData').innerHTML=printDataVal;
}

function removeTask(idx){
    todoListdata.taskdateVal.splice(idx,1);
    renderTasks();
}
