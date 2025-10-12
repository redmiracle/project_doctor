'use client'

import {addCount, resetCounts} from "@/lib/app/slices/ALertCountSlice";
import {useAppDispatch} from "@/lib/app/hooks";
import {useEffect} from "react";

interface Props {
    name: "pulse" | "bloodPressure" | "oxygen" | "temperature";
}

export default function  ALertStatsControler({name}:Props) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(addCount(name))
        return () => {
            dispatch(resetCounts())
        }

    })




   return  null

}