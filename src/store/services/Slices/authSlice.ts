import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

interface UserInfo {
  customerId: ReactNode;
  mobileNumber: string;
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  status: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  isVerified?:boolean;
  favoriteProducts:string[]
}

interface LoginState {
 
  userInfo: UserInfo | null; 
  authToken:string;
}

const initialState: LoginState = {
  userInfo: null, 
  authToken: ''
};

const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload; 
    },
    updateUserProfile: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    setAuthToken:(state, action:PayloadAction<string>)=>{
      state.authToken = action.payload
    },
    logout: (state) => {
  
      state.userInfo = null;
      state.authToken='';
    },
  },
});

export const { userInfo, logout ,setAuthToken, updateUserProfile} = authSlice.actions;
export default authSlice.reducer;
