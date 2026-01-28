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
  openGraph: {
    title: "Keda Marketing",
    description:
      "Building billion-dollar brands with Facebook ads, high-converting websites, and AI-powered systems.",
    url: "https://kedamarketing.com",
    siteName: "Keda Marketing",
    images: [
      {
        url: "https://kedamarketing.com/images/homepagepicture.png",
        width: 1200,
        height: 630,
        alt: "Keda Marketing",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Keda Marketing",
    description:
      "Building billion-dollar brands with Facebook ads, websites, and AI workflows.",
    images: ["https://kedamarketing.com/images/homepagepicture.png"],
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
