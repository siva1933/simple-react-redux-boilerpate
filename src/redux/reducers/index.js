import { GET_RECIPIES } from "../types";


function reducer(initialState = { recipies: { loading: true } }, action) {
  switch (action.type) {
    case GET_RECIPIES:
      return { recipies: { data: action.payload, loading: false } };
    default:
      return initialState
  }
}

export default reducer