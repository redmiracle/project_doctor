import Image from "next/image";

export default function AboutUs() {
    return (
        <div className={'lg:p-3 lg:flex lg:flex-row'}>
            <div className={"overflow-hidden h-100 lg:w-6/12 lg:h-full"}>
                <Image src={'https://maxbess.sirv.com/food/doctor.jpg'} width={600} height={600} alt={"image"}
                       priority={true}
                       className={"w-full"}
                />
            </div>
            <div className={"px-4 mt-4 lg:px-3 lg:mt-0 lg:w-6/12 "}>
                <h2 className={"text-2xl text-gray-400 border-b-2 pb-1"}>About Us</h2>
                <p className={"mt-2"}>
                    This application is designed to provide real-time monitoring of a person’s vital indicators through
                    seamless integration with an external wearable device. By connecting to sensors that track key
                    health parameters such as heart rate, blood pressure, oxygen saturation, body temperature, and
                    physical activity levels, the app allows users to stay informed about their current condition at any
                    moment.
                </p>
                <p className={"mt-4"}>
                    The system operates on a continuous data stream, ensuring that all collected information is
                    displayed instantly within the user-friendly mobile interface. Real-time graphs, statistics, and
                    customizable alerts help individuals and healthcare professionals detect sudden changes or
                    irregularities that may require attention. For example, if the heart rate exceeds a safe threshold,
                    the application immediately sends a notification, allowing quick response to potential risks.
                </p>
                <p className={"mt-4"}>
                    In addition to monitoring, the application securely stores historical data, enabling users to
                    analyze long-term trends and share reports directly with doctors or caregivers. Advanced data
                    encryption guarantees privacy and security, while cloud synchronization ensures that the information
                    is accessible across multiple devices.
                </p>
                <p className={"mt-4"}>
                    This solution is particularly useful for people with chronic conditions, athletes who want to
                    optimize their performance, or anyone interested in improving their overall well-being. By combining
                    advanced sensor technology, real-time communication, and intelligent analytics, the application
                    serves as a powerful tool for proactive health management and preventive care.
                </p>

            </div>


        </div>

    )


}