import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://filmgallery.onrender.com/api/progress";

export const fetchProgress = createAsyncThunk(
  "progress/fetchProgress",

  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${userId}`);

      const progressMap = {};

      response.data.forEach((item) => {
        progressMap[item.contentId] =
          item.lastCompletedPosition;
      });

      return {
        userId,
        progressMap,
      };
    } catch (error) {
      console.error("Progress API Error:", error);

      return rejectWithValue(
        error.response?.data || "Failed to fetch progress"
      );
    }
  },

  {
    condition: (userId, { getState }) => {
      const { progress } = getState();

      // Already loaded for this exact user.
      if (
        progress.loaded &&
        String(progress.userId) === String(userId)
      ) {
        return false;
      }

      // Same user's request is already running.
      if (
        progress.loading &&
        String(progress.userId) === String(userId)
      ) {
        return false;
      }

      return true;
    },
  }
);

const initialState = {
  userId: null,
  progressMap: {},
  loading: false,
  loaded: false,
  error: null,
};

const progressSlice = createSlice({
  name: "progress",

  initialState,

  reducers: {
    setProgress: (state, action) => {
      const { userId, progressMap } = action.payload;

      state.userId = userId ?? state.userId;
      state.progressMap = progressMap;
      state.loaded = true;
      state.error = null;
    },

    updateProgress: (state, action) => {
      const { contentId, position } = action.payload;

      state.progressMap[contentId] = position;
    },

    clearProgress: (state) => {
      state.userId = null;
      state.progressMap = {};
      state.loading = false;
      state.loaded = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProgress.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.userId = action.meta.arg;
      })

      .addCase(fetchProgress.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.error = null;

        state.userId = action.payload.userId;
        state.progressMap = action.payload.progressMap;
      })

      .addCase(fetchProgress.rejected, (state, action) => {
        state.loading = false;
        state.loaded = false;
        state.error = action.payload;
      });
  },
});

export const {
  setProgress,
  updateProgress,
  clearProgress,
} = progressSlice.actions;

export default progressSlice.reducer;