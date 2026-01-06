import Contact from "@/components/Contact";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Image from "next/image";

function page() {

    return (
        <>
            <section className="background-3d pb-12 pt-38 relative">
                <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                    <div className="rounded-full flex justify-center mx-auto gap-1 px-2 py-1 bg-my-deep-black border border-my-black">
                        <Image src="/images/events.png" alt="" width={20} height={20} className="object-contain" />
                        <p className="text-my-lime">Events</p>
                    </div>
                    <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">Our Upcoming Events</h2>
                    <div>
                        <Events />
                    </div>
                </div>
            </section>
            <Contact />
            <Footer />
        </>
    )
}

export default page