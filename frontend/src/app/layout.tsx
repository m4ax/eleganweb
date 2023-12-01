import "../../styles/index.css"; 
import { useEffect } from "react";
import ScrollToTop from "../../components/hooks/scroll-to-top";
import { animationCreate } from "../../components/utils/utils";
import type { Metadata } from 'next'

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export const metadata: Metadata = {
  title: 'Elegan | Data Onboarding & Migration Tools',
  description: 'We facilitate seamless data migration for transferring large volumes of CSV, JSON, and SQL data, tailored to meet the needs of SaaS providers, enterprises, and SMBs',
}


export default function App({
  children,
}:{ children: React.ReactNode }) 
{
  //This forced a re-render of the page, which is not what we want.
  // useEffect(() => {
  //   setTimeout(() => {
  //     animationCreate();
  //   }, 500);
  // }, []);
  
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700|Rubik:400,500,700"
          rel="stylesheet" />
        <meta name="theme-color" content="#5e2afa"/>
      </head> 
      <body>
        {children}
        <ScrollToTop />
        </body>
    </html>
  )
}
