import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import userFeed from "./feedSlice.js";
import connectionsReducer from "./connectionSlice.js";
import requestReducer from "./requestSlice.js";
const store = configureStore({
  reducer: {
    // Add your reducers here
    user: userReducer,
    feed: userFeed,
    connections: connectionsReducer,
    requests: requestReducer,
  },
});

export default store;
