'use client'
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import { metricTrendsDataType} from "@/components/ui/patietInfo/items/trends/Trends";

interface Props{
    metricTrendsData: metricTrendsDataType;
}



export default function MetricTrends({metricTrendsData}:Props) {
    const getKeyData=(metricTrendsData:metricTrendsDataType) => {
        const item=metricTrendsData[0]
        return 'btm'in item?'btm':"°C" in item?"°C":"%"in item?"%":"sb" in item?"sb":""
    }

    const getColorData=(key:string) => {
        const btm=key==="btm"
        const deg=key==="°C"
        const procent=key ==="%"
        const sb=key==="sb"
        const db=key==="db"

        return btm?"#F87C63":deg?"#A6D784":procent?"#5154DB":sb?"#F87C63":db?"#5154DB":""
    }
    const getHeroData=(key:string) => {
        const btm=key==="btm"
        const deg=key==="°C"
        const procent=key ==="%"
        const sb=key==="sb"

        return btm?"Heart Rate":deg?"Body temperature":procent?"Oxygen Separation": sb?"Bloody Pressure":""
    }



    const keyData=getKeyData(metricTrendsData);
    const colorData=getColorData(keyData);
    const heroData=getHeroData(keyData);


    return (
        <div className="ps-10 pt-2 pe-10 mt-3">
            <h2 className={"font-semibold text-lg mb-2"}>{heroData}</h2>
            <LineChart
                style={{width: '628px', maxWidth: '700px', height: '347px', maxHeight: '50vh', aspectRatio: 1.618}}
                responsive
                data={metricTrendsData}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis
                    dataKey="time"
                    interval="preserveStartEnd"
                    ticks={[
                        metricTrendsData[0]?.time,
                        metricTrendsData[metricTrendsData.length - 1]?.time
                    ]}

                />
                <YAxis width="auto"/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey={keyData} stroke={colorData} activeDot={{r: 8}}/>
                {   "db" in metricTrendsData[0]&&
                    <Line type="monotone" dataKey={"db"} stroke={getColorData("db")} activeDot={{r: 8}}/>
                }
            </LineChart>
        </div>
    )

}