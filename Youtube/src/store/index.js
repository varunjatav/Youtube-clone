import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import activeSlice from "./activeSlice";

const youTubeStore = configureStore({
    reducer: {
        toggle: toggleSlice.reducer,
        active: activeSlice.reducer
    }
});
export default youTubeStore;