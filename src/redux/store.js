import { configureStore } from "@reduxjs/toolkit";
import featuredPostSlice from "./featuredPostSlice";
import trendingPostSlice from "./trendingPostSlice";
import latestPostSlice from "./latestPostSlice";
const store = configureStore({
  reducer: {
    featuredPost: featuredPostSlice,
    latestPost: latestPostSlice,
    trendingPost: trendingPostSlice,
  },
});
export default store;
