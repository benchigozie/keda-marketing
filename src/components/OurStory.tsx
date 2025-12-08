import Image from "next/image";

function OurStory() {
    return (
        <section className="bg-my-deep-black pt-36 pb-12">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/crown2.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">Our Story</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center max-w-3xl mx-auto">Our Growth Story</h2>
                <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">Our stand has evolved from a small, ambitious team to a globally recognized agency redefining digital experiences.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 pt-10">
                    <div className="relative ml-4 md:ml-0">
                        <div className="bg-my-blacker border border-my-black rounded-xl p-4 md:p-7 flex flex-col gap-4">
                            <p className="text-4xl text-my-lime mb-8">2021</p>
                            <p>Founded</p>
                            <p>Keda was founded in 2021 with a vision to empower SMEs and local businesses with the digital tools they need to scale. What started as a small team with a big dream has grown into a dynamic agency.</p>
                        </div>
                        <div className="hidden md:block absolute -bottom-10 h-10 w-full border-b-2 border-dashed border-my-black "></div>
                        <div className="hidden md:block h-4 w-4 bg-my-lime rounded-full full absolute left-1/2 -bottom-[46px]"></div>
                        <div className="md:hidden absolute top-0 -left-3 w-4 h-full border-l-2 border-dashed border-my-black "></div>
                        <div className="md:hidden -left-[19px] h-4 w-4 top-1/2 bg-my-lime rounded-full full absolute"></div>
                    </div>
                    <div className="relative ml-4 md:ml-0">
                        <div className="mx-0 md:mx-3 my-3 md:my-0 bg-my-blacker border border-my-black rounded-xl p-4 md:p-7 flex flex-col gap-4">
                            <p className="text-4xl text-my-lime mb-8">2023</p>
                            <p>75+ Successful Campaigns</p>
                            <p>In 2023, we started offering our services to local businesses, brands and enterprises. Working on over 75 marketing campaigns locally and internationally.</p>
                        </div>
                        <div className="hidden md:block absolute -bottom-10 h-10 w-full border-b-2 border-dashed border-my-black "></div>
                        <div className="hidden md:block h-4 w-4 bg-my-lime rounded-full full absolute left-1/2 -bottom-[46px]"></div>
                        <div className="md:hidden absolute top-0 -left-3 w-4 h-full border-l-2 border-dashed border-my-black "></div>
                        <div className="md:hidden -left-[19px] h-4 w-4 top-1/2 bg-my-lime rounded-full full absolute"></div>
                    </div>
                    <div className="relative ml-4 md:ml-0">
                        <div className="bg-my-blacker border border-my-black rounded-xl p-4 md:p-7 flex flex-col gap-4">
                            <p className="text-4xl text-my-lime mb-8">2025</p>
                            <p>4+ Years of Experience</p>
                            <p>2025, marks a great milestone for us because we have been in operation for over 4 years now and it's been an amzaing journey. We are grateful for growth and optimistic towards the future.</p>
                        </div>
                        <div className="hidden md:block absolute -bottom-10 h-10 w-full border-b-2 border-dashed border-my-black "></div>
                        <div className="hidden md:block h-4 w-4 bg-my-lime rounded-full full absolute left-1/2 -bottom-[46px]"></div>
                        <div className="md:hidden absolute top-0 -left-3 w-4 h-full border-l-2 border-dashed border-my-black "></div>
                        <div className="md:hidden -left-[19px] h-4 w-4 top-1/2 bg-my-lime rounded-full full absolute"></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default OurStory