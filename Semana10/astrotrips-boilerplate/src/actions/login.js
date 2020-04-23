import axios from 'axios'
import {routes} from '../containers/Router'
import { push } from 'connected-react-router'
const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/futureX/erika"

//POST Login --> Faz o login de um usuário
export const login = (email, password) => async(dispatch) => {
    const body = {
        email:email,
        password:password
    };
    try {
        const response = await axios.post(`${baseURL}/login`,body)
        localStorage.setItem("token", response.data.token)
        dispatch(push(routes.list))
    } catch (error) {
        window.alert("Dados incorretos!!!")
    }
    
}