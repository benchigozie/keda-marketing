import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Script from "next/script";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { Suspense } from "react";




export const metadata: Metadata = {
  title: {
    default: "Keda Marketing || Building Billion Dollar Brands with Digital Marketing",
    template: "%s | Keda Marketing",
  },
  description: "Keda Marketing offers Facebook advertising, website design, video editing, digital marketing, content management, data analysis, and AI automated workflows.",
  icons: {
    icon: "/images/keda-mini.png",
  },
};



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
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body
        className="antialiased text-base md:text-lg"
      >
        <Header />
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
