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
  },
});

export const { getFeedSuccess, removeFeed } = feedSlice.actions;

export default feedSlice.reducer;
