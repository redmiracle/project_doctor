'use client'

import {JSX, startTransition, useEffect, useState} from "react";
import {logOut} from "@/lib/serverActions/login";
import {headerLinksType} from "@/type";

import Link from "next/link";

interface Props {
    headerLink: headerLinksType[]
}

export default function RoleHeader({headerLink}: Props): JSX.Element {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkWidth = () => {
            if (window.innerWidth <1024) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        checkWidth();
        window.addEventListener('resize', checkWidth);
        return () => window.removeEventListener('resize', checkWidth);

    }, [])

    return (
        <div>
            {
                !isMobile ?
                    <div className="bg-white shadow border-b-1 border-gray-200 flex items-center justify-between py-3 px-7 text-[18px]">
                        <div>
                            {headerLink.map(link => {
                                return (
                                    <Link key={link.name} href={link.pathLink} className={"me-2"}>{link.name}</Link>
                                )

                            })}
                        </div>
                        <button onClick={() => startTransition(() => logOut())}>log Out</button>
                    </div>
                    :
                    <div className="bg-white shadow border-t-1 border-gray-200 fixed bottom-0 left-0 right-0 flex items-center justify-around py-2">
                        {headerLink.map(link => {
                            return (
                                <div key={link.name}>

                                    <Link href={link.pathLink} className={"flex flex-col items-center justify-between h-full "} >
                                        {link.icon}
                                        {link.name}</Link>
                                </div>
                            )

                        })}

                    </div>
            }
        </div>

    )
}