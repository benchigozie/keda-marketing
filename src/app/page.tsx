import About from "@/components/About"
import Contact from "@/components/Contact"
import Credentials from "@/components/Credentials"
import Expertise from "@/components/Expertise"
import FAQs from "@/components/FAQs"
import Features from "@/components/Features"
import Hero from "@/components/Hero"
import Process from "@/components/Process"
import Testimonials from "@/components/Testimonials"
import Values from "@/components/Values"
import Why from "@/components/Why"

function page() {
  return (
    <div>
      <Hero />
      <Credentials />
      <Expertise />
      <Why />
      <Features />
      <Process />
      <About />
      <Values />
      <Testimonials />
      <FAQs />
      <Contact />
    </div>
  )
}

export default page