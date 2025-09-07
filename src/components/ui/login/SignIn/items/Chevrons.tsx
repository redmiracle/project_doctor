import {chevronLeftIcon, chevronRightIcon} from "@/featurs/icons/icons";

interface Props {
    type: string;
    chevronChange: (type:"plus"|"minus") => void;

}


export function Chevron({type,chevronChange}: Props) {
    switch (type) {
        case "right":
            return (
                <div onClick={()=>chevronChange("plus")}>
                    {chevronRightIcon()}
                </div>

            )
        case "left":
            return (
                <div onClick={()=>chevronChange("minus")}>
                    {chevronLeftIcon()}
                </div>

            )
        case "rightLeft":
            return (
                <div>
                    <div onClick={()=>chevronChange("minus")}>
                        {chevronLeftIcon()}
                    </div>
                    <div onClick={()=>chevronChange("plus")}>
                        {chevronRightIcon()}
                    </div>

                </div>
            )

    }

}

