import Image from "next/image";

function WhyOutsource() {
    return (
        <section className="background-3d pb-12 pt-38 relative px-3">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto p-6 md:p-16 bg-my-deep-black border border-my-black rounded-3xl">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/selling.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">A Growth Decision</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
                    <div className="flex flex-col gap-7">
                        <h2 className="font-bold text-4xl md:text-6xl">Why Outsource <span className='block'>Your</span> <span className="text-my-white">Video Editing?</span></h2>
                        <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">Outsourcing your video editing isn’t an expense — it’s an investment in your scale.</p>
                        <div>
                            {[
                                "Save hours every week you'd normally spend editing",
                                "Get a consistent, professional brand look",
                                "Publish content faster and more frequently",
                                "Avoid burnout and creative fatigue",
                                "Work with marketers who understand attention & psychology",
                            ].map((text, i) => (
                                <li key={i} className="flex gap-3 pb-4">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-my-lime text-my-black font-semibold text-sm shrink-0">
                                        {i + 1}
                                    </span>
                                    <p>{text}</p>
                                </li>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="px-10 py-24 border border-my-black rounded-3xl bg-my-blacker flex flex-col items-center gap-7 justify-center">
                            <p className="text-my-lime font-bold text-5xl">*85%</p>
                            <p>More time for buisness strategy</p>
                            <p className="text-my-white text-center">Instead of struggling alone, you get a <span className="text-my-lime">done-for-you content engine.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyOutsource