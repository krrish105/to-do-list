let id = 0;
export const addTask = (task) => {
    return {
        type: 'todo/addTask',
        payload: {
                task: task,
                id: id++,
                isCompleted: false
            }
    }
}
export const completeTask = (task, id, isCompleted) => {
    return {
        type: 'todo/completeTask',
        payload: {
            task: task,
            id: id,
            isCompleted: isCompleted
        }
    }
}

export const deleteTask = (task, id, isCompleted) => {
    return {
        type: 'todo/deleteTask',
        payload: {
            task: task,
            id: id,
            isCompleted: isCompleted
        }
    }
}
export const deleteCompleted = {
    type: 'todo/deleteCompleted'
}