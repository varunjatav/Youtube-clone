import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import activeSlice from "./activeSlice";
import fetchVediosSlice from "./fetchVediosSlice";

const youTubeStore = configureStore({
    reducer: {
        toggle: toggleSlice.reducer,
        active: activeSlice.reducer,
        fetchVedios: fetchVediosSlice.reducer,
    }
});
export default youTubeStore;