import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//global
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9290ac27b9949585c1afebb041dee921';

// Async
// All Movies
export const allMovies = createAsyncThunk('movieSlice/allMovies', async () => {
  const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  console.log('res: ', res);
  return res.data;
});
// Detailed
export const movieDetailed = createAsyncThunk(
  'movieSlice/detailed',
  async (movieID) => {
    const res = await axios.get(
      `${BASE_URL}/movie/${movieID}?api_key=${API_KEY}`,
    );
    console.log('res: ', res);
    return res.data;
  },
);
// Movies Page
export const moviesPage = createAsyncThunk(
  'movieSlice/page',
  async (pageNumber) => {
    const res = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${pageNumber}`,
    );
    return res.data;
  },
);
// genres
export const movieGenre = createAsyncThunk('movieSlice/gneres', async () => {
  const res = await axios.get(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`,
  );
  return res.data;
});

const movieSlice = createSlice({
  initialState: {},
  name: 'movieSlice',
  reducers: {},
  extraReducers: (builder) => {
    //All
    builder.addCase(allMovies.pending, (state, action) => {
      console.log('action: ', action);
      state.all = false;
    });
    builder.addCase(allMovies.fulfilled, (state, action) => {
      console.log('action: ', action);
      state.all = action.payload;
    });
    //detailed
    builder.addCase(movieDetailed.fulfilled, (state, action) => {
      console.log('action: ', action);
      state.detailed = action.payload;
    });
    // page
    builder.addCase(moviesPage.pending, (state, action) => {
      console.log('action: ', action);
      state.all = false;
    });
    builder.addCase(moviesPage.fulfilled, (state, action) => {
      console.log('action: ', action);
      state.all = action.payload;
    });
    // genres
    builder.addCase(movieGenre.fulfilled, (state, action) => {
      console.log('action: ', action);
      state.genres = action.payload.genres;
    });
  },
});

// export const {  } = movieSlice.actions;

export default movieSlice.reducer;
