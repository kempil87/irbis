import {combineReducers, configureStore} from '@reduxjs/toolkit'
import newsReducer from '../reducers/NewsSlice'
import shopReducer from '../reducers/ShopSlice'



const rootReducer = combineReducers({
  newsReducer,
  shopReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}