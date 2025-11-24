interface formStyleType {
    color: string,
    borderColor: string
    icon: string
}


export const getFormStyle = (type: string): formStyleType => {

    if (type.startsWith("Heart")) {

        return {
            color: "bg-[#FEF2F2]",
            borderColor: "border-s-[#FECACA]",
            icon: "/heartRate.png",

        }


    } else if (type.startsWith("Body")) {
        return {
            color: "bg-[#FFF7ED]",
            borderColor: "border-s-[#FED7AA]",
            icon: "/thermometer.png"

        }
    } else if (type.startsWith("Oxygen")) {
        return {
            color: "bg-[#FEF2F2]",
            borderColor: "border-s-[#FECACA]",
            icon: "/container.png"
        }
    } else {
        return {
            color: "bg-[#FEF2FD]",
            borderColor: "border-s-[#E6D8E6]",
            icon: "/lungs.png"
        }
    }
}


//
//     switch (type) {
//         case "pulse":
//             return {
//                 color: "bg-[#FEF2F2]",
//                 borderColor: "border-s-[#FECACA]",
//                 icon: "/heartRate.png",
//
//             }
//         case "temperature":
//             return {
//                 color: "bg-[#FFF7ED]",
//                 borderColor: "border-s-[#FED7AA]",
//                 icon: "/thermometer.png"
//             }
//
//         case "bloodPressure":
//             return {
//                 color: "bg-[#FEF2F2]",
//                 borderColor: "border-s-[#FECACA]",
//                 icon: "/container.png"
//             }
//
//         case "oxygen":
//             return {
//                 color: "bg-[#FEF2FD]",
//                 borderColor: "border-s-[#E6D8E6]",
//                 icon: "/lungs.png"
//             }
//
//
//     }
// }