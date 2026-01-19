import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Services from "@/components/Services"
import ServicesOverview from "@/components/ServicesOverview"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore Keda Marketing's services including Facebook advertising, website design, video editing, digital marketing, content management, and AI automated workflows to elevate your real estate business.",
};

function page() {
  return (
    <div>
      <Services />
      <ServicesOverview />
      <Contact />
      <Footer />
    </div>
  )
}

export default page