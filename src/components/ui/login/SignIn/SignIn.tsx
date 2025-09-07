'use client'

import {useMemo, useState} from "react";
import {chevronLeftIcon, chevronRightIcon} from "@/featurs/icons/icons";
import {Chevron} from "@/components/ui/login/SignIn/items/Chevrons";

interface regDataPatient {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    bloodGroup: string;
    phone: string;
    hospitable: string;
    allergic: string;

}

interface regDataDoctor {
    name: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    jobTitle: string;
    hospital: string;
}


export default function SignIn() {
    const [regData, setRegData] = useState<Partial<regDataPatient | regDataDoctor>>({});
    const [stage, setStage] = useState<number>(1);
    const chevronChange=(type:"plus"|"minus")=>{
        if(type==="plus"){
            setStage(prevState => prevState + 1);
        }else if(type==="minus"){
            setStage(prevState => prevState - 1);
        }


    }


    const render = () => {



        switch (stage) {
            case 1:
                return (
                    <div>
                        1
                      <Chevron type={"right"} chevronChange={chevronChange}/>
                    </div>
                )
            case 2:
                return (
                    <div>
                        2
                        <Chevron type={"rightLeft"} chevronChange={chevronChange}/>
                    </div>
                )
            case 3:
                return (
                    <div>
                        3
                        <Chevron type={"left"} chevronChange={chevronChange}/>
                    </div>
                )
        }
    }

    return (
        <div>
            Hello,
            {render()}
        </div>
    )

}