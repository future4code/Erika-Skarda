
const initialState = {
    allTrips: []
}

const trips = (state = initialState, action) => {
    switch(action.type){
        case "SET_ALL_TRIPS": {
            return {...state, allTrips: action.payload.allTrips}
        }
        default:
            return state
    }
}

export default trips;