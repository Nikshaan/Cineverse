import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";

const store = configureStore({
    reducer: listReducer
})

export default store;