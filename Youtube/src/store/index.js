import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";

const youTubeStore = configureStore({
    reducer: {
        toggle: toggleSlice.reducer,
    }
});
export default youTubeStore;