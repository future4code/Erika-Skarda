//todas as informações que vem
const initialState = {
  profileToSwipe: null,
  allMatches: []
}

const profiles = (state = initialState, action) => {
  switch(action.type) {
    case "SET_PROFILE": {
      return {
        ...state,
        profileToSwipe: action.payload.profile
      }
    }
    case "SET_MATCHES": {
      return {
        ...state,
        allMatches: action.payload.matches

      }
    }  
    default:
  return state
  }
}

export default profiles
