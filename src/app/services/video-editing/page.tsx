import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import GetStartedVideo from "@/components/GetStartedVideo"
import Pricing from "@/components/Pricing"
import VideoEditingHero from "@/components/VideoEditingHero"
import VideoShowcase from "@/components/VideoShowcase"
import WallOfLove from "@/components/WallOfLove"
import WhatYouGetVideo from "@/components/WhatYouGetVideo"
import WhyOutsource from "@/components/WhyOutsource"

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