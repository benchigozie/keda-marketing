import Image from "next/image";

function About() {
    return (
        <section className="bg-my-deep-black pt-12">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/about.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">About Us</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">Our Unique Approach</h2>
                <p className="mx-auto">We are not just another digital agency. We are growth partners helping businesses thrive online.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 py-10">
                    <Image src="" alt=""/>
                    <div className="grid grid-cols-1 divide-y divide-my-black divide-dashed">
                        <div className="grid grid-cols-2 divide-x divide-my-black divide-dashed">
                            <div className="flex flex-col gap-4 p-3 md:p-8">
                                <h3 className="text-2xl md:text-4xl font-bold text-my-lime">500K+</h3>
                                <p className="text-xl text-my-white">Leads Generated</p>
                                <p>We have successfully generated more than 500,000 leads across multiple marketing campaigns.</p>
                            </div>
                            <div className="flex flex-col gap-4 p-3 md:p-8">
                                <h3 className="text-2xl md:text-4xl font-bold text-my-lime">75+</h3>
                                <p className="text-xl text-my-white">Successful Campaigns</p>
                                <p>We don't just initiate campaigns we see them to completion and we don't relent until your goal is accomplished.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-my-black divide-dashed">
                            <div className="flex flex-col gap-4 p-3 md:p-8">
                                <h3 className="text-2xl md:text-4xl font-bold text-my-lime">200%</h3>
                                <p className="text-xl text-my-white">Return on Ad Spend</p>
                                <p>Our typical return in investment from our marketing campaigns lies anywhere between 2-5x.</p>
                            </div>
                            <div className="flex flex-col gap-4 p-3 md:p-8">
                                <h3 className="text-2xl md:text-4xl font-bold text-my-lime">25+</h3>
                                <p className="text-xl text-my-white">Satisfied Customers</p>
                                <p>Having worked with more than 25 different customers in Europe, America and Africa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About