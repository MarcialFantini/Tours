import { configureStore } from "@reduxjs/toolkit";
import TourReducer from "./slices/TourReducer";


export const store = configureStore({
    reducer: {
        Tour: TourReducer
    }
})
