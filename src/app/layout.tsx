import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";



export const metadata: Metadata = {
  title: "Keda Marketing || Africa's No 1 Real Estate Marketing Agency",
  description: "Keda Marketing offers Facebook advertising, website design, video editing, digital marketing, content management, data analysis, and AI automated workflows.",
  icons: {
  icon: "/images/keda-favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
