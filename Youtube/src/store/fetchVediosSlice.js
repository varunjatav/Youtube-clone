import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

// AIzaSyArdPFgxStyDfBX-Tc3uu1Kg2R_m61RK_o
const API_KEY = "AIzaSyABGl5fZDtdtkF7x1iJlyMMjaHKJc7Edko";
export const getVedios = createAsyncThunk('getVedios', 
async() => {
    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=joji&type=video&part=snippet`
      );
      const  data  =  response.json();
    //   console.log(data);
      return data;
}
);

const fetchVediosSlice = createSlice({
    name: "fetchVedios",
    initialState: {
        data: [],
        loading: false,
        error: false,
    },
   
    extraReducers: (builder) => {   
        builder.addCase(getVedios.pending, (state,action) => {
            state.loading = true;
        });
        builder.addCase(getVedios.fulfilled, (state,action) => {
            // console.log(action.payload);
            state.loading = false;
            state.data.push(...action.payload.items);
        });
        builder.addCase(getVedios.rejected, (state, action) => {
            console.log('Error', action.payload.items);
            state.error = true;
        })
    }
});

export default fetchVediosSlice;
export const fetchVediosAction = fetchVediosSlice.actions;
