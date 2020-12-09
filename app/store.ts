import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from "../features/home/slice";
import {appSlice} from "./slice";

export const store = configureStore({
    reducer: {
        app: appSlice.reducer,
    },
    devTools: true,
})
