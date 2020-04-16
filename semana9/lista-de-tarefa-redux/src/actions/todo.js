//  Vamos criar a action e o seu respectivo action-creator:
import axios from "axios";

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/reduxTodo'

// Ações Síncronas

export const setTask = taskList => {
    return {
      type: "SET_TODO",
      payload: {
        taskList:taskList
      }
    };
  };

  // Ações assíncronas
export const fetchTodo = () => async (dispatch, getState) => {
    const response = await
        axios.get(`${ baseURL }/erika/todos`
        );

        dispatch(setTodos(response.data.todos))
        console.log(response.data.todos)
  }

export const createTodo = text => async(dispatch, getState) => {
    const body = {

            text:text
        }
        const response = await
            axios.post(`${ baseURL }/erika/todos`,
            body
            );

            dispatch(fetchTodo())
    }
export const deleteTodo = (id) => async(dispatch, getState) => {
    const response = await
        axios.delete(`${ baseURL }/erika/todos/${id}`
        );
        dispatch(fetchTodo())
}  
export const toggleTodo = (id) => async (dispatch, getState) => {
    const response = await
        axios.put(`${ baseURL }/erika/todos/${id/toggle}`
        );
    dispatch(fetchTodo())
}
//Deletar todas tarefas completas(true) 
export const deleteDoneTodos = () => async(dispatch, getState) => {
    const response = await 
        axios.delete(`${ baseURL }/erika/todos/delete-done`)
}

//  export function createTask(text){
//     return{
//         type: 'CREATE_TASK',
//         payload: {
//             text: text,
            
//         }
//     }
// }

// export function deleteTask(id){
//     return{
//         type: 'DELETE_TASK',
//         payload: {
//             id: id
//         }
//     }
// }

// export function toggleTask(id){
//     return{
//         type: 'TOGGLE_TASK',
//         payload: {
//             id: id
//         }
//     }
// }

// export function completeAll(){
//     return{
//         type: 'COMPLETE_ALL_TASKS',
//     }
// }

// export function setFilter(filter){
//     return{
//         type: 'SET_FILTER',
//         payload:{
//             filter:filter
//         }
//     }
// }

// export function deleteAllComplete(){
//     return{
//         type: 'DELETE_ALL_COMPLETE',
//     }
// }