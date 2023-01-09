import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//global
const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '9290ac27b9949585c1afebb041dee921';

// Async
// All Movies
export const allMovies = createAsyncThunk('movieSlice/allMovies', async () => {
  const res = await axios.get(`${BASE_URL}/popular?api_key=${API_KEY}`);
  console.log('res: ', res);
  return res.data;
});
// Detailed
export const movieDetailed = createAsyncThunk(
  'movieSlice/detailed',
  async (movieID) => {
    const res = await axios.get(`${BASE_URL}/${movieID}?api_key=${API_KEY}`);
    console.log('res: ', res);
    return res.data;
  },
);

const movieSlice = createSlice({
  initialState: {},
  name: 'movieSlice',
  reducers: {},
  extraReducers: (builder) => {
    //All
    // builder.addCase(allMovies.pending, (state, action) => {
    //   console.log('action: ', action);
    // });
    // builder.addCase(allMovies.rejected, (state, action) => {
    //   console.log('action: ', action);
    // });
    builder.addCase(allMovies.fulfilled, (state, action) => {
      console.log('action: ', action);
      state.all = action.payload;
    });
    //detailed
    // builder.addCase(movieDetailed.pending, (state, action) => {
    //   console.log('action: ', action);
    // });
    // builder.addCase(movieDetailed.rejected, (state, action) => {
    //   console.log('action: ', action);
    // });
    builder.addCase(movieDetailed.fulfilled, (state, action) => {
      console.log('action: ', action);
      state.detailed = action.payload;
    });
  },
});

// export const {  } = movieSlice.actions;

export default movieSlice.reducer;
