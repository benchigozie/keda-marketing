
import Contact from "@/components/Contact";
import ContactHero from "@/components/ContactHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Explore Keda Marketing's services including Facebook advertising, website design, video editing, digital marketing, content management, and AI automated workflows to elevate your real estate business.",
};

function page() {
  return (
    <div>
        <ContactHero />
        <Contact />
    </div>
  )
}

export default page