import Image from "next/image";

function Services() {
    return (
        <section className="background-3d pb-12 pt-38 relative">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 px-2 py-1 bg-my-deep-black border border-my-black">
                    <Image src="/images/events.png" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">Services</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">Our Range of Expertise</h2>
                <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">We offer a diverse range of digital marketing services tailored to help you smash your digital marketing goals. Whether you're looking for web design, SEO, or branding, we've got you covered.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
                    <div className="bg-my-blacker border border-my-black rounded-2xl p-6 flex flex-col justify-between gap-5">
                        <div className="flex">
                            <Image src="/images/design.svg" alt="" width={28} height={28} className="object-contain mr-4" />
                            <h3 className="text-2xl text-my-white">Video Editing</h3>
                        </div>
                        <p>We handle the planning, editing, and uploading of your video content. To help you free up time for other high impact activities.</p>
                        <div className="px-6 w-full py-3 rounded-full bg-my-black flex items-center justify-center cursor-pointer gap-1 border border-my-black">
                            <p>Learn More</p>
                            <Image src="/images/grayarrow.png" alt="" width={18} height={18} className="inline-block ml-2 object-contain" />
                        </div>
                    </div>
                    <div className="bg-my-blacker border border-my-black rounded-2xl p-6 flex flex-col justify-between gap-5">
                        <div className="flex">
                            <Image src="/images/b&i.svg" alt="" width={28} height={28} className="object-contain mr-4" />
                            <h3 className="text-2xl text-my-white">Facebook Advertising</h3>
                        </div>
                        <p>We plan, implement and optimize facebook advertising campaigns to help you generate more leads and increase your monthly revenue.</p>
                        <div className="px-6 w-full py-3 rounded-full bg-my-black flex items-center justify-center cursor-pointer gap-1 border border-my-black">
                            <p>Learn More</p>
                            <Image src="/images/grayarrow.png" alt="" width={18} height={18} className="inline-block ml-2 object-contain" />
                        </div>
                    </div>
                    <div className="bg-my-blacker border border-my-black rounded-2xl p-6 flex flex-col justify-between gap-5">
                        <div className="flex">
                            <Image src="/images/digitalmarketing.svg" alt="" width={28} height={28} className="object-contain mr-4" />
                            <h3 className="text-2xl text-my-white">Website Design</h3>
                        </div>
                        <p>We design custom landing pages, websites and sales pages to recieve traffic and multiply your conversion rate.</p>
                        <div className="px-6 w-full py-3 rounded-full bg-my-black flex items-center justify-center cursor-pointer gap-1 border border-my-black">
                            <p>Learn More</p>
                            <Image src="/images/grayarrow.png" alt="" width={18} height={18} className="inline-block ml-2 object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;