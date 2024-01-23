import { createSlice } from "@reduxjs/toolkit";

const fetchVediosSlice = createSlice({
    name: "fetchVedios",
    initialState: [],
    reducers: {
        fetchVedios:(state,action) => {
            console.log(state);
            state.push(action.payload);
        }
    }
});

export default fetchVediosSlice;
export const fetchVediosAction = fetchVediosSlice.actions;
