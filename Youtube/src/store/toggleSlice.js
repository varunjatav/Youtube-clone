import {createSlice} from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "toggle",
    initialState: false,
    reducers: {
        handleToggle: (state, action) => {
            return !state;
        }
    }
});

export default toggleSlice.reducer;
export const toggleActions = toggleSlice.actions;