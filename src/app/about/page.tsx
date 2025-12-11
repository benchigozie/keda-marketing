import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import OurStory from "@/components/OurStory";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Vision from "@/components/Vision";

function page() {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <Vision />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default page;