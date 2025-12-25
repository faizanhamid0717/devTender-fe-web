import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    getFeedSuccess: (state, action) => {
      return action.payload;
    },
    removeFeed: () => {
      return null;
    },
    removeUserFromFeed: (state, action) => {
      const newfeed = state.filter((user) => user._id !== action.payload);
      return newfeed;
    },
    clearFeed: () => null,
  },
});

export const { getFeedSuccess, removeFeed, removeUserFromFeed, clearFeed } =
  feedSlice.actions;

export default feedSlice.reducer;
