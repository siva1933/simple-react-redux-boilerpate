import { GET_RECIPIES } from "../types";


function reducer(initialState = {}, action) {
  switch (action.type) {
    case GET_RECIPIES:
      return { recipies: action.payload };
    default:
      return initialState
  }
}

export default reducer