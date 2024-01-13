import {createSlice} from "@reduxjs/toolkit";

const activeSlice = createSlice({
    name: "active",
    initialState: 0,
    reducers: {
        setActiveClass: (state, action) => {
            return action.payload;
        }
    }
});

export default activeSlice;
export const activeActions = activeSlice.actions;