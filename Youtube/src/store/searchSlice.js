import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: "",
    reducers: {
        searchFunc: (state, action) =>{
            console.log("search Function:",action.payload);
           // Modify the existing state directly
           return action.payload;
        }
    }
});

export default searchSlice.reducer;
export const searchSliceAction = searchSlice.actions;
