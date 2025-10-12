import React from "react";
import RoleHeader from "@/components/layuot/roleHeder/RoleHeader";
import {cookies} from "next/headers";
import {doctorLinks, patientLinks} from "@/components/common/MobileHeaderLinks";

import {redirect} from "next/navigation";

export default async function Layout({
                                         children,
                                     }: Readonly<{
    children: React.ReactNode;
}>) {

    const cookie = await cookies()
    const data = cookie.get("userData")
    if (data) {
        try {
            const parseData = JSON.parse(data.value);
            const role = parseData.role;
            const links = role === "doctor" ? doctorLinks : patientLinks;
            return (
                <header
                ><RoleHeader headerLink={links}/>
                    {children}
                </header>

            );
        } catch {
            redirect("/")
        }


    }
}