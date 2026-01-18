"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

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