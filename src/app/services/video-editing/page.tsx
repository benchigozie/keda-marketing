import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import GetStartedVideo from "@/components/GetStartedVideo"
import Pricing from "@/components/Pricing"
import VideoEditingHero from "@/components/VideoEditingHero"
import VideoShowcase from "@/components/VideoShowcase"
import WallOfLove from "@/components/WallOfLove"
import WhatYouGetVideo from "@/components/WhatYouGetVideo"
import WhyOutsource from "@/components/WhyOutsource"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Editing Services",
  description: "Enhance your brand with Keda Marketing's video editing services. We specialize in creating engaging videos that convert.",
};


function page() {
  return (
    <div>
        <VideoEditingHero />
        <VideoShowcase />
        <GetStartedVideo />
        <WhyOutsource />
        <WallOfLove />
        <WhatYouGetVideo />
        <Pricing />
        <Contact />
        <Footer />
    </div>
  )
}

export default page