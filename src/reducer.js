export const initialState = {
  cart: []
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'addToCart': 
      return {
        ...state,
        cart: [...state.cart, action.item]
      }
    default:
      return state
  }
}

export default reducer