import { GET_RECIPIES, GET_RECIPE } from "../types"

import axios from "../../config/axios"

export const getRecipies = () => {
  return async (dispatch) => {

    let response = await axios.get("/recipe")

    if (response && response.status === 200) {
      dispatch({
        type: GET_RECIPIES,
        payload: response.data
      })
    } else {
      dispatch({
        type: GET_RECIPIES,
        payload: []
      })
    }
  }
}

export const getRecipy = async (id) => {

  let response = await axios.get(`/recipe/${id}`)

  return {
    type: GET_RECIPE,
    payload: response
  }
}