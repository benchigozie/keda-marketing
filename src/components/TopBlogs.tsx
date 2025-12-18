import Image from "next/image";

function TopBlogs() {
    return (
        <section className="bg-my-deep-black pt-14 pb-12 relative">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/selling.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">Top Picks</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center max-w-3xl mx-auto">Top Picks for You</h2>
                <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">Discover our top picks from Oustand's blog, showcasing the latest industry trends, innovative ideas, and practical tips to inspire your digital journey.</p>
                <div className="mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid">
                    <div className="bg-my-blacker border border-my-black rounded-2xl mx-auto w-full">
                        <p className="ml-6 mt-6 px-5 py-2 w-max bg-my-blacker rounded-full border border-my-black">Marketing</p>
                        <div className="divide-y divide-my-black p-6">
                            <div className="flex flex-col gap-2 pb-6">
                                <p className="font-normal">April 14, 2024</p>
                                <h3 className="text-xl text-my-white">Why You Shouldn't Invest in Digital Marketing</h3>
                                <p>Basically on some bluhu type siiii</p>
                            </div>
                            <div className="flex  gap-4 mt-6 items-center">
                                <div>
                                    <Image src="/images/david.webp" alt="" width={50} height={50} className="rounded-lg w-[50px] h-[50px] object-cover" />
                                </div>
                                <div>
                                    <p className="text-xl text-my-white">David Asoya</p>
                                    <p>Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-my-blacker border border-my-black rounded-2xl mx-auto w-full">
                        <p className="ml-6 mt-6 px-5 py-2 w-max bg-my-blacker rounded-full border border-my-black">Marketing</p>
                        <div className="divide-y divide-my-black p-6">
                            <div className="flex flex-col gap-2 pb-6">
                                <p className="font-normal">April 14, 2024</p>
                                <h3 className="text-xl text-my-white">Why You Shouldn't Invest in Digital Marketing</h3>
                                <p>Basically on some bluhu type siiii</p>
                            </div>
                            <div className="flex  gap-4 mt-6 items-center">
                                <div>
                                    <Image src="/images/david.webp" alt="" width={50} height={50} className="rounded-lg w-[50px] h-[50px] object-cover" />
                                </div>
                                <div>
                                    <p className="text-xl text-my-white">David Asoya</p>
                                    <p>Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-my-blacker border border-my-black rounded-2xl mx-auto w-full">
                        <p className="ml-6 mt-6 px-5 py-2 w-max bg-my-blacker rounded-full border border-my-black">Marketing</p>
                        <div className="divide-y divide-my-black p-6">
                            <div className="flex flex-col gap-2 pb-6">
                                <p className="font-normal">April 14, 2024</p>
                                <h3 className="text-xl text-my-white">Why You Shouldn't Invest in Digital Marketing</h3>
                                <p>Basically on some bluhu type siiii</p>
                            </div>
                            <div className="flex  gap-4 mt-6 items-center">
                                <div>
                                    <Image src="/images/david.webp" alt="" width={50} height={50} className="rounded-lg w-[50px] h-[50px] object-cover" />
                                </div>
                                <div>
                                    <p className="text-xl text-my-white">David Asoya</p>
                                    <p>Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-4 md:mt-7">
                    <button className="px-5 py-3 rounded-full border-my-black bg-my-blacker border cursor-pointer">View More</button>
                </div>
            </div>
        </section>
    )
}

export default TopBlogs