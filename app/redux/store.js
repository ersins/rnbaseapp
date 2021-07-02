import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../screens/auth/authSlice';
import {rootApi} from '../commons/services/RootApi';

export const store = configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rootApi.middleware),
});
