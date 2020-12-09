import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FarmLandData} from "../types/FarmLandData";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        farms: [],
    },
    reducers: {
        setFarms: (state, action: PayloadAction<FarmLandData>) => {
            state.farms = []
        },
    }
})


