const Task=(info)=>{
    let name = info.name;
    let description = info.description;
    let notes = info.notes;
    let dueDate = info.dueDate;
    let priority = info.priority;

    const getName = () => {return name }
    const getDescription = () => {return description}
    const getNotes = () => {return notes}
    const getDueDate = () => {return dueDate}
    const getPriority = () => {return priority}

    return {getName, getDescription, getNotes, getDueDate, getPriority, name, description, notes, dueDate,priority}
}

export {Task};