function VideoShowcase() {
    return (
        <section>
            <div className="bg-my-deep-black py-12">
                <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                    <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                        <img src="/images/video.svg" alt="" width={20} height={20} className="object-contain" />
                        <p className="text-my-lime">Videos</p>
                    </div>
                    <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">Featured Videos</h2>
                    <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">Explore our collection of engaging videos that highlight our expertise and the impact we've made for our clients.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative w-full h-0 pb-[56.25%]">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="mx-auto absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </div>
                        <div className="relative w-full h-0 pb-[56.25%]">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="mx-auto absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </div>
                        <div className="relative w-full h-0 pb-[56.25%]">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="mx-auto absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default VideoShowcase