import { configureStore } from '@reduxjs/toolkit';
import MovieReducer from './slices/movie';
import TVReducer from './slices/serie';

export const store = configureStore({
  reducer: {
    movie: MovieReducer,
    tv: TVReducer,
  },
  devTools: true,
});
