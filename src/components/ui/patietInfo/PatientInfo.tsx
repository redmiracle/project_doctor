import PersonalInfo from "@/components/ui/patietInfo/items/PersonalInfo";

import ActualMetrics from "@/components/ui/patietInfo/items/ActualMetrics";

import {cookies} from "next/headers";
import Hero from "@/components/ui/patietInfo/items/Hero";
import Trends from "@/components/ui/patietInfo/items/trends/Trends";


export default async function PatientInfo() {

    try {
        const cookie = await cookies();
        const {role} = await JSON.parse(cookie.get("userData")!.value)
        return (
            <div className={"px-10 pt-5"}>

                <Hero role={role}/>
                <div className={`${role==="patient"?`grid grid-cols-[1fr_2fr]`:""} gap-5 `}>

                    <PersonalInfo/>
                    {role==="patient" &&
                    <ActualMetrics/>
                    }

                </div>
                <Trends/>
            </div>
        )

    } catch (error) {
        console.error(error);
    }


}