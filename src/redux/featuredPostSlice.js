import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  featuredPost: [],
};

const featuredPostSlice = createSlice({
  name: "featuredPosts",
  initialState,
  reducers: {
    setFeaturedPosts: (state, action) => {
      state.featuredPosts = action.payload;
    },
  },
});
export const { setFeaturedPosts } = featuredPostSlice.actions;
export default featuredPostSlice.reducer;
