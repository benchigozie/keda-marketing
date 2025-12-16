import Image from "next/image"

function Values() {
    return (
        <section className="bg-my-deep-black py-12">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/values.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">Values</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">Our Guiding Principles</h2>
                <p className="text-center text-lg font-semibold max-w-4xl mx-auto">We prioritize ethical practices, customer focus, and continuous improvement.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
                    <div className="relative flex flex-col gap-4 border-l border-dashed border-my-highlight px-6 p-4">
                        <div className="h-5 w-full"></div>
                        <div className="flex justify-between">
                            <Image src="/images/customer.png" alt="" width={25} height={25} />
                            <h3>Customer Focus</h3>
                        </div>
                        <p className="mb-10">We prioritize understanding and meeting our clients' needs to ensure their complete satisfaction.</p>
                        <div className="absolute -left-0.5 top-11.5 w-1 h-10 bg-my-lime rounded-full shadow-[8px_0_20px_0px_#CDF140]"></div>
                    </div>
                    <div className="relative flex flex-col gap-4 border-l border-dashed border-my-highlight px-6 p-4">
                        <div className="h-5 w-full"></div>
                        <div className="flex justify-between">
                            <Image src="/images/innovation.png" alt="" width={25} height={25} />
                            <h3>Innovation Driven</h3>
                        </div>
                        <p className="mb-10">We embrace creativity and new technologies to provide cutting-edge web solutions.</p>
                        <div className="absolute -left-0.5 top-11.5 w-1 h-10 bg-my-lime rounded-full shadow-[8px_0_20px_0px_#CDF140]"></div>
                    </div>
                    <div className="relative flex flex-col gap-4 border-l border-dashed border-my-highlight px-6 p-4">
                        <div className="h-5 w-full"></div>
                        <div className="flex justify-between">
                            <Image src="/images/integrity.png" alt="" width={25} height={25} />
                            <h3>Integrity Always</h3>
                        </div>
                        <p>We conduct business with honesty and transparency in every project we undertake.</p>
                        <div className="absolute -left-0.5 top-11.5 w-1 h-10 bg-my-lime rounded-full shadow-[8px_0_20px_0px_#CDF140]"></div>
                    </div>
                    <div className="relative flex flex-col gap-4 border-l border-dashed border-my-highlight px-6 p-4">
                        <div className="h-5 w-full"></div>
                        <div className="flex justify-between">
                            <Image src="/images/team.png" alt="" width={25} height={25} />
                            <h3>Team Collaboration</h3>
                        </div>
                        <p className="mb-10">We believe in the power of teamwork and effective communication to achieve outstanding results.</p>
                        <div className="absolute -left-0.5 top-11.5 w-1 h-10 bg-my-lime rounded-full shadow-[8px_0_20px_0px_#CDF140]"></div>
                    </div>
                    <div className="relative flex flex-col gap-4 border-l border-dashed border-my-highlight px-6 p-4">
                        <div className="h-5 w-full"></div>
                        <div className="flex justify-between">
                            <Image src="/images/improvement.png" alt="" width={25} height={25} />
                            <h3>Continuous Improvement</h3>
                        </div>
                        <p className="mb-10">We strive to enhance our skills and processes to deliver better services continually.</p>
                        <div className="absolute -left-0.5 top-11.5 w-1 h-10 bg-my-lime rounded-full shadow-[8px_0_20px_0px_#CDF140]"></div>
                    </div>
                    <div className="relative flex flex-col gap-4 border-l border-dashed border-my-highlight px-6 p-4">
                        <div className="h-5 w-full "></div>
                        <div className="flex justify-between">
                            <Image src="/images/excellence.png" alt="" width={25} height={25} />
                            <h3>Excellence Pursuit</h3>
                        </div>
                        <p className="mb-10">Our commitment to excellence ensures high-quality outcomes in all our services.</p>
                        <div className="absolute -left-0.5 top-11.5 w-1 h-10 bg-my-lime rounded-full shadow-[8px_0_20px_0px_#CDF140]"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values