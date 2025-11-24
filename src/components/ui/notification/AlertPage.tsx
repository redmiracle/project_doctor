import AlertsList from "@/components/ui/notification/AlertList";

import AlertStats from "@/components/ui/notification/AlertStats";

import {alertDataType} from "@/type";
import {baseUrl} from "@/components/common/const";
import {cookies} from "next/headers";

interface Props {
    isForDoctor:boolean
}

export default async function AlertPage({isForDoctor}:Props) {

    console.log("helo")

    const cookie = await cookies()
    const data = cookie.get("userData")
    const {id,encoder}=JSON.parse(data!.value);
    const url=isForDoctor?`${baseUrl}/doctors/${id}/alarms`:`${baseUrl}/patients/${id}/alarms/all`;



    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${encoder}`
            }
        })
        if(response.status===404){
            console.log("error 404")
        }

        if(response.ok){
            const data = await response.json() as alertDataType[];
            console.log("data", data);

            return (
                <div>
                    <h2>Emergency Alerts</h2>
                    <section className={"grid grid-cols-3 gap-4"}>
                        <div className="col-span-2">
                            <AlertsList alertListData={data} />
                        </div>
                        <AlertStats/>
                    </section>

                </div>
            )

        }


    }
    catch (error) {

        console.log("error");
    }






}