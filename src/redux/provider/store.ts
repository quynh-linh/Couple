import { configureStore } from "@reduxjs/toolkit";
import heartSlice from "../heartSlice";
const store = configureStore({
    reducer : {
        heart : heartSlice,
    }
})
export default store;