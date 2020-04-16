//todas as informações que vem
const initialState = {
  profileToSwipe: null
}

const profiles = (state = initialState, action) => {
  switch(action.type) {
    case "SET_PROFILE": {
      return {
        ...state,
        profileToSwipe: action.payload.profile
      }
    }
  }
  return state
}

export default profiles
