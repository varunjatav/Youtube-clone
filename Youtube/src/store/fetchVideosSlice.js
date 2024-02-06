import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

// AIzaSyArdPFgxStyDfBX-Tc3uu1Kg2R_m61RK_o


const API_KEY = "AIzaSyDbDEhMEHW4CNZUXKmvK6JS9IKJ8Maztkw";

export const getVideos = createAsyncThunk('getVideos', 
async(search,thunkAPI) => { 
   console.log(search);
    try{
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${search}&type=video&part=snippet&maxResults=24`
          );
          if(!response.ok) throw new Error("Error fetching video");
          const  data  = await response.json();
        //   console.log(data);
          return data;
    }catch(e){
        console.log(e);
    }
    
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
        builder.addCase(getVideos.fulfilled, (state,action) => { 
            // console.log(state.data);
            state.loading = false;
            if(action.payload && action.payload.items){
                state.data = [...action.payload.items];
            }else{
                state.error = true;
            }
            
        });
        builder.addCase(getVideos.rejected, (state, action) => {
            console.log('Error', action.error);
            console.log(state.error);
            state.loading = false;
            state.error = true;
        })
    }
});

export default fetchVideosSlice.reducer;
export const fetchVideosAction = fetchVideosSlice.actions;
