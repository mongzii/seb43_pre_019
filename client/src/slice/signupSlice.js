import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'signUpSlice',
  initialState: {
    displayName: null,
    email: null,
    password: null,
    isSubmit: false,
    isLogin: false,
  },
  reducers: {
    setDisplayName: (state, action) => {
      state.displayName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setSubmit: state => {
      state.isSubmit = true;
    },
  },
});

export default signupSlice;
export const { setDN, setEmail, setPassword, setSubmit } = signupSlice.actions;
