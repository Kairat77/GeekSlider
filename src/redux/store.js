import { configureStore } from "@reduxjs/toolkit";
import  slice  from "./slider/Slice"
import photosReducer from "./slider/photosSlice";

export const store = configureStore({
    reducer:{
        slice,
        photosReducer
    }
})