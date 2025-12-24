'use client'
import {bloodPressureType} from "@/components/ui/patietInfo/items/trends/Trends";
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

interface Props {
    bloodPressure:bloodPressureType[]
}


export default function BloodPressure ({bloodPressure}:Props) {
    return (
        <div className="ps-10 pt-2 pe-10">
            <LineChart
                style={{width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618}}
                responsive
                data={bloodPressure}
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
                        bloodPressure[0]?.time,
                        bloodPressure[bloodPressure.length - 1]?.time
                    ]}

                />
                <YAxis width="auto"/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="sb" stroke="#82ca9d" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="db" stroke="#82ca9d" activeDot={{r: 8}}/>
            </LineChart>
        </div>
    )
}