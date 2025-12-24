'use client'

import {useAppDispatch, useAppSelector} from "@/lib/app/hooks";
import {changeMetricData, changeMetricLoadingStatus} from "@/lib/app/slices/metricReportSlice";
import React, {startTransition, useActionState, useEffect, useState} from "react";
import {noIcon, okIcon} from "@/lib/icons/icons";
import Spinner from "@/featurs/spinner/Spinner";
import {newMetricData} from "@/type";
import {addMetric} from "@/lib/serverActions/addMetric";
import {checkDataMetric} from "@/components/common/checkAlertData";


import { useRouter } from "next/navigation";


export default function ReportButton() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const isMetricLoading = useAppSelector(state => state.metricReport.isLoading)
    const [isClicked, setIsCLiked] = useState(false)
    const [newMetricData, setNewMetricData] = useState<Partial<newMetricData>>({})
    const [state, action, pending] = useActionState(addMetric, null);


    const getRandomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getRandomFloat = (min: number, max: number) => {
        return (Math.random() * (max - min) + min).toFixed(1);
    }


    const handleCLick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isClicked) {
            const metricData: newMetricData = {
                heartRate: getRandomInt(40, 200) + "",
                systolicBloodPressure: getRandomInt(80, 180) + "",
                diastolicBloodPressure: getRandomInt(50, 100) + "",
                bodyTemperature: getRandomFloat(35, 42) + "",
                oxygenSaturation: getRandomInt(70, 90) + "",

            }
            const newData = checkDataMetric(metricData)

            setNewMetricData({...newData, ...metricData})


            dispatch(changeMetricLoadingStatus(true))


            setTimeout(() => {

                dispatch(changeMetricData(newData))
                setIsCLiked(!isClicked)

                dispatch(changeMetricLoadingStatus(false))
            }, 1000)


        } else {
            switch (e.currentTarget.id + "") {
                case "no":
                    setIsCLiked(!isClicked)
                    break;
                case "ok":
                    startTransition(() => action(newMetricData))
                    break;
                default:
                    console.log("error")
            }
        }
    }
    useEffect(() => {
        console.log(pending);
        if (state) {
            router.refresh()
        }
    }, [pending, state]);


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
                !pending ?
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
                    </div> :
                    <div>
                        <Spinner/>
                    </div>


            }
        </div>
    )
}