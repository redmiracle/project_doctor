import {ReactNode} from "react";
import {MetricKeys} from "@/lib/app/slices/metricReportSlice";


export interface cookiesDataType{
    token:string,
    role:string,
    id:string,
    encoder:string,
    patientId:string,
}

export interface headerLinksType {
    pathLink: string;
    name: string;
    icon: ReactNode;
}



export interface alertDataType {
    "patientId": string,
    "metricsId": string,
    "name": string,
    "lastname": string,
    "hospital": string,
    "alarmTime": string,
    "problem": string,

}




export interface alertStatsType {

    icon: string,
    name: "pulse" | "temperature" | "bloodPressure" | "oxygen",
    text: string,
    bgColor: string,

}

export interface loginDataType {
    login: string;
    password: string;
}

export interface loginResType {
    "id": string,
    "role": string,
    "name": string,
    "lastName": string,
    "email": string,

}

export interface patientInfoType {
    "name": string,
    "lastName": string,
    "phone": string,
    "bloodGroup": string,
    "allergic": string,
}

export interface patientMetricDataType {
    icon: string,
    name: string,
    type: string,
    metrics: MetricKeys ,
    metricType:string

}

interface newMetricData {
    "heartRate": string,
    "systolicBloodPressure": string,
    "diastolicBloodPressure": string,
    "bodyTemperature": string,
    "oxygenSaturation": string,

}
