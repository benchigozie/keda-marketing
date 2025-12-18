import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Pricing from "@/components/Pricing"
import VideoEditingFeatures from "@/components/VideoEditingFeatures"
import VideoEditingHero from "@/components/VideoEditingHero"
import VideoShowcase from "@/components/VideoShowcase"

function page() {
  return (
    <div>
        <VideoEditingHero />
        <VideoShowcase />
        <VideoEditingFeatures />
        <Pricing />
        <Contact />
        <Footer />
    </div>
  )
}

export default page