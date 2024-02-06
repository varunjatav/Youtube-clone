import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import activeSlice from "./activeSlice";
import fetchVideosSlice from "./fetchVideosSlice";
import searchSlice from "./searchSlice";

const youTubeStore = configureStore({
    reducer: {
        toggle: toggleSlice,
        active: activeSlice,
        fetchVideos: fetchVideosSlice,
        search: searchSlice
    }
});
export default youTubeStore;