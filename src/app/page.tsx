import Credentials from "@/components/Credentials"
import Expertise from "@/components/Expertise"
import Features from "@/components/Features"
import Hero from "@/components/Hero"
import Why from "@/components/Why"

function page() {
  return (
    <div>
      <Hero />
      <Credentials />
      <Expertise />
      <Why />
      <Features />
    </div>
  )
}

export default page