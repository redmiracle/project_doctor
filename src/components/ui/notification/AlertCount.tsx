'use client'

import {useAppSelector} from "@/lib/app/hooks";



interface Props {
    name:"pulse" | "bloodPressure" | "oxygen" | "temperature";
}

export default function AlertsCount ({name}: Props) {
    const count=useAppSelector(count=>count.alertCount);

    return (
        <div>
            {count[name]}
        </div>
    )
}