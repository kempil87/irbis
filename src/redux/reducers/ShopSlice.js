import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  product: [],
  searchProduct: '',
  isLoading: false,
  error: "",
};

export const shopSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    productFetching(state) {
      state.isLoading = true
    },
    productFetchingSuccess(state, action) {
      state.isLoading = false
      state.error = ''
      state.product = action.payload
    },
    productFetchingError(state, action) {
      state.isLoading = false
      state.error = action.payload
    },
    filterProduct(state, action) {
      state.searchProduct = action.payload
    },
    clearFieldsProduct(state) {
      state.searchProduct = ''

  }
}})

export default shopSlice.reducer
