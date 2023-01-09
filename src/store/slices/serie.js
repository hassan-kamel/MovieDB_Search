import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//global
const BASE_URL = 'https://api.themoviedb.org/3/tv';
const API_KEY = '9290ac27b9949585c1afebb041dee921';

export const topSeries = createAsyncThunk('serieSlice/top_rated', async () => {
  const res = await axios.get(`${BASE_URL}/top_rated?api_key=${API_KEY}`);
  return res.data;
});

const serieSlice = createSlice({
  initialState: {},
  name: 'serieSlice',
  extraReducers: (bulider) => {
    bulider.addCase(topSeries.fulfilled, (state, action) => {
      console.log('action: ', action);
      state.all = action.payload;
    });
  },
});

export default serieSlice.reducer;
