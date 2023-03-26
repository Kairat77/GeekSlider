import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./url";

const initialState = {
    slice: [],
    load: true
}

export const getSlice = createAsyncThunk('slice', async()=>{
    const {data} = await axios.get(url.DATA_URL)
    return data;
})
const sliceActich = createSlice({
    name: 'slice',
    initialState,
    reducers: {},
    extraReducers(building){
        building
            .addCase(getSlice.pending, (state) =>{
                state.load = true;
            })
            .addCase(getSlice.fulfilled,(state,action) =>{
                state.slice = action.payload;
                state.load = false;
            })
    }
})
export default sliceActich.reducer;
export const sliceSelect = state => state?.slice?.slice;
export const loadSliceSelect = state => state?.slice?.load;
