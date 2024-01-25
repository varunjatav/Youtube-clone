import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: "",
    reducers: {
        searchFunc: (state, action) =>{
            console.log(action.payload);
            return action.payload;
        }
    }
});

export const searchSliceAction = searchSlice.actions;
export default searchSlice;