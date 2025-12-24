'use client'

import {startTransition, useActionState, useEffect} from "react";
import {getMorePatientInfo} from "@/lib/serverActions/getPatietInformation";
import {redirect} from "next/navigation";

export function GetPatientInformation() {
    const [state,action,pending] =useActionState(getMorePatientInfo,"");
    useEffect(()=>{
        if(state){
            redirect("/doctor/patientInfo")
        }
    },[state]);

    return (
        <div onClick={()=>startTransition(()=>action("6907c95aeb60ed5e98832596"))}>
            <p>Get more info</p>
        </div>
    )


}