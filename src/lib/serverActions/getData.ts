import {baseUrl} from "@/components/common/const";
import {cookies} from "next/headers";
import {cookiesDataType} from "@/type";

export const getData=async ()=> {
    try {
        const cookie = await cookies()
        const parseCookies = JSON.parse(cookie.get("userData")!.value) as cookiesDataType
        if (!parseCookies) {
            return
        }
        const {patientId,encoder}=parseCookies

        const response = await fetch(`${baseUrl}/measurements/${patientId}/period?dateFrom=2025-01-01&dateTo=2026-01-01`,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `basic ${encoder}`,

                }
            })

        if(!response.ok){
            console.log(response.status)
        }
        const data=await response.json()
        return data



    }
    catch (error) {
        console.log(error.message)

    }
}