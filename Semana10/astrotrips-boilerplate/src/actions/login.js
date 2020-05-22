import axios from 'axios'
import {routes} from '../containers/Router'
import { replace } from 'connected-react-router'
const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/futureX/erika"

//POST Login --> Faz o login de um usuário
export const login = (email, password) => async(dispatch) => {
    const body = {
        email:email,
        password:password
    };
    try {
        //Faz requisição de login para o backend
        const response = await axios.post(`${baseURL}/login`,body)
        //Salva o token no LocalStorage com a chave 'token
        localStorage.setItem("token", response.data.token)
        dispatch(replace(routes.list))
    } catch (error) {
        window.alert("Dados incorretos!!!")
    }    
    
}
//POST Signup --> Cria um usuário

