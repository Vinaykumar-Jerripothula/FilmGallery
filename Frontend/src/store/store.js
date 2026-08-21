import { configureStore } from "@reduxjs/toolkit";

import progressReducer from "./progressSlice";
import movieProgressReducer from "./movieProgressSlice";

export const store = configureStore({
  reducer: {
    progress: progressReducer,
    movieProgress: movieProgressReducer,
  },
});