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
    const response = await axios.get(`${baseURL}`)
    dispatch(setTasks(response.data.tasks))
    console.log(response.data.tasks)
}

//POST Create Task
export const createTask = (text, day) => async(dispatch, getState) => {
    const bananinha = {
        text:text,
        day:day
    }
    
    const response = await axios.post(`${baseURL}`, bananinha)
    dispatch(getTask)
}
