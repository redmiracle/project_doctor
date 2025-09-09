
import "../styles/globals.css";
import React from "react";
import {Providers} from "@/app/provider";
import {Nunito_Sans} from "next/font/google"

const nunito = Nunito_Sans({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700"], // можно выбрать нужные
});

export const metadata={
    title:"Home page",
    description:"this is main page"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="en" className={nunito.className}>
      <body
      >
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}
