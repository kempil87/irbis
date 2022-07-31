import {combineReducers, configureStore} from '@reduxjs/toolkit'
import newsReducer from '../reducers/NewsSlice'
import shopReducer from '../reducers/ShopSlice'
import cartReducer from '../reducers/CartSlice'
import authReducer from '../reducers/AuthSlice'



const rootReducer = combineReducers({
  newsReducer,
  shopReducer,
  cartReducer,
  authReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}