import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latestPosts: [],
};
const latestPostSlice = createSlice({
  name: "latestPost",
  initialState,
  reducers: {
    setLatestPosts: (state, action) => {
      state.latestPosts = action.payload;
    },
  },
});
export const { setLatestPosts } = latestPostSlice.actions;
export default latestPostSlice.reducer;
