import {toDos} from "./initToDoLists";

const taskListDOM=()=>{
    const listDOM=document.querySelector("#projectsList");
    let activeProject
    
    const setActiveProject=(projName)=>{
        activeProject = toDos.projectList.find((project) => project.name == projName.textContent);
        generateTasksHTML(activeProject)
    }

    const generateTasksHTML =(list)=>{
        const taskList = document.querySelector("#tasks");
        const projectName = document.querySelector("#projectName");
        projectName.textContent= `${list.name}`
        
        taskList.innerHTML=""
        list.tasks.forEach(task=>{
            taskList.innerHTML+=`
                <li class="task-item">${task.name}</li>
            `
        })
    }
    
    
    setActiveProject(listDOM.firstElementChild);
    generateTasksHTML(activeProject)
    const projectItems=document.querySelectorAll(".project")
    projectItems.forEach(project=>project.addEventListener("click",()=>setActiveProject(project)))

    return{setActiveProject}
}

export {taskListDOM}