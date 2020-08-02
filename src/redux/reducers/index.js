import { INCREMENT, DECREMENT } from "../types";


function reducer(initialState = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: initialState.count + 1 };
    case DECREMENT:
      return { count: initialState.count - 1 };
    default:
      return { count: 0 }
  }
}

export default reducer