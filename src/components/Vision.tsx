import Image from "next/image"

function Vision() {
    return (
        <section className="bg-my-deep-black pt-36 pb-12">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/brand.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">Vision</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">Our Vision And Values</h2>
                <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">Still you have any questions? Contact our Team via support@Oustand.digital.com</p>
                <div className="grid grid-cols-2 md:grid-cols-4 mt-10 gap-4">
                    <div className="p-8 bg-my-blacker col-span-2 rounded-2xl border border-my-black flex flex-col gap-6">
                        <div className="flex gap-4 items-center">
                            <div className="p-3 bg-my-blacker border border-my-black w-max rounded-xl">
                                <Image src="/images/mission.svg" alt="Vision 1" width={25} height={25} className="object-contain" />
                            </div>
                            <h3 className="text-xl text-my-white">Mission</h3>
                        </div>
                        <p className="flex flex-col gap-4">To empower local businesses and SMEs with the digital tolls they need to leverage the digital revolution and scale fast.</p>
                    </div>
                    <div className="p-8 bg-my-blacker col-span-2 rounded-2xl border border-my-black flex flex-col gap-6">
                        <div className="flex gap-4 items-center">
                            <div className="p-3 bg-my-blacker border border-my-black w-max rounded-xl">
                                <Image src="/images/vision.svg" alt="Vision 1" width={25} height={25} className="object-contain" />
                            </div>
                            <h3 className="text-xl text-my-white">Vision</h3>
                        </div>
                        <p className="flex flex-col gap-4">To empower African businesses to compete on a global scale by implementing digital marketing campaigns that create brand awareness.</p>
                    </div>
                    <div className="p-8 bg-my-blacker rounded-2xl border border-my-black flex flex-col gap-6">
                        <div className="flex gap-4 items-center">
                            <div className="p-3 bg-my-blacker border border-my-black w-max rounded-xl">
                                <Image src="/images/collaboration.svg" alt="Vision 1" width={25} height={25} className="object-contain w-6 h-6" />
                            </div>
                            <h3 className="text-xl text-my-white">Collaboration</h3>
                        </div>
                        <p className="flex flex-col gap-4">We believe that great work is the result of collaboration between our team and our clients.</p>
                    </div>
                    <div className="p-8 bg-my-blacker rounded-2xl border border-my-black flex flex-col gap-6">
                        <div className="flex gap-4 items-center">
                            <div className="p-3 bg-my-blacker border border-my-black w-max rounded-xl">
                                <Image src="/images/innovation.svg" alt="Vision 1" width={25} height={25} className="object-contain w-6 h-6" />
                            </div>
                            <h3 className="text-xl text-my-white">Innovation</h3>
                        </div>
                        <p className="flex flex-col gap-4">At Keda Marketing, we are committed to staying at the forefront of the ever-evolving digital space.</p>
                    </div>
                    <div className="p-8 bg-my-blacker rounded-2xl border border-my-black flex flex-col gap-6">
                        <div className="flex gap-4 items-center">
                            <div className="p-3 bg-my-blacker border border-my-black w-max rounded-xl">
                                <Image src="/images/integrity.svg" alt="Vision 1" width={25} height={25} className="object-contain w-6 h-6" />
                            </div>
                            <h3 className="text-xl text-my-white">Integrity</h3>
                        </div>
                        <p className="flex flex-col gap-4">We uphold the highest standards of integrity and professionalism in everything we do in our business.</p>
                    </div>
                    <div className="p-8 bg-my-blacker rounded-2xl border border-my-black flex flex-col gap-6">
                        <div className="flex gap-4 items-center">
                            <div className="p-3 bg-my-blacker border border-my-black w-max rounded-xl">
                                <Image src="/images/result.svg" alt="Vision 1" width={25} height={25} className="object-contain w-6 h-6" />
                            </div>
                            <h3 className="text-xl text-my-white">Result Driven</h3>
                        </div>
                        <p className="flex flex-col gap-4">We are dedicated to delivering tangible results that help our clients achieve their goals.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vision