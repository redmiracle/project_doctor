import {alertDataType} from "@/type";
import {JSX} from "react";
import Image from "next/image";
import {getFormStyle} from "@/components/common/alertFormStyle";
import ALertStatsControler from "@/components/ui/notification/ALertStatsControler";


interface Props {
    alertListData: alertDataType
}

export default function AlertsList({alertListData}: Props): JSX.Element {


    return (
        <div className={"shadow-xl border-1 border-gray-200 pt-3 px-5 rounded-lg"}>

            <h2 className={"text-2xl text-gray-400 pb-1 mb-2"}>Active Alert</h2>
            {alertListData.map((alertData
            ) => {

                const {color, borderColor, icon} = getFormStyle(alertData.indicationType)
                return (

                    <section
                        className={`border-2 border-gray-200 p-3 rounded-lg mb-2 flex items-start ${color} ${borderColor}`}
                        key={alertData.time}>
                        <ALertStatsControler name={alertData.indicationType}/>
                        <Image src={icon} width={32} height={32} alt={alertData.indicationType} className={"m-3"}/>

                        <ul>
                            {"name" in alertData && alertData.name && (
                                <>
                                    <li className={"flex text-[#1F2937] text-xl mb-1"}>
                                        <p className={"me-[0.5em]"}>{alertData.name}</p>
                                        <p>{alertData.lastName}</p>
                                    </li>
                                    <li className={"text-[#4B5563] text-sm mb-3"}>ID: {alertData.id}</li>
                                </>
                            )}

                            <li className={"flex items-center"}>
                                <p className={"me-[0.8em] text-lg font-bold"}>{alertData.indicationPatient}</p>
                                <p className={"text-sm"}>{alertData.indicationNormal}</p>
                            </li>


                        </ul>
                        <p className={"text-sm ms-auto"}>{alertData.time}</p>
                    </section>

                )
            })}


        </div>
    )
}