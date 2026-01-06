import Image from "next/image"
import Link from "next/link"

function Pricing() {
    return (
        <section className="bg-my-deep-black py-12">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/faqs.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">Pricing</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">Packages</h2>
                <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">Our prices are designed to accomodate your budget</p>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-8 md:gap-x-6">
                    <div className="bg-my-blacker border border-my-black rounded-xl px-6 md:px-10 py-14 my-3 flex flex-col gap-6">
                        <h3 className="text-2xl text-my-lime font-bold">Lite</h3>
                        <p className="text-my-white text-4xl font-bold">$500</p>
                        <ul className="list-disc list-inside flex flex-col gap-2 md:text-lg  marker:text-my-lime">
                            <li>8 Shorts</li>
                            <li>8 Short Scripts</li>
                            <li>Content Calender</li>
                        </ul>
                        <button className="mt-auto bg-my-lime text-my-black font-bold py-2 px-4 rounded hover:scale-102 transition duration-300 hover:cursor-pointer">Choose Lite</button>
                    </div>
                    <div className="bg-my-blacker border border-my-black rounded-xl px-6 md:px-10 py-14 my-3 flex flex-col gap-6">
                        <h3 className="text-2xl text-my-lime font-bold">Basic</h3>
                        <p className="text-my-white text-4xl font-bold">$750</p>
                        <ul className="list-disc list-inside flex flex-col gap-2 md:text-lg  marker:text-my-lime">
                            <li>8 Short Videos</li>
                            <li>2 Long Form Videos</li>
                            <li>8 Short Scripts</li>
                            <li>2 Long Scripts</li>
                            <li>Content Calender</li>
                        </ul>
                        <button className="mt-auto bg-my-lime text-my-black font-bold py-2 px-4 rounded hover:scale-102 transition duration-300 hover:cursor-pointer">Choose Basic</button>
                    </div>
                    <div className="bg-my-blacker border border-my-black rounded-xl px-6 md:px-10 py-14 my-3 flex flex-col gap-6">
                        <h3 className="text-2xl text-my-lime font-bold">Standard Package</h3>
                        <p className="text-my-white text-4xl font-bold">$1000</p>
                        <ul className="list-disc list-inside flex flex-col gap-2 md:text-lg  marker:text-my-lime">
                            <li>12 Shorts</li>
                            <li>2 Long Form Videos</li>
                            <li>12 Short Scripts</li>
                            <li>2 Long Scripts</li>
                            <li>Content Calender</li>
                        </ul>
                        <button className="mt-auto bg-my-lime text-my-black font-bold py-2 px-4 rounded hover:scale-102 transition duration-300 hover:cursor-pointer">Choose Standard</button>
                    </div>
                    <div className="bg-my-blacker border border-my-black rounded-xl px-6 md:px-10 py-14 my-3 flex flex-col gap-6 md:w-max">
                        <h3 className="text-2xl text-my-lime font-bold">Premium</h3>
                        <p className="text-my-white text-4xl font-bold">$1500</p>
                        <ul className="list-disc list-inside flex flex-col gap-2 md:text-lg  marker:text-my-lime">
                            <li>12 Short Videos</li>
                            <li>4 Long Form Videos</li>
                            <li>12 Short Scripts</li>
                            <li>4 Long Scripts</li>
                            <li>4 Thumbnails</li>
                            <li>12 Portrait Thumbnails.</li>
                            <li>Content calendar.</li>
                            <li>Social Media Management/ YouTube Channel Management.</li>
                            <li>Custom Content Management System.</li>
                            <li>Content Repurposing.</li>
                        </ul>
                        <button className="mt-auto bg-my-lime text-my-black font-bold py-2 px-4 rounded hover:scale-102 transition duration-300 hover:cursor-pointer">Choose Premium</button>
                    </div>
                </div>
                <div className="bg-my-blacker border border-my-lime rounded-4xl px-6 md:px-10 py-14 my-5 flex gap-6 justify-between items-center">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl text-my-white font-bold">Custom Package</h3>
                        <p className="font-bold text-xl max-w-2xl">Perfect if you have specific needs or a fixed budget. We agree on a fair, flexible price tailored to your goals.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="mt-auto bg-my-black text-my-lime font-bold py-5 px-6 rounded-full border border-my-lime hover:bg-my-highlight hover:scale-102 transition duration-300 hover:cursor-pointer">
                            <Link href="/services/video-editing/#contact">Get a Custom Quote</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing