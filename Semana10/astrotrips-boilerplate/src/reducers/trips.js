const initialState = {
    allTrips: [],
    details: [],
    id:""

}

const trips = (state = initialState, action) => {
    switch(action.type){
        case 'SET_ALL_TRIPS': {
            return {...state, allTrips: action.payload.allTrips}
        }
        case "SET_ALL_DETAILS'": {
            return {...state, details: action.payload.details}
        }
        case "SET_TRIP_CHOOSEN_ID": {
            return {...state, id: action.payload.id}
        }
        default:
            return state
    }
}

export default trips;