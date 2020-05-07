import axios from "axios"

export const setTasks = (tasks) => {
    return {
     type: 'SET_TASKS',
     payload: {
        tasks
     }
    }
}
const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/generic/:planner-erika"
//GET Get Tasks
export const getTask = () => async (dispatch, getState) => {
    try {
            const response = await axios.get(`${baseURL}`
        )
        dispatch(setTasks(response.data))
        console.log(response.data)
    } catch(err) {
        console.log("Erro")
    }
};
//POST Create Task
export const createTask = (text, day) => async(dispatch, getState) => {
    const bananinha = {
        text:text,
        day:day
    }
    try {
        const response = await axios.post(`${baseURL}`, bananinha
        )
        dispatch(getTask());
        console.log(text) 
    } catch {
        console.log("Erro ao criar task")
    }
}
