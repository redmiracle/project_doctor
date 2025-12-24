'use server'

import {cookies} from "next/headers";
import {cookiesDataType} from "@/type";

export const getMorePatientInfo = async (_:string,patientId: string) => {
    try {
        const cookie = await cookies()
        const parseCookie = await JSON.parse(cookie.get("userData")!.value) as cookiesDataType
        if (parseCookie) {
            parseCookie.patientId = patientId
            cookie.set("userData", JSON.stringify(parseCookie), {
                path: "/",
                httpOnly: true,
                sameSite: "strict"
            });
        }
        return true;
    }
    catch {
        return false;

    }
}