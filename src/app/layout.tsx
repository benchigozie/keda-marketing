import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";




export const metadata: Metadata = {
  title: "Keda Marketing || Africa's No 1 Real Estate Marketing Agency",
  description: "Keda Marketing offers Facebook advertising, website design, video editing, digital marketing, content management, data analysis, and AI automated workflows.",
  icons: {
    icon: "/images/keda-mini.png",
  },
};

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;


  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}', {
      page_path: window.location.pathname,
    });
  `}
        </Script>
      </head>
      <body
        className="antialiased text-base md:text-lg"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
