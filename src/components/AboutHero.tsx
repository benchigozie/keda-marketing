import Image from "next/image";

function AboutHero() {
    return (
        <section className="bg-my-deep-black pt-36 pb-12">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/personalized.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">About Us</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center max-w-3xl mx-auto">We Help Businesses Scale With Digital Marketing.</h2>
                <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">Keda Marketing is more than just a marketing agency - we are your partners in success, dedicated to empowering businesses to thrive in the digital age.</p>
                <div>
                    <Image src="/images/abouthero.webp" alt="About Keda Marketing" width={1200} height={600} className="mt-10 rounded-xl mx-auto object-cover" />
                </div>
            </div>
        </section>
    )
}

export default AboutHero