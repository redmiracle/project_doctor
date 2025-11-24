'use client'

import {patientMetricDataType} from "@/type";
import Image from "next/image";

import {useAppSelector} from "@/lib/app/hooks";
import Spinner from "@/featurs/spinner/Spinner";

interface Props {
    metricData: patientMetricDataType[]

}




export default function ActualMetrics({metricData}: Props) {

    const metrics = useAppSelector(state => state.metricReport)


    return (
        <div className="grid grid-cols-2  gap-4">
            {metricData.map(data => (

                    <div key={data.name} className="bg-white rounded-lg p-4">
                        <section className={"flex items-center mb-3"}>
                            <div className={"w-[36px] h-[36px] bg-[#EFF6FF] flex items-center justify-center rounded-lg me-2"}>
                                <Image width={20} height={20} src={data.icon} alt={data.name}/>
                            </div>
                            <p>{data.name}</p>
                            {!metrics.isLoading&&
                            <div className={`${metrics.data[data.metrics].status==="normal"?"bg-[#f0fdf4]":"bg-red-100"} ms-auto mb-auto p-1 rounded-lg text-sm`}   >
                                <p>{metrics.data[data.metrics].status}</p>
                            </div>
                            }
                        </section>
                        <section >
                            {!metrics.isLoading?
                            <div className={"flex"}>
                            <p className={"text-xl font-bold me-2"}>{metrics.data[data.metrics].metric}</p>
                            <p className={"mt-auto text-sm"}>{metrics.data[data.metrics].unit}</p>
                            </div>:
                             <Spinner />
                        }
                        </section>


                    </div>
                )
            )


            }

        </div>
    )

}