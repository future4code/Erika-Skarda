//  Vamos criar a action e o seu respectivo action-creator:

 export function createTask(text, id){
    return{
        type: 'CREATE_TASK',
        payload: {
            text: text,
            id: id,
            completa:false
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

export function taskDone(id){
    return{
        type: 'TASK_DONE',
        payload: {
            id: id
        }
    }
}

export function completeAll(){
    return{
        type: 'COMPLETE_ALL',
    }
}

export function filter(state){
    return{
        type: 'FILTER',
        payload:{
            state: state
        }
    }
}

export function deleteAllComplete(){
    return{
        type: 'DELETE_ALL_COMPLETE',
    }
}