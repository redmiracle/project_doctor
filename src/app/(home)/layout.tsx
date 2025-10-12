

import React from "react";
import HeaderMain from "@/components/layuot/headerMain/HeaderMain";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";




export default async function Layout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const cookie=await cookies();
    const userData=cookie.get("userData")
    if (userData) {

        const parseData=JSON.parse(userData.value);
        redirect(`/${parseData.role}`);

    }



    return (

        <header
        >
         <HeaderMain/>
        {children}
        </header>

    );
}