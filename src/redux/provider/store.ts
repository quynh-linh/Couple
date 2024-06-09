import { configureStore } from '@reduxjs/toolkit';
import heartSlice from '../features/heartSlice';

export const store = () => {
  return configureStore({
    reducer: {
      heart: heartSlice,
    },
  });
};

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];