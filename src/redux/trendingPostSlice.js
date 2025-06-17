import { createSlice } from "@reduxjs/toolkit"

const initialState ={
  trendingPosts:[]
}
const trendingPostSlice = createSlice({
  name: "trendingPosts",
  initialState,
  reducers: {
    storeTrendingPost: (state, action) => {
      state.trendingPosts = action.payload;
    }
  },
})
export const { storeTrendingPost } = trendingPostSlice.actions;
export default trendingPostSlice.reducer