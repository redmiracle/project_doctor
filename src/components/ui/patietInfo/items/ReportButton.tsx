'use client'

import {useAppDispatch, useAppSelector} from "@/lib/app/hooks";
import {changeMetricData, changeMetricLoadingStatus} from "@/lib/app/slices/metricReportSlice";
import React, {useEffect, useState} from "react";
import {noIcon, okIcon} from "@/lib/icons/icons";
import Spinner from "@/featurs/spinner/Spinner";
import {newMetricData} from "@/type";


export default function ReportButton() {

    const dispatch = useAppDispatch()
    const isMetricLoading = useAppSelector(state => state.metricReport.isLoading)
    const [isClicked, setIsCLiked] = useState(false)
    const [newMetricData, setNewMetricData] = useState<Partial<newMetricData>>({})


    const getRandomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getRandomFloat = (min: number, max: number) => {
        return (Math.random() * (max - min) + min).toFixed(1);
    }


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

    useEffect(() => {


    }, [newMetricData])

    const handleCLick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isClicked) {

            const metricData = {
                heartRate: getRandomInt(40, 200) + "",
                systolicBloodPressure: getRandomInt(80, 180) + "",
                diastolicBloodPressure: getRandomInt(50, 100) + "",
                bodyTemperature: getRandomFloat(35, 42) + "",
                oxygenSaturation: getRandomInt(70, 90) + "",

            }

            setNewMetricData({...newData, ...metricData})

            const hearRate = metricData.heartRate
            newData.heartRate.metric = hearRate
            newData.heartRate.status =isNormal(hearRate,60,120) ? "normal" : "warning"

            const systolic=metricData.systolicBloodPressure
            const diastolic= metricData.diastolicBloodPressure
            newData.bloodPressure.metric = `${systolic}/${diastolic}`
            newData.bloodPressure.status = isNormal(systolic,90,120)&&isNormal(diastolic,60,80) ? "normal" : "warning"

            const temperature=metricData.bodyTemperature
            newData.temperature.metric = temperature
            newData.bloodPressure.status =isNormal(hearRate,35.5,37.2) ? "normal" : "warning"

            const oxygenSaturation=metricData.oxygenSaturation
            newData.oxygenSaturation.metric = metricData.oxygenSaturation
            newData..oxygenSaturation.status=isNormal(oxygenSaturation,92,100) ? "normal" : "warning"



            dispatch(changeMetricLoadingStatus(true))


            setTimeout(() => {

                dispatch(changeMetricData(newData))
                setIsCLiked(!isClicked)

                dispatch(changeMetricLoadingStatus(false))
            }, 1000)


        } else {
            switch (e.currentTarget.id + "") {
                case "no":
                    console.log(e.currentTarget.id)
                    setIsCLiked(!isClicked)
                    break;
                case "ok":
                    console.log(e.currentTarget.id)
                    break;
                default:
                    console.log("error")
            }
        }
    }


    return (
        <div>
            {!isClicked ? (

                    !isMetricLoading ?
                        <div onClick={handleCLick}
                             className={"bg-[#2563EB]/85 text-white text-center p-2 rounded-lg text-sm cursor-pointer hover:bg-[#2563EB] hover:scale-108 transition duration-200 ease-in-out active:bg-[#2563EB]/50"}>
                            Generate Report
                        </div> :
                        <div>
                            <Spinner/>
                        </div>


                ) :
                <div className={"flex"}>
                    <div id={"ok"}
                         onClick={handleCLick}
                         className={"me-2 text-green-500 cursor-pointer hover:text-green-700 hover:scale-120 active:text-green-400 transition duration-200 ease-in-out "}>
                        {okIcon("size-7")}
                    </div>
                    <div id={"no"}
                         className={"text-red-500 cursor-pointer hover:text-red-700 hover:scale-120 active:text-red-400 transition duration-200 ease-in-out"}

                         onClick={handleCLick}>
                        {noIcon("size-7")}
                    </div>
                </div>
            }
        </div>
    )
}