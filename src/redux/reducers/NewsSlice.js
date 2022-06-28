import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  news: [],
  newsIn: [],
  searchNews: '',
  isLoading: false,
  error: "",
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    newsFetching(state) {
      state.isLoading = true
    },
    newsFetchingSuccess(state, action) {
      state.isLoading = false
      state.error = ''
      state.news = action.payload
    },
    newsFetchingError(state, action) {
      state.isLoading = false
      state.error = action.payload
    },
    filterNews(state, action) {
      state.searchNews = action.payload
    },
    clearFieldsNews(state) {
      state.searchNews = ''
    },
    newsInFetching(state) {
      state.isLoading = true
    },
    newsInFetchingSuccess(state, action) {
      state.isLoading = false
      state.error = ''
      state.newsIn = action.payload
    },
    newsInFetchingError(state, action) {
      state.isLoading = false
      state.error = action.payload
    },
  }
})

export default newsSlice.reducer
