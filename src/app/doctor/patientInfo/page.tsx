import PatientInfo from "@/components/ui/patietInfo/PatientInfo";

export default async function page({params}:{
    params:Promise<{id:string}>
}) {
    const {id} = await params;

    return (
        <div>
            {id}
            <PatientInfo/>
        </div>
    )
}