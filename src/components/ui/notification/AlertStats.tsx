import Image from "next/image";
import AlertsCount from "@/components/ui/notification/AlertCount";
import {alertStatsType} from "@/type";


export default function AlertStats() {


    const alertStats:alertStatsType[] = [
        {
            icon: "/heartRate.png",
            name: "pulse",
            text: "Pulse",
            bgColor: "bg-[#F0E1E1]",
        },
        {
            icon: "/container.png",
            name: "bloodPressure",
            text: "Blood Pressure",
            bgColor: "bg-[#F0E8DD]",
        },
        {
            icon: "/thermometer.png",
            name: "temperature",
            text: "Temperature",
            bgColor: "bg-[#F0E8DD]",
        },
        {
            icon: "/lungs.png",
            name: "oxygen",
            text: "Oxygen saturation",
            bgColor: "bg-[#E6D8E6]",
        },


    ]


    return (
        <div className={"shadow-xl border-1 border-gray-200 pt-3 px-5 rounded-lg"}>
            <h2 className={"text-2xl text-gray-400 pb-1 mb-2"}>Alert Stats</h2>
            <ul>
                {alertStats.map((stats) => {
                    console.log(stats.bgColor);
                    return (
                        <li key={stats.name} className={`flex items-start `}>
                            <div
                                className={`${stats.bgColor} h-[45px] w-[45px] flex justify-center items-center border-1 border-gray-200 leading-none  rounded-full`}>
                                <Image src={stats.icon} width={24} height={24} alt={stats.name}  className={"block"}></Image>

                            </div>
                            <div>
                                <p>{stats.text}</p>
                                <AlertsCount name={stats.name}  />
                            </div>
                        </li>
                    )
                })}

            </ul>
        </div>

    )
}