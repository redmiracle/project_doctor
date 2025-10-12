
import "../styles/globals.css";
import React from "react";
import {Providers} from "@/app/provider";
import {Nunito_Sans, Poppins} from "next/font/google"


const nunito = Nunito_Sans({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700"],
    variable:"--font-nunito",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600", "700", "800"],
    variable: "--font-poppins",
});

export const metadata={
    title:"Home page",
    description:"this is main page"
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


    return (
    <html lang="en" className={`${nunito.className}${poppins.className}}`}>
      <body
      >
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}
