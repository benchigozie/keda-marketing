import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import GetStartedVideo from "@/components/GetStartedVideo"
import Pricing from "@/components/Pricing"
import VideoEditingFeatures from "@/components/VideoEditingFeatures"
import VideoEditingHero from "@/components/VideoEditingHero"
import VideoShowcase from "@/components/VideoShowcase"
import WhyOutsource from "@/components/WhyOutsource"

function page() {
  return (
    <div>
        <VideoEditingHero />
        <VideoShowcase />
        <GetStartedVideo />
        <WhyOutsource />
        <VideoEditingFeatures />
        <Pricing />
        <Contact />
        <Footer />
    </div>
  )
}

export default page