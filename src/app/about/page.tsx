import AboutHero from "@/components/AboutHero";
import Footer from "@/components/Footer";
import OurStory from "@/components/OurStory";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Vision from "@/components/Vision";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Keda Marketing, our story, vision, and the team behind Africa's No 1 Real Estate Marketing Agency.",
};

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