import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "watchList",
  initialState: {
    list: [],
    lenList: 0
  },
  reducers: {
    addMovie: (state, action) => {
        state.list.push(action.payload);
    },
    removeMovie: (state, action) => {
        state.list = state.list.filter((movie) => movie.id !== action.payload);
    },
    updateLenList: (state, action) => {
      state.lenList += action.payload;
    }
  }
})

export const { addMovie, removeMovie, updateLenList } = listSlice.actions;

export default listSlice.reducer;