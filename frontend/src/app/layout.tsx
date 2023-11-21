"use client"
import "../../styles/index.css"; 
import { useEffect } from "react";
import ScrollToTop from "../../components/hooks/scroll-to-top";
import { animationCreate } from "../../components/utils/utils";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
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
        <title>Elegan Data: Pioneering AI-Powered Data Migration Solutions</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700|Rubik:400,500,700"
          rel="stylesheet" />
        <meta name="theme-color" content="#5e2afa"/>
        <meta name="description" content="Migrate messy data with AI-powered data migration tool and transform your business operations with our solutions for CSV, JSON, Excel and more."></meta>
      </head> 
      <body>
        {children}
        <ScrollToTop />
        </body>
    </html>
  )
}
