const Project = (projName, projTasks) =>{
    let tasks=[]
    let name=projName
    const id=Date.now()
    
    const addTask=(newTask)=>{tasks.unshift(newTask)}
    const getName=()=>{return name}
    const getTasks=()=>{return tasks}
    const editName=(newName)=>{name=newName}

    return {getName, getTasks, addTask, editName, tasks, name, id}
}

export {Project};