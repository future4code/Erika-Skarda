import axios from 'axios'
import { routes } from "../containers/Router";
import { push } from "connected-react-router";

//Ações síncronas

export const setAllTrips = (allTrips) => {
    return {
        type: 'SET_ALL_TRIPS',
        payload: {
            allTrips 
        }
    }
}
export const setAllDetails = (details) => {
    return {
        type: 'SET_ALL_DETAILS',
        payload: {
            details
        }
    }
}
export const setTripChoosen = (id) => {
    return {
        type: 'SET_TRIP_CHOOSEN_ID',
        payload: {
            id
        }
    }
}
// Ações assíncronas
const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/futureX/erika"
//GET Get Trips --> Essa requisição retorna todas as viagens.
export const fetchAllTrips = () => async(dispatch,getState) => {
    const response = await axios.get (`${baseURL}/trips`)
    dispatch(setAllTrips(response.data.trips))
    // console.log(response.data.trips)
}

//POST Create Trip -        -> Esse endpoint cria uma nova viagem.
export const createTrip = (form) => async(dispatch,getState) => {
    //Buscando o token no LocalStorage
    const config = {
        headers: {
            'auth': window.localStorage.getItem('token'),
            "Content-Type":"application/json"
        },

    }
    try {
        await axios.post(`${ baseURL}/trips`, 
        form, config)
        window.alert("Viagem criada")
        dispatch(push(routes.list))

    } catch(error) {
        console.log(error)
        window.alert("Viagem não criada")
    }
}

//GET Get Trip Detail --> Essa requisição retorna os detalhes e os 
//candidatos de uma viagem específica.
export const  getTripDetail = (id) => async(dispatch,getState) => {
    
    const response = await axios.get(`${baseURL}/trip/${id}`,
    
    {
        headers: {
            auth:window.localStorage.getItem('token'),
            "Content-Type":"application/json"
        },
    })
    dispatch(setAllDetails(response.data.trip))
    console.log(response.data.trip)

}

//POST Apply to Trip --> Esse endpoint recebe informações de um candidato e o relaciona a uma viagem.
export const applyToTrip = (form, id) => async(dispatch, getstate) => {
    const body = {
        form:form
    }
    try {
        await axios.post (`https://us-central1-missao-newton.cloudfunctions.net/futureX/erika/trips/${id}/apply`, body)
        window.alert("Recebemos seu formulário astronauta")
    } catch (error) {
        window.alert("Algo deu errado com sua inscrição")
    }
}
    
//DEL Delete Trip --> Endpoint que deleta uma viagem. 
export const deleteTrip = (id) => async (dispatch, getState) => {
    const response = await axios.delete(`${baseURL}/trips/${id}`,  
    {
        headers: {
            auth:window.localStorage.getItem('token'),
            "Content-Type":"application/json"
        },
    })

 }
//PUT Decide Candidate -->  Este endpoint serve para decidir a aprovação ou não de um candidato para uma viagem.

export const decideCandidate = (tripId, candidateId) => async(dispatch,getState) => {
    try {
        await axios.put(`${baseURL}/trips/${tripId}/${candidateId}/decide`,
        {"approve": true},
        // const aprovado = { aprrove: decide }
        {
            headers: {
                'auth': window.localStorage.getItem('token'),
                "Content-Type":"application/json"
            }
        })  
        window.alert("Candidado aprovad")
        //dispatch(getTripDetail(tripId))
    } catch(error) {
        window.alert("Você não foi aprovado")
    }
}