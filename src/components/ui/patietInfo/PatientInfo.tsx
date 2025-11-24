import PersonalInfo from "@/components/ui/patietInfo/items/PersonalInfo";
import {patientInfo} from "@/components/common/patientInfo";
import ActualMetrics from "@/components/ui/patietInfo/items/ActualMetrics";
import {metricData} from "@/components/common/metricData";
import {cookies} from "next/headers";
import Hero from "@/components/ui/patietInfo/items/Hero";


export default async function PatientInfo() {
    const fetchPatientInfo = patientInfo
    const fetchMetricData = metricData
    try {
        const cookie = await cookies();
        const {role} = await JSON.parse(cookie.get("userData")!.value)
        return (
            <div className={"px-10 pt-5"}>

                <Hero role={role}/>
                <div className={`${role==="patient"?`grid grid-cols-[1fr_2fr]`:""} gap-5 `}>

                    <PersonalInfo patientInfoData={fetchPatientInfo}/>
                    {role==="patient" &&
                    <ActualMetrics metricData={fetchMetricData}/>
                    }
                </div>
            </div>
        )

    } catch (error) {
        console.error(error);
    }


}