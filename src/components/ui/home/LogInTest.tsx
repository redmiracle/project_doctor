'use client'

import {startTransition} from "react";
import {logIn} from "@/lib/serverActions/login";

export default function LoginTest () {
    const getRole=(role:string)=>{
        startTransition(()=>logIn(role))
    }
    return (
        <div>
            <button onClick={() => getRole("doctor")}>Doctor</button>
            <button onClick={() => getRole("patient")}>Patient</button>
        </div>
    )
}