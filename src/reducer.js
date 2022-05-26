export const initialState = {
  cart: []
}

// selector
export const getCartTotal = cart => cart?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
  
  switch(action.type) {
    case 'addItem': 
      return {
        ...state,
        cart: [...state.cart, action.item]
      }
    default:
      return state
  }
}

export default reducer