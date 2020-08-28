import {toDos} from "./initToDoLists"

const menuListDOM =()=>{
    function _handleAddProject(e){
        e.preventDefault();
        toDos.addProject(this.children[0].value)
        generateProjectsListHTML()
        this.reset()
    }

    const generateProjectsListHTML=()=>{
        const listDOM=document.querySelector("#projectsList");
        listDOM.innerHTML=""
        toDos.projectList.forEach(project=>{
            listDOM.innerHTML+=`
                <li class="project">${project.name}</li>
            `
        })
    }
    
    
    const addProject=document.querySelector("#addProject")
    addProject.addEventListener("submit", _handleAddProject)
    generateProjectsListHTML()
}

export {menuListDOM};