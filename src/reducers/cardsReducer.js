import {
  GET_CARDS,
  CARDS_ERROR,
  ADD_CARD_TO_FAVORITES,
  REMOVE_CARD_FROM_FAVORITES,
  TOGGLE_FILTER_BY_FAVORITES,
  DELETE_CARD,
} from "../actions/types"

const initialState = {
  cards: null,
  favorites: [],
  isFilteredByFavorites: false,
  error: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        cards: action.payload,
      }
    case CARDS_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case ADD_CARD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    case REMOVE_CARD_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.payload),
      }
    case TOGGLE_FILTER_BY_FAVORITES: {
      return {
        ...state,
        isFilteredByFavorites: !state.isFilteredByFavorites,
      }
    }
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      }
    default:
      return state
  }
}
