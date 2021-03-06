export const initialState = {
  cart: [],
  user: null
}

// selector
export const getCartTotal = cart => cart?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {

  switch (action.type) {
    case 'addItem':
      return {
        ...state,
        cart: [...state.cart, action.item]
      }
    case 'removeItem':
      const index = state.cart.findIndex((cartItem) => cartItem.id === action.id)
      let newCart = [...state.cart]
      if (index >= 0) {
        newCart.splice(index, 1)
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as its not in cart!`)
      }
      return {
        ...state,
        cart: newCart
      }
    case 'setUser':
      return {
        ...state,
        user: action.user
      }
    case 'emptyCart':
      return {
        ...state,
        cart: []
      }
    default:
      return state
  }
}

export default reducer