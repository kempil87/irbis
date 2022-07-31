import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  cart: [],
  count: 0,
  totalPrice: 0,
  notification: false
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart(state, action) {
      const findItem = state.cart.find((i) => i._id === action.payload._id)
      if (findItem) {
        findItem.countItem++
      } else {
        state.cart = [...state.cart, {...action.payload, countItem: 1}]
      }
      state.count++
      state.totalPrice = state.totalPrice + Number(action.payload.price)
      localStorage.setItem('cart', JSON.stringify(state))
    },

    MinusProduct(state, action) {
      const findItem = state.cart.find(obj => obj._id === action.payload._id)
      if (findItem) {
        findItem.countItem--
      } else {
        state.cart = state.cart.filter((item) => item._id !== action.payload._id)
      }
      state.totalPrice = state.totalPrice - Number(action.payload.price)
      state.count--
      localStorage.setItem('cart', JSON.stringify(state))
    },
    deletePositionInCart(state, action) {
      const incCount = state.cart.find((i) => i._id === action.payload._id).countItem || 0
      state.cart = state.cart.filter((item) => item._id !== action.payload._id)
      state.count = state.count - incCount
      state.totalPrice = state.totalPrice - incCount * Number(action.payload.price)
      localStorage.setItem('cart', JSON.stringify(state))
    },
    clearAllCart(state) {
      state.cart = []
      state.count = 0
      state.totalPrice = 0
      localStorage.setItem('cart', JSON.stringify(state))
    },
    addLocalStorage(state, action) {
      state.cart = action.payload.cart
      state.count = action.payload.count
      state.totalPrice = action.payload.totalPrice
    },
    showNotification(state) {
      state.notification = true
    },
    hideNotification(state) {
      state.notification = false
    }

  }
})

export default cartSlice.reducer
