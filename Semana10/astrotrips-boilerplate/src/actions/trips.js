import axios from 'axios'

//Ações síncronas

export const setAllTrips = (AllTrips) => {
    return {
        type: 'SET_ALL_TRIPS',
        payload: {
            trips:trips
        }
    }
}
// Ações assíncronas
const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/futureX/erika"
//GET Get Trips --> Essa requisição retorna todas as viagens.

export const fetchAllTrips = () => async(dispatch,getState) => {
    const response = await axios.get (`${baseURL}/trips`)
    dispatch(setAllTrips(response.data.trips))
}


//GET Get Trip Detail --> Essa requisição retorna os detalhes e os candidatos de uma viagem específica.

//POST Apply to Trip --> Esse endpoint recebe informações de um candidato e o relaciona a uma viagem.

export const applyToTrip = (form, id) => async(dispatch, getstate) => {
    const body = {
        form:form
    }
    const response = await axios.post (`${ baseURL }/${ id }/apply`,
     body)

     dispatch(fetchAllTrips())
}
//DEL Delete Trip --> Endpoint que deleta uma viagem. 

//POST Signup --> Cria um usuário

//POST Login --> Faz o login de um usuário

//PUT Decide Candidate -->  Este endpoint serve para decidir a aprovação ou não de um candidato para uma viagem.