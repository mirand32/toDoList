import {Task} from "./task"
import {Project} from "./project"

const info1={
    name:"Push Ups",
    description:"Complete 10 Wide Push Ups",
    dueDate:"2020-10-03",
    notes:"arms straight and chin to the floor",
    priority:"Medium"
}
const info2={
    name:"Jog",
    description:"Jog 5km",
    dueDate:"2020-09-30",
    notes:"Be able to jog 5km in 20 minutes",
    priority:"Low"
}
const info3={
    name:"Counting",
    description:"Learn to count to 100",
    dueDate:"2020-09-16",
    notes:"Learn to count to speak and understand numbers up to 100",
    priority:"High"
}
const info4={
    name:"Greetings",
    description:"Learn basic greetings",
    dueDate:"2020-10-02",
    notes:"Learn both formal and informal greetings depending on the person",
    priority:"Low"
}
const info5={
    name:"To Do List",
    description:"Complete To Do List",
    dueDate:"2020-08-24",
    notes:"Setup to do list using local storage",
    priority:"Medium"
}
const info6={
    name:"Odin Project",
    description:"Finish javascript section of the odin project",
    dueDate:"2020-11-14",
    notes:"",
    priority:"High"
}

const toDos = (() => {
    let excercise = Project("Excercise", []);
    let learnUrdu = Project("Learn Urdu", []);
    let coding = Project("Coding", []);
    
    excercise.addTask(Task(info1));
    excercise.addTask(Task(info2));
    
    learnUrdu.addTask(Task(info3));
    learnUrdu.addTask(Task(info4));
    
    coding.addTask(Task(info5));
    coding.addTask(Task(info6));
    
    
    
    const setLocalStorage = (projectList) =>{
        localStorage.setItem("toDoList", JSON.stringify(projectList))
    }
    
    const getProjectsLocalStorage = () =>{
        return JSON.parse(localStorage.getItem("toDoList"))
    }
    
    const addProject = (projName) =>{
        projectList.push(Project(projName, []))
        setLocalStorage(projectList)
    }
    
    let projectList = 
        localStorage.length > 0 
        ? getProjectsLocalStorage() 
        : [excercise, learnUrdu, coding]
    
    return {projectList, setLocalStorage, getProjectsLocalStorage, addProject}
})()

export {toDos};