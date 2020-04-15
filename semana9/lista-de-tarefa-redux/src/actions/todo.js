//  Vamos criar a action e o seu respectivo action-creator:

 export function createTask(text, id){
    return{
        type: 'CREATE_TASK',
        payload: {
            text: text,
            
        }
    }
}

export function deleteTask(id){
    return{
        type: 'DELETE_TASK',
        payload: {
            id: id
        }
    }
}

export function toggleTask(id){
    return{
        type: 'TOGGLE_TASK',
        payload: {
            id: id
        }
    }
}

export function completeAll(){
    return{
        type: 'COMPLETE_ALL_TASKS',
    }
}

export function setFilter(filter){
    return{
        type: 'SET_FILTER',
        payload:{
            filter:filter
        }
    }
}

export function deleteAllComplete(){
    return{
        type: 'DELETE_ALL_COMPLETE',
    }
}