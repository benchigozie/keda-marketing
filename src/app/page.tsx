import Credentials from "@/components/Credentials"
import Expertise from "@/components/Expertise"
import Hero from "@/components/Hero"
import Why from "@/components/Why"

function page() {
  return (
    <div>
      <Hero />
      <Credentials />
      <Expertise />
      <Why />
    </div>
  )
}

export default page