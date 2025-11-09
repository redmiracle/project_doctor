import {patientMetricDataType} from "@/type";

export const metricData:patientMetricDataType[] =[
    {
        icon:"/heartRate.png",
        name:"Heart Rate",
        type:"normal",
        metrics:"72",
        metricType:"bpm",
    },
    {
        icon:"/Frame.png",
        name:"Blood Pressure",
        type:"normal",
        metrics:"120/80",
        metricType:"mmHg",
    },
    {
        icon:"/thermometer.png",
        name:"Blood Temperature",
        type:"warning",
        metrics:"38.2",
        metricType:"c",
    },
    {
        icon:"/lungs.png",
        name:"Oxygen Saturation",
        type:"normal",
        metrics:"95",
        metricType:"%",
    },

]