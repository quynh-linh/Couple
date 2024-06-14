import { configureStore } from '@reduxjs/toolkit';
import heartSlice from '../features/heartSlice';
import cloudinarySlice from '../features/cloudinarySlice';
export const store = () => {
  return configureStore({
      reducer: {
          heart: heartSlice,
          cloud: cloudinarySlice,
      },
  });
};

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];