import {patientMetricDataType} from "@/type";

export const metricData:patientMetricDataType[] =[
    {
        icon:"/heartRate.png",
        name:"Heart Rate",
        type:"normal",
        metrics:"heartRate",
        metricType:"bpm",
    },
    {
        icon:"/Frame.png",
        name:"Blood Pressure",
        type:"normal",
        metrics:"bloodPressure",
        metricType:"mmHg",
    },
    {
        icon:"/thermometer.png",
        name:"Temperature",
        type:"warning",
        metrics:"temperature",
        metricType:"c",
    },
    {
        icon:"/lungs.png",
        name:"Oxygen Saturation",
        type:"normal",
        metrics:"oxygenSaturation",
        metricType:"%",
    },

]