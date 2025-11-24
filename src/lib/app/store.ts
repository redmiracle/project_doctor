import {configureStore} from '@reduxjs/toolkit'
import alertCount from "@/lib/app/slices/ALertCountSlice";
import metricReport from "@/lib/app/slices/metricReportSlice";

export const store = configureStore({
    reducer: {
        alertCount,
        metricReport,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch