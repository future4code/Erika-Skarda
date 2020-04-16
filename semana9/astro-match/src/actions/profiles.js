import axios from 'axios'

// Função síncrona
export const setProfile = (profile) => {
	return {
		type: 'SET_PROFILE',
		payload: {

		}
	}
}
// Função assíncrona
const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch"

export const clearSwipes = () => async (dispatch) => {
	await axios.put(`${ baseURL }/erika/clear`)
}
export const getProfile = () => async(dispatch) => {
	const response = await
		axios.get(`${ baseURL }/erika/person`)
			console.log(response.data.profile)
			dispatch(setProfile(response.data.profile)) 

		
}
export const choosePerson = (id, choice) => async (dispatch) => {
	const body = {
		choice:false
	}
	await
		axios.post(`${ baseURL }/erika/${id}`, body
	);
}



export const getPerfilToChoose = (person) => async(dispatch) => {
	await
		axios.get(`${ baseURL }/erika/${person}`)
}
