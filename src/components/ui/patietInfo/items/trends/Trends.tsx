import MetricTrends from "@/components/ui/patietInfo/items/trends/MetricTrends";

import {getData} from "@/lib/serverActions/getData";



export interface heartRateType {
    btm: number;
    time: string;
}

export interface bodyTemperatureType {
    "°C": number;
    time: string;
}

export interface oxygenSaturationType {
    "%": number;
    time: string;
}

export interface bloodPressureType {
    time: string;
    sb: number
    db: number
}

export type metricTrendsDataType =
    heartRateType[]
    | bloodPressureType[]
    | oxygenSaturationType[]
    | bodyTemperatureType[];

interface newDataType {
    heartRate: heartRateType[];
    bodyTemperature: bodyTemperatureType[];
    oxygenSaturation: oxygenSaturationType[];
    bloodPressure: bloodPressureType[];


}


export default async function Trends() {


    const newData: newDataType = {
        heartRate: [],
        bodyTemperature: [],
        oxygenSaturation: [],
        bloodPressure: [],

    }
    const data = await getData();
    if (data) {
        data.map((item) => {
            const date = new Date(item.measurementTime);
            date.setHours(date.getHours() + 2);

            const formatted =
                date.toLocaleDateString('he-IL') +
                ' ' +
                date.toLocaleTimeString('he-IL', {
                    hour: '2-digit',
                    minute: '2-digit',
                });
            newData.heartRate.push({btm: item.heartRate, "time": formatted});
            newData.bodyTemperature.push({"°C": item.bodyTemperature, "time": formatted});
            newData.oxygenSaturation.push({"%": item.oxygenSaturation, time: formatted});
            newData.bloodPressure.push({
                time: formatted,
                sb: item.systolicBloodPressure,
                db: item.diastolicBloodPressure
            })

        })
    }

    return (
        <div className={"grid grid-cols-2 gap-2"}>
            <MetricTrends metricTrendsData={newData.heartRate}/>
            <MetricTrends metricTrendsData={newData.bloodPressure}/>
            <MetricTrends metricTrendsData={newData.bodyTemperature}/>
            <MetricTrends metricTrendsData={newData.oxygenSaturation}/>

        </div>
    )

}