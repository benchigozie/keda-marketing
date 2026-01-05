import Image from "next/image";

function VideoEditingHero() {
    return (
        <section className="bg-my-deep-black pb-12 pt-36">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/result.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">Generating 1.5M+ Impressions</p>
                </div>
                <h1 className="font-bold text-4xl md:text-6xl text-my-white text-center">Turn Your Ideas Into <span className="text-my-lime block">High-Performing</span> Videos</h1>
                <p className="text-center md:text-xl font-semibold max-w-4xl mx-auto text-my-white text-xl">That Drive Attention, Authority & Sales.</p>
                <p className="max-w-4xl text-center">For founders, content creators, and LinkedIn professionals who want to show up consistently online without burning out.</p>

                <div className="flex items-center mt-10 gap-8 flex-col">
                    <iframe src="https://player.vimeo.com/video/1151022418?context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&h=2a613de3cc&s=b8363ce425ef48d998542162da9193d2befd589d_1766721467" allow="autoplay; fullscreen" className="aspect-video w-full"></iframe>
                    <div className="flex gap-1 md:gap-3 justify-center mt-6">
                        <button
                            className="text-my-deep-black px-3 md:px-6 py-2 md:py-4 bg-my-lime rounded-full font-semibold md:text-lg w-max hover:bg-my-ash cursor-pointer"
                        >
                            Start for Free
                        </button>
                        <button
                            className="px-3 md:px-6 py-2 md:py-4 bg-my-blacker border border-my-black text-my-white rounded-full font-semibold md:text-lg w-max hover:bg-my-ash cursor-pointer"
                        >
                            Book a meeting
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default VideoEditingHero