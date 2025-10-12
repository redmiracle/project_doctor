import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ALertCountType {
    "pulse": number,
    "bloodPressure": number,
    "temperature": number,
    "oxygen": number,

}

const initialState: ALertCountType = {
    "pulse": 0,
    "bloodPressure": 0,
    "temperature": 0,
    "oxygen": 0,

}

export const alertCountSlice = createSlice({
    name: "alertCount",
    initialState,
    reducers: {
        addCount(state, action: PayloadAction<"pulse" | "bloodPressure" | "oxygen" | "temperature">) {

            const key = action.payload;

            state[key] += 1;
        },
        resetCounts() {
            return initialState;
        },

    }


})

export const {addCount,resetCounts} = alertCountSlice.actions;
export default alertCountSlice.reducer;