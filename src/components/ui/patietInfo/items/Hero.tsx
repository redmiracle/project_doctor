import ReportButton from "@/components/ui/patietInfo/items/ReportButton";


interface Props {
    role: string;
}

export default function Hero ({role}: Props) {
    return (
        <div className={"flex flex-row"}>
            <section>
                <h2 className={"font-bold mb-1"}>Patient Monitoring</h2>
                <p>Real-time vital signs and medical parameters</p>
            </section>
            <section className={"ms-auto"}>
                {
                    role === "doctor" ?
                        <></>:
                   <ReportButton/>
                }
            </section>
        </div>
    )

}