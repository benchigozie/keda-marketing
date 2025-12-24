import Image from "next/image";

function ServicesOverview() {
    return (
        <section className="background-3d pb-12 pt-38 relative">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 px-2 py-1 bg-my-deep-black border border-my-black">
                    <Image src="/images/servicesoverview.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">Services Overview</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">Our Services Overview</h2>
                <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">Explore our comprehensive services in digital marketing, web design and development, and branding & identity, tailored to elevate your online presence and brand identity.</p>
                <div className="grid grid-cols-1 gap-6 pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-6 bg-my-deep-black border border-my-black p-6 md:p-3 lg:p-6 rounded-2xl">
                        <div className="bg-my-blacker border border-my-black rounded-2xl p-6 flex flex-col justify-between gap-5">
                            <div className="flex">
                                <Image src="/images/design.svg" alt="" width={28} height={28} className="object-contain mr-4" />
                                <h3 className="text-2xl text-my-white">Video Editing</h3>
                            </div>
                            <p>Upgrade your online presence with video content. Let's help you streamline your entire video production process.</p>
                            <div className="px-3 md:px-6 w-full py-2 md:py-3 rounded-full bg-my-black flex items-center justify-center cursor-pointer gap-0.5 md:gap-1 border border-my-black">
                                <p>Learn More</p>
                                <Image src="/images/grayarrow.png" alt="" width={18} height={18} className="inline-block ml-2 object-contain" />
                            </div>
                        </div>
                        <div className="divide-y divide-dashed divide-my-black flex flex-col justify-center">
                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-my-black">
                                <div className="flex flex-col p-3 md:p-5 gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/thumbnaildesign.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>Thumbnail Design</p>
                                </div>
                                <div className="flex flex-col p-3 md:p-5  gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/contentresearch.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>Content Research</p>
                                </div>
                                <div className="flex flex-col p-3 md:p-5  gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/contentstrategy.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>Content Strategy</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-my-black">
                                <div className="flex flex-col p-3 md:p-5  gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/videoscripting.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>Video Scripting</p>
                                </div>
                                <div className="flex flex-col p-3 md:p-5  gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/videoediting2.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>Video Editing</p>
                                </div>
                                <div className="flex flex-col p-3 md:p-5 gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/contentcalender.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>contentcalender</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-6 bg-my-deep-black border border-my-black p-6 md:p-3 lg:p-6  rounded-2xl">
                        <div className="bg-my-blacker border border-my-black rounded-2xl p-6 flex flex-col justify-between gap-5">
                            <div className="flex">
                                <Image src="/images/b&i.svg" alt="" width={28} height={28} className="object-contain mr-4" />
                                <h3 className="text-2xl text-my-white">Facebook Advertising</h3>
                            </div>
                            <p>Improve your visibility and reach. Our Facebook & Instagram Ads would help you attract and retain more customers.</p>
                            <div className="px-3 md:px-6 w-full py-2 md:py-3 rounded-full bg-my-black flex items-center justify-center cursor-pointer gap-0.5 md:gap-1 border border-my-black">
                                <p>Learn More</p>
                                <Image src="/images/grayarrow.png" alt="" width={18} height={18} className="inline-block ml-2 object-contain" />
                            </div>
                        </div>
                        <div className="divide-y divide-dashed divide-my-black flex flex-col justify-center">
                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-my-black">
                                <div className="flex flex-col p-3 md:p-5 gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/igads.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>Instagram and Facebook Adveertising</p>
                                </div>
                                <div className="flex flex-col p-3 md:p-5  gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/adcreatives.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>Ad Creatives</p>
                                </div>
                                <div className="flex flex-col p-3 md:p-5  gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/smm.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>Social Media Management</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-my-black">
                                <div className="flex flex-col p-3 md:p-5  gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/emailautomation.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>Email Automation</p>
                                </div>
                                <div className="flex flex-col p-3 md:p-5  gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/pixeltracking.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>Pixel Tracking</p>
                                </div>
                                <div className="flex flex-col p-3 md:p-5 gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/analyticsandreporting.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>Analytics & Reporting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-6 bg-my-deep-black border border-my-black p-6 md:p-3 lg:p-6  rounded-2xl">
                        <div className="bg-my-blacker border border-my-black rounded-2xl p-6 flex flex-col justify-between gap-5">
                            <div className="flex">
                                <Image src="/images/digitalmarketing.svg" alt="" width={28} height={28} className="object-contain mr-4" />
                                <h3 className="text-2xl text-my-white">Website Design</h3>
                            </div>
                            <p>Crafting custom websites tailored to your needs. Contact us for innovative online solutions.</p>
                            <div className="px-3 md:px-6 w-full py-2 md:py-3 rounded-full bg-my-black flex items-center justify-center cursor-pointer gap-0.5 md:gap-1 border border-my-black">
                                <p>Learn More</p>
                                <Image src="/images/grayarrow.png" alt="" width={18} height={18} className="inline-block ml-2 object-contain" />
                            </div>
                        </div>
                        <div className="divide-y divide-dashed divide-my-black flex flex-col justify-center">
                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-my-black">
                                <div className="flex flex-col p-3 md:p-5 gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/customwebdesign.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>Custom Web Design</p>
                                </div>
                                <div className="flex flex-col p-3 md:p-5  gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/webdevelopment.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>Web Development</p>
                                </div>
                                <div className="flex flex-col p-3 md:p-5  gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/execution.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>UI/UX Design</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-my-black">
                                <div className="flex flex-col p-3 md:p-5  gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/webanalytics.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>Web Analytics</p>
                                </div>
                                <div className="flex flex-col p-3 md:p-5  gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/landingpage.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>Landing Page Designs</p>
                                </div>
                                <div className="flex flex-col p-3 md:p-5 gap-4">
                                    <div className="p-3 rounded-lg bg-my-blacker w-max border border-my-black">
                                        <Image src="/images/cmsdesigns.svg" alt="" width={21} height={21} className="object-contain" />
                                    </div>
                                    <p>CMS Development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesOverview