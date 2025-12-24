import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Services from "@/components/Services"
import ServicesOverview from "@/components/ServicesOverview"

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