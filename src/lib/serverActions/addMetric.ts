'use server'

import {cookiesDataType, newMetricData} from "@/type";
import {cookies} from "next/headers";

import {baseUrl} from "@/components/common/const";

export async function addMetric(_:unknown, metricData:Partial<newMetricData>){

    const cookie = await cookies();
    const parsCookies = await JSON.parse(cookie.get("userData")!.value) as cookiesDataType;
    if(!parsCookies){
           console.log ("data error");
    }

    const {patientId,encoder}=parsCookies

    try{
        const response = await fetch(`${baseUrl}/measurements/${patientId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `basic ${encoder}`,
                },
                body:JSON.stringify(metricData),


            });
        if(response.status === 401){
            console.log("error 401");
        }

        return true


    }
    catch(error){

        console.log("Could not add metric data");
        return false;
    }



}