import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

const API_URL = "/api/movie-progress";

export const fetchMovieProgress = createAsyncThunk(
  "movieProgress/fetchMovieProgress",

  async (userId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `${API_URL}/${userId}`
      );

      const watchedMovies = {};

      response.data.forEach((contentId) => {
        watchedMovies[contentId] = true;
      });

      return watchedMovies;
    } catch (error) {
      return rejectWithValue(
        error.response?.data ||
          "Failed to fetch movie progress"
      );
    }
  }
);

const initialState = {
  watchedMovies: {},
  loading: false,
  error: null,
};

const movieProgressSlice = createSlice({
  name: "movieProgress",

  initialState,

  reducers: {
    setMovieProgress: (state, action) => {
      state.watchedMovies = action.payload;
    },

    markMovieWatched: (state, action) => {
      const contentId = action.payload;

      state.watchedMovies[contentId] = true;
    },

    unmarkMovieWatched: (state, action) => {
      const contentId = action.payload;

      delete state.watchedMovies[contentId];
    },

    clearMovieProgress: (state) => {
      state.watchedMovies = {};
      state.loading = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieProgress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchMovieProgress.fulfilled, (state, action) => {
        state.loading = false;
        state.watchedMovies = action.payload;
      })

      .addCase(fetchMovieProgress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setMovieProgress,
  markMovieWatched,
  unmarkMovieWatched,
  clearMovieProgress,
} = movieProgressSlice.actions;

export default movieProgressSlice.reducer;