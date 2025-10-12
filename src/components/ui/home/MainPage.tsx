import Link from "next/link";
import LoginTest from "@/components/ui/home/LogInTest";



export default function MainPage() {


    return (
        <div>
            <LoginTest/>
            <section className={"pt-20"}>
                <h1 className={"font-poppins text-6xl font-semibold tracking-[0.06em] " +
                    "text-sky-700 w-full inline-block ms-auto text-right pe-10"}>MediSync</h1>
                <h2 className={"text-center leading-relaxed text-2xl mt-10 text-gray-500"}>“Connecting People and Care in Real Time.”</h2>
            </section>
            <section>
                <div className={"border-2 border-gray-200 rounded-lg p-3 bg-sky-500 text-white w-1/5 mx-auto  " +
                    "flex items-center justify-center mt-5"}>
                <Link href="/signIn">Get Start</Link>
                </div>
            </section>

        </div>
    )
}