/*
remove button: class="rmv-button" , 
*/

let todo = [];
//approach - 1 by myself

function removeTask(taskId){
    let txt = document.querySelector(`#p${taskId}`)
    let c_Task = document.querySelector(`#${taskId}`);
    let main_prnt = document.querySelector("#tasks-added");
    main_prnt.removeChild(c_Task);
    todo = todo.filter(task => task !== txt.innerHTML);
    console.log(todo);    
}

function taskTemp(txt,id){
    const taskId = `task${todo.length+1}`;
    const newParent = document.createElement("div");
    newParent.id= taskId;
    newParent.className = "task";
    const textNode = document.createElement("p");
    textNode.id=`p${taskId}`;
    textNode.className=  "task-txt"
    textNode.innerHTML = txt;
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = `box${taskId}`;
    checkBox.className="myCheck"
    checkBox.onclick = function(){taskCompletion(taskId)};
    let mainParent = document.getElementById(id);
    mainParent.appendChild(newParent);
    newParent.appendChild(checkBox);
    newParent.appendChild(textNode);
    todo.push(txt)
    
}

function taskCompletion(taskId){
    let pId = `p${taskId}`;
    let boxId = `box${taskId}`;
    let tBox = document.getElementById(boxId)
    let p = document.getElementById(pId).style;
    let rmv = document.createElement("button");
    rmv.innerHTML ="Remove";
    rmv.className="rmv-button"
    rmv.id = `b${taskId}`
    rmv.onclick = function(){removeTask(taskId)}
    if(tBox.checked){
        p.textDecoration = "line-through";
        p.color = "grey";
        let prnt = document.querySelector(`#${taskId}`);
        if((prnt.querySelector(".rmv-button"))){
            console.log("button exists");
        }
        else{
            prnt.appendChild(rmv);
        }
    }
    else{
        p.textDecoration = "none";
        p.color = "black";
        let prnt = document.querySelector(`#${taskId}`)
        if((prnt.querySelector(".rmv-button"))){
            let button = document.getElementById(rmv.id);
            prnt.removeChild(button);
        }
    }
}


function addTask(){
    let txt = document.getElementById("task").value;
    let parent = "tasks-added";
    taskTemp(txt,parent);
    txt.innerHTML = "";
}


/*
to be completed ...

function taskTemplate(txt,id){
    const taskId = `task${(todo.lenght)+1}`
    const boxId = `Box${todo.length+1}`
    let parent = document.getElementById(id);
    let child = document.createElement("li");
    child.innerHTML = `
    <input type="checkbox id = bo
}
*/


