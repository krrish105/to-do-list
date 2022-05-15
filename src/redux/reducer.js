const defaultState = {
    tasks: []
}

const reducer = (state = defaultState, addTask) => {
    switch (addTask.type) {
        case 'todo/addTask':
            return {
                tasks: [...state.tasks, addTask.payload]
            }
            
        case 'todo/deleteTask':
            return {
                tasks: state.tasks.filter((el, i) => {
                    if(el.id !== addTask.payload.id){
                        return el;
                    }
                })
            }
        case 'todo/completeTask':
            return {
                tasks: state.tasks.map((el, i) => {
                    if (el.id === addTask.payload.id) {
                        el = addTask.payload
                    }
                    return el;
                })
            }
        case 'todo/deleteCompleted':
            return {
                tasks: state.tasks.filter((el, i) => {
                    if (el.isCompleted) {
                        return;
                    }
                    return el;
                })
            }
        default:
            return state;
    }
}

export default reducer;