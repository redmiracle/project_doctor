import Image from "next/image";
import {cookiesDataType, patientInfoType} from "@/type";

import {patientInfo} from "@/components/common/patientInfo";
import {cookies} from "next/headers";
import {baseUrl} from "@/components/common/const";


export default async function PersonalInfo() {
    const cookie = await cookies()
    const parsData = await JSON.parse(cookie.get("userData")!.value) as cookiesDataType
    const {patientId} = parsData

    try {
        const response = await fetch(`${baseUrl}/userInfo/${patientId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })


        if (response.ok) {
            const data = await response.json()
            const dataPatient = Object.keys(data) as (keyof patientInfoType)[];


            return (
                <div className="p-5 bg-white rounded-lg">

                    <section className={"flex mb-3"}>
                        <div
                            className={"w-[46px] h-[46px] bg-[#EFF6FF] rounded-lg flex items-center justify-center me-4"}>
                            <Image src={"/Frame.png"} alt={"patient-info"} width={25} height={25}/>
                        </div>
                        <div>
                            <h2 className={"font-semibold"}>Patient Information</h2>
                            <p className={"text-[#4B5563]"}>Current patient details</p>
                        </div>
                    </section>
                    <section className={"flex"}>
                        <div className={"grid grid-cols-2 gap-4"}>
                            {dataPatient.map(info =>
                                <div key={info} className={"ms-10"}>
                                    <h3 className={"text-[#4B5563]"}>{info}</h3>
                                    <p className={"font-bold"}>{data[info]}</p>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            )
        } else {
            return (
                <div className="p-5 bg-white rounded-lg">
                    <section className={"flex mb-3 h-[400px]"}>
                        <div
                            className={"w-[46px] h-[46px] bg-[#EFF6FF] rounded-lg flex items-center justify-center me-4"}>
                            <Image src={"/Frame.png"} alt={"patient-info"} width={25} height={25}/>
                        </div>
                        <div>
                            <h2 className={"font-semibold"}>Patient Information</h2>
                            <p className={"text-[#4B5563]"}>Current patient details</p>
                        </div>
                    </section>
                </div>
            )

        }
    } catch (error) {
        console.log(error);
    }


}