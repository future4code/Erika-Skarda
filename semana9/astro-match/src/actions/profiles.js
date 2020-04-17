import axios from 'axios'

// Função síncrona --> todos profiles array de perfis
export const setProfile = (profile) => {
	return {
		type: 'SET_PROFILE',
		payload: {

			profile:profile
		}
	}
}
// Função síncrona --> array dos matches no usuário
export const setMatches = (matches) => {
	return {
		type:"SET_MATCHES",
		payload: {
			matches:matches
		}
	}
}


// Função assíncrona
const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch"


// GET Get Profile To Choose - Retorna um perfil que ainda não foi visto por você.
// Essa aqui é a getProfileToSwipe 
export const getProfile = () => async (dispatch) => {
	const response = await
		axios.get(`${baseURL}/erika/person`)
	dispatch(setProfile(response.data.profile))

}

//POST Choose Person - Recebe um id e uma escolha (choice). 
//A escolha é a opção do usuário no momento do swipe. Deve ser true ou false.
export const chooseProfile = (id, choice) => async (dispatch) => {
	const body = {

		choice: choice,
		id: id
	}
	const response = await
		axios.post(`${baseURL}/erika/choose-person`, body
		);
	dispatch(getProfile(response.data.profile))
	console.log(response.data.profile)
}

//GET Get Matches - Retorna um array de perfis que deram match com você.
export const getMatches = () => async (dispatch) => {
	const response = await
		axios.get(`${baseURL}/erika/matches`)
	dispatch(setMatches(response.data.matches))
	console.log(response.data.matches)
}

//PUT Clear - Limpa todos os matches e perfis vistos.
export const clearSwipes = () => async (dispatch) => {
	const response = await axios.put(`${baseURL}/erika/clear`)
		dispatch(getMatches(response.data.message))
		console.log(response.data.message)
	}

