import {alertDataType} from "@/type";
import {JSX} from "react";
import Image from "next/image";
import {getFormStyle} from "@/components/common/alertFormStyle";
import ALertStatsControler from "@/components/ui/notification/ALertStatsControler";


interface Props {
    alertListData: alertDataType[]
}

export default function AlertsList({alertListData}: Props): JSX.Element {


    return (
        <div className={"shadow-xl border-1 border-gray-200 pt-3 px-5 rounded-lg"}>

            <h2 className={"text-2xl text-gray-400 pb-1 mb-2"}>Active Alert</h2>
            {alertListData.map((alertData,key
            ) => {

                const {color, borderColor, icon} = getFormStyle(alertData.problem)
                function pad(n){ return n.toString().padStart(2,'0'); }
                const d = new Date(alertData.alarmTime);
                const localHHMM = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
                return (

                    <section
                        className={`border-2 border-gray-200 p-3 rounded-lg mb-2 flex items-start ${color} ${borderColor}`}
                        key={key}>
                        <ALertStatsControler name={alertData.problem}/>
                        <Image src={icon} width={32} height={32} alt={alertData.problem} className={"m-3"}/>

                        <ul>
                            {"name" in alertData && alertData.name && (
                                <>
                                    <li className={"flex text-[#1F2937] text-xl mb-1"}>
                                        <p className={"me-[0.5em]"}>{alertData.name}</p>
                                        <p>{alertData.lastname}</p>
                                    </li>
                                    <li className={"text-[#4B5563] text-sm mb-3"}>ID: {alertData.patientId}</li>
                                </>
                            )}

                            <li className={"flex items-center"}>
                                <p className={"me-[0.8em] text-lg font-bold"}>{alertData.problem}</p>
                            </li>


                        </ul>
                        <p className={"text-sm ms-auto"}>{localHHMM}</p>
                    </section>

                )
            })}


        </div>
    )
}