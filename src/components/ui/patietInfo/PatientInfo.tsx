import PersonalInfo from "@/components/ui/patietInfo/items/PersonalInfo";
import {patientInfo} from "@/components/common/patientInfo";
import ActualMetrics from "@/components/ui/patietInfo/items/ActualMetrics";
import {metricData} from "@/components/common/metricData";


export default function PatientInfo() {
    const fetchPatientInfo = patientInfo
    const fetchMetricData = metricData
    return (
        <div className="grid grid-cols-[1fr_2fr] gap-5 px-10">
            <PersonalInfo patientInfoData={fetchPatientInfo}/>
            <ActualMetrics metricData={fetchMetricData}/>
        </div>
    )

}