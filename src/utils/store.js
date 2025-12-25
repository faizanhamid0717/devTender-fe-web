import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import userFeed from "./feedSlice.js";
const store = configureStore({
  reducer: {
    // Add your reducers here
    user: userReducer,
    feed: userFeed,
  },
});

export default store;
