import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  token:null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authToken :(state,action) =>{
      state.token = action.payload
    }
  }
})

export default authSlice.reducer
