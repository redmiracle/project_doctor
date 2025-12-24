import {newMetricData} from "@/type";

export const checkDataMetric=(metricData:newMetricData)=>{
    const isNormal = (metric: string, from: number, to: number) =>
        Number(metric) > from && Number(metric) <= to


    const newData = {
        heartRate: {
            metric: "",
            unit: "bpm",
            status: "warning",

        },
        bloodPressure: {
            metric: "",
            unit: "mmHg",
            status: "warning",

        },
        temperature: {
            metric: "",
            unit: "c",
            status: "normal",
        },
        oxygenSaturation: {
            metric: "",
            unit: "%",
            status: "normal",
        }

    }



    const hearRate = metricData.heartRate
    newData.heartRate.metric = hearRate
    newData.heartRate.status =isNormal(hearRate,60,120) ? "normal" : "warning"

    const systolic=metricData.systolicBloodPressure
    const diastolic= metricData.diastolicBloodPressure
    newData.bloodPressure.metric = `${systolic}/${diastolic}`
    newData.bloodPressure.status = isNormal(systolic,90,120)&&isNormal(diastolic,60,80) ? "normal" : "warning"

    const temperature=metricData.bodyTemperature
    newData.temperature.metric = temperature
    newData.temperature.status =isNormal(hearRate,35.5,37.2) ? "normal" : "warning"

    const oxygenSaturation=metricData.oxygenSaturation
    newData.oxygenSaturation.metric = metricData.oxygenSaturation
    newData.oxygenSaturation.status=isNormal(oxygenSaturation,92,100) ? "normal" : "warning"

    return newData
}
