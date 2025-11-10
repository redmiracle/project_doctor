import AlertsList from "@/components/ui/notification/AlertList";

import AlertStats from "@/components/ui/notification/AlertStats";
import {alertDataForDoctor} from "@/components/common/alertDataForDoctor";
import {alertDataForPacient} from "@/components/common/alertDataForPacient";
interface Props {
    isForDoctor:boolean
}

export default async function AlertPage({isForDoctor}:Props) {
    //This is place for fetch request
    // const alertListData = alertDataForDoctor


    const credentials = `panna.grown@example.com:5678`
    const encoder = Buffer.from(credentials).toString("base64");
    try {
        const response = await fetch("http://localhost:8080/account/doctors/68f8a8062e4ebe6ed85ccab5/alarms", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${encoder}`
            }
        })

        if(response.ok){
            const data = await response.json();
            console.log(data)
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

        console.log(error.message);
    }






}