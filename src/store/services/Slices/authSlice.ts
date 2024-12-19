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
  favoriteProducts:string[];
  addresses?: Address[]; 
}

interface Address {
  address: string;
  city: string;
  country: string;
  postalCode: string;
 
}

interface LoginState {
 
  userInfo: UserInfo | null; 
  authToken:string;
  isAddressAdded: boolean;
}

const initialState: LoginState = {
  userInfo: null, 
  authToken: '',
  isAddressAdded: false,
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
    updateAddresses: (state, action: PayloadAction<Address[]>) => {
      if (state.userInfo) {
        state.userInfo.addresses = action.payload;
      }
    },
    setAddressAdded(state, action) {
      state.isAddressAdded = action.payload; // true or false
    },
    logout: (state) => {
  
      state.userInfo = null;
      state.authToken='';
    },
  },
});

export const { userInfo, logout ,setAuthToken, updateUserProfile,updateAddresses, setAddressAdded } = authSlice.actions;
export default authSlice.reducer;
