const Project = (projName, projTasks) =>{
    let tasks=[]
    let name=projName
    
    const addTask=(newTask)=>{tasks.unshift(newTask)}
    const getName=()=>{return name}
    const getTasks=()=>{return tasks}

    return {getName, getTasks, addTask, tasks, name}
}

export {Project};