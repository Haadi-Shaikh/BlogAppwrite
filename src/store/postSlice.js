import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setLocalPosts: (state, action) => {
      state.posts = action.payload;
    },

    addPost: (state, action) => {
      state.posts.push(action.payload);
    },

    updatePost: (state, action) => {
      state.posts.map((post) => {
        post.$id === action.payload.$id ? action.payload : post;
      });
    },

    deletePost: (state, action) => {
      state.posts.filter((post) => post.$id !== action.payload);
    },
  },
});

export const { setLocalPosts, addPost, updatePost, deletePost } =
  postSlice.actions;

export default postSlice.reducer;
