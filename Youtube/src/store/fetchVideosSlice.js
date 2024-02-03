import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
// AIzaSyArdPFgxStyDfBX-Tc3uu1Kg2R_m61RK_o


const API_KEY = "AIzaSyDbDEhMEHW4CNZUXKmvK6JS9IKJ8Maztkw";

export const getVideos = createAsyncThunk('getVideos', 
async() => {
  
    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=Tseries&type=video&part=snippet&maxResults=24`
      );
      const  data  = await response.json();
      console.log(data);
      return data;
}
);

const fetchVideosSlice = createSlice({
    name: "fetchVideos",
    initialState: {
        data: [],
        loading: false,
        error: false,
    },
   
    extraReducers: (builder) => {   
        builder.addCase(getVideos.pending, (state,action) => {
            state.loading = true;
        });
        builder.addCase(getVideos.fulfilled, (state,action) => { // console.log(action.payload);
            state.loading = false;
            state.data = [...action.payload.items];
        });
        builder.addCase(getVideos.rejected, (state, action) => {
            console.log('Error', action.payload.items);
            state.error = true;
        })
    }
});

export default fetchVideosSlice;
export const fetchVideosAction = fetchVideosSlice.actions;
