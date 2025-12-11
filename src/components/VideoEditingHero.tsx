import Image from "next/image";

function VideoEditingHero() {
    return (
        <section className="bg-my-deep-black pb-12 pt-36">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/faqs.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">Video Editing</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">Transform Your Footage Into Stunning Visuals</h2>
                <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">From raw clips to polished, high-impact videos. We edit, refine, and elevate your content to match your brand’s style and message.</p>
                <div className="flex items-center mt-10 gap-8 flex-col">
                    <iframe
                        width="1120"
                        height="630"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <button
                        className="text-my-deep-black px-6 py-4 bg-my-lime rounded-full font-semibold text-lg w-max"
                        type="submit"
                    >
                        Book an Appointment
                    </button>
                </div>
            </div>
        </section>

    )
}

export default VideoEditingHero