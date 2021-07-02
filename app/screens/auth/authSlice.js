import {createSlice} from '@reduxjs/toolkit';

const initialAuthState = {
  isLoading: true,
  email: null,
  userToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setCredentials: (state, {payload}) => {
      state.userToken = payload;
      state.isLoading = false;
    },
    singIn: state => {
      state.userToken = 'jkakjlsdhkjhsingin';
      state.isLoading = false;
    },
    singOut: state => {
      state.userToken = null;
      state.isLoading = false;
    },
    register: state => {
      state.userToken = 'jkakjlsdhkjhregister';
      state.isLoading = false;
    },
    opened: state => {
      state.isLoading = false;
    },
  },
});

export const {setCredentials, singIn, singOut, register, opened} =
  authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = state => state.auth.email;
