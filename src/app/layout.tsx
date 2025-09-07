
import "../styles/globals.css";
import React from "react";
import {Providers} from "@/app/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
      Hello,i am Global layout
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}
