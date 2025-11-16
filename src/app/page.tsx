import Credentials from "@/components/Credentials"
import Expertise from "@/components/Expertise"
import Features from "@/components/Features"
import Hero from "@/components/Hero"
import Process from "@/components/Process"
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
    </div>
  )
}

export default page