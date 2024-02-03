import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import activeSlice from "./activeSlice";
import fetchVideosSlice from "./fetchVideosSlice";
import searchSlice from "./searchSlice";

const youTubeStore = configureStore({
    reducer: {
        toggle: toggleSlice.reducer,
        active: activeSlice.reducer,
        fetchVideos: fetchVideosSlice.reducer,
        search: searchSlice.reducer
    }
});
export default youTubeStore;