import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import activeSlice from "./activeSlice";
import fetchVediosSlice from "./fetchVediosSlice";
import searchSlice from "./searchSlice";

const youTubeStore = configureStore({
    reducer: {
        toggle: toggleSlice.reducer,
        active: activeSlice.reducer,
        fetchVedios: fetchVediosSlice.reducer,
        search: searchSlice.reducer
    }
});
export default youTubeStore;