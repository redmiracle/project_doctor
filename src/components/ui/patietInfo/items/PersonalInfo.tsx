import Image from "next/image";
import {patientInfoType} from "@/type";
import {JSX} from "react";

interface Props{
    patientInfoData:patientInfoType
}


export default function PersonalInfo({patientInfoData}: Props): JSX.Element {
    const dataPatient = Object.keys(patientInfoData) as (keyof patientInfoType)[];



    return (
        <div className="p-5 bg-white rounded-lg">

            <section className={"flex mb-3"}>
                <div className={"w-[46px] h-[46px] bg-[#EFF6FF] rounded-lg flex items-center justify-center me-4"}>
                    <Image src={"/Frame.png"} alt={"patient-info"} width={25} height={25}/>
                </div>
                <div>
                     <h2 className={"font-semibold"}>Patient Information</h2>
                     <p className={"text-[#4B5563]"}>Current patient details</p>
                </div>
            </section>
            <section className={"flex"}>
                <div className={"grid grid-cols-2 gap-2"}>
                    {dataPatient.map(info=>
                        <div key={info}>
                            <h3 className={"text-[#4B5563]"}>{info}</h3>
                            <p className={"font-bold"}>{patientInfoData[info]}</p>
                        </div>

                    )}
                </div>
            </section>
        </div>
    )
}