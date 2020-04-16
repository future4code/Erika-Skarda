// Reducer responsável por operações com tarefas

const initialState = {
    tarefas:[{
        id:1,
        text:'Tarefa1 do redux',
        complete:false
    }],
    filter: "todas"
}

export const tarefas = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_TASK':

             const newTodo ={
             id: Date.now(),
             text:action.payload.text,
             complete: false
            }

            return {...state, 
                tarefas: [newTodo, ...state.tarefas]
                // tarefas:[...state.tarefas,action.payload]
               // Se colocar os parametros na action
            }
            case "TOGGLE_TASK": {
                const newTodosList = state.tarefas.map(todo => {
                  if (todo.id === action.payload.id) {
                    return {
                      ...todo,
                      complete: !todo.complete
                    };
                  }
                  return todo;
                });
                return {
                  ...state,
                  tarefas: newTodosList
                };
              }
        case "DELETE_TASK": {
            const newTodosList = state.tarefas.filter(todo => {
                if (todo.id === action.payload.id) {
                return false;
                }
                return true;
            });
            return {
                ...state,
                tarefas: newTodosList
            };
            }
        case "COMPLETE_ALL_TASKS": {
            const newTodosList = state.tarefas.map(todo => {
                return {
                ...todo,
                complete: true
                };
            });
            return {
                ...state,
                tarefas: newTodosList
            };
            }
            case "DELETE_ALL_COMPLETE": {
            const newTodosList = state.tarefas.filter(todo => {
                if (todo.complete) {
                return false;
                }
                return true;
            });
            return {
                ...state,
                tarefas: newTodosList
            };
            }
            case "SET_FILTER": {
            return {
                ...state,
                filter: action.payload.filter
            };
            }
            default:
            return state;
        }
    }