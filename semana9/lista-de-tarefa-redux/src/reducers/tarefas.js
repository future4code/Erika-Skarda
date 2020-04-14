// Reducer responsável por operações com tarefas

const initialState = {
    tarefas:[]
}

const tarefas = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_TASK':
            return {...state, 

                tarefas:[...state.tarefas,action.payload]
               
            }
        case'DELETE_TASK': 
            return {...state, 

                tarefa:action.payload.text}
        // case 'COMPLETE_ALL':
        //     return 
        default :
        return state;
    }
}

export default tarefas;