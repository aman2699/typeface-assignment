import { configureStore } from '@reduxjs/toolkit';
import appReducer from "./app";
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});