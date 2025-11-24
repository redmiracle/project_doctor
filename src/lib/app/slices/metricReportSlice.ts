import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface metricType {
    metric: string;
    unit: string;
    status: "normal" | "warning"|"";
}


export interface MetricReportSliceType {
    isLoading: boolean,
    data: {
        heartRate: metricType
        bloodPressure: metricType
        temperature: metricType,
        oxygenSaturation: metricType,
    }
}


export type MetricKeys = keyof MetricReportSliceType["data"];

const initialState: MetricReportSliceType = {
    isLoading: false,
    data: {
        heartRate: {
            metric: "-//-",
            unit: "bpm",
            status: "",

        },
        bloodPressure: {
            metric: "-//-",
            unit: "mmHg",
            status: "",

        },
        temperature: {
            metric: "-//-",
            unit: "c",
            status: "",
        },
        oxygenSaturation: {
            metric: "-//-",
            unit: "%",
            status: "",
        }
    }
}


const metricReportSlice = createSlice({
        name: "metricReportSlice",
        initialState,
        reducers: {
            changeMetricLoadingStatus: (state, action:PayloadAction<boolean>) => {
                state.isLoading=action.payload;
            },
            changeMetricData: (state,action) => {
                state.data = {...state.data, ...action.payload};
            }

        }
    }
)


export const {changeMetricLoadingStatus, changeMetricData} = metricReportSlice.actions;

export default metricReportSlice.reducer;