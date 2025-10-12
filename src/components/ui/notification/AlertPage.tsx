import AlertsList from "@/components/ui/notification/AlertList";

import AlertStats from "@/components/ui/notification/AlertStats";
import {alertDataForDoctor} from "@/components/common/alertDataForDoctor";
import {alertDataForPacient} from "@/components/common/alertDataForPacient";
interface Props {
    isForDoctor:boolean
}

export default function AlertPage({isForDoctor}:Props) {
    //This is place for fetch request
    const alertListData = alertDataForDoctor
    return (
        <div>
            <h2>Emergency Alerts</h2>
            <section className={"grid grid-cols-3 gap-4"}>
                <div className="col-span-2">
                    <AlertsList alertListData={isForDoctor?alertDataForDoctor:alertDataForPacient} />
                </div>
                <AlertStats/>
            </section>

            {/*<QuickActions/>*/}
        </div>
    )
}