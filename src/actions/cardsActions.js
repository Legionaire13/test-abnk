import {
  GET_CARDS,
  CARDS_ERROR,
  ADD_CARD_TO_FAVORITES,
  REMOVE_CARD_FROM_FAVORITES,
  TOGGLE_FILTER_BY_FAVORITES,
  DELETE_CARD,
} from "./types"

// Get cards from github api
export const getCards = () => async (dispatch) => {
  try {
    const url = `https://api.github.com/users`
    const res = await fetch(url)
    const data = await res.json()

    dispatch({
      type: GET_CARDS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: CARDS_ERROR,
      payload: err.response.data,
    })
  }
}

// Add a card to favorites
export const addCardToFavorites = (id) => {
  return {
    type: ADD_CARD_TO_FAVORITES,
    payload: id,
  }
}

// Remove a card from favorites
export const removeCardFromFavorites = (id) => {
  return {
    type: REMOVE_CARD_FROM_FAVORITES,
    payload: id,
  }
}

// Delete card
export const deleteCard = (id) => {
  return {
    type: DELETE_CARD,
    payload: id,
  }
}

// Toggle filter by favorites
export const toggleFilterByFavorites = () => {
  return {
    type: TOGGLE_FILTER_BY_FAVORITES,
  }
}