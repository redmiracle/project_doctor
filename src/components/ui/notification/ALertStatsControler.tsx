'use client'

import {addCount, resetCounts} from "@/lib/app/slices/ALertCountSlice";
import {useAppDispatch} from "@/lib/app/hooks";
import {useEffect} from "react";

interface Props {
    name: string;
}

export default function  ALertStatsControler({name}:Props) {
    const dispatch = useAppDispatch();

    const getNameCor = (data: string) => {
        if (data.startsWith("Heart")) {
            return "pulse"
        } else if (data.startsWith("Body")) {
            return "temperature"
        } else if (data.startsWith("Oxygen")) {
            return "oxygen"
        } else {
            return "bloodPressure"
        }
    }

    

    useEffect(() => {
        dispatch(addCount(getNameCor(name)))
        return () => {
            dispatch(resetCounts())
        }

    })




   return  null

}