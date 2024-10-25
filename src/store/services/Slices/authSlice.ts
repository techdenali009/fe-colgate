import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfo {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  status: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
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
    setAuthToken:(state, action:PayloadAction<string>)=>{
      state.authToken = action.payload
    },
    logout: (state) => {
  
      state.userInfo = null;
      state.authToken='';
    },
  },
});

export const { userInfo, logout ,setAuthToken} = authSlice.actions;
export default authSlice.reducer;
