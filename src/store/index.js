import { configureStore } from '@reduxjs/toolkit';
import MovieReducer from './slices/movie';

export const store = configureStore({
  reducer: {
    movie: MovieReducer,
  },
  devTools: true,
});
