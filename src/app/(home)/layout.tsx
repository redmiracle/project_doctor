

import React from "react";
import HeaderMain from "@/components/layuot/headerMain/HeaderMain";

export default function Layout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <header
        >
         <HeaderMain/>
        {children}
        </header>

    );
}