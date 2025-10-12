import { configureStore} from '@reduxjs/toolkit'
import alertCount from "@/lib/app/slices/ALertCountSlice";

export const store = configureStore({
    reducer: {
       alertCount,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch