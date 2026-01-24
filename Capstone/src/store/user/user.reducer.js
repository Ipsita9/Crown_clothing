
import { createSlice } from "@reduxjs/toolkit";
export const USER_INITIAL_STATE={
  currentUser:null,
  
};
// the below code replace the action.type code and also the reducer code
export const userSlice=createSlice({
  name:'user',
  initialState:USER_INITIAL_STATE,
  reducers:{
    setCurrentUser(state,action){
      state.currentUser=action.payload
    }
  }
})
export const {setCurrentUser}=userSlice.actions;
export const userReducer=userSlice.reducer;


// mutation stylis
