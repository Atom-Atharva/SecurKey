import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import passwordReducer from "./passwordSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        password: passwordReducer,
    },
});

export default appStore;
