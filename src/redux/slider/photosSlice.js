import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "./url";


export const getPhotos = createAsyncThunk(
    'getPhotos',
    async function(info,{dispatch, rejectWithValue}){
        const response = await fetch(`url.DATA_URL`)
        const photos = await response.json()
        dispatch(photosInfo(photos))

    })

const photosSlice = createSlice({
    name:'photosSlice',
    initialState: {
        photos: []
    },
    reducers: {
        photosInfo: (state, action) => {
            state.photos = action.payload
        }
    }
})
export const {photosInfo} =photosSlice.actions
export default photosSlice.reducer