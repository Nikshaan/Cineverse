import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "watchList",
  initialState: {
    list: [],
  },
  reducers: {
    addMovie: (state, action) => {
        state.list.push(action.payload);
    },
    removeMovie: (state, action) => {
        state.list = state.list.filter((movie) => movie.id !== action.payload);
    }
  }
})

export const { addMovie, removeMovie } = listSlice.actions;

export default listSlice.reducer;