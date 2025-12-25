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
                        <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-clip">
                            <iframe src="https://player.vimeo.com/video/1149248769?context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&h=2a613de3cc&s=b8363ce425ef48d998542162da9193d2befd589d_1766721467" allow="autoplay; fullscreen" className="w-full h-50"></iframe>
                        </div>
                        <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-clip">
                            <iframe src="https://player.vimeo.com/video/1149248769?context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&h=2a613de3cc&s=b8363ce425ef48d998542162da9193d2befd589d_1766721467" allow="autoplay; fullscreen" className="w-full h-50"></iframe>
                        </div>
                        <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-clip">
                            <iframe src="https://player.vimeo.com/video/1149248769?context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&h=2a613de3cc&s=b8363ce425ef48d998542162da9193d2befd589d_1766721467" allow="autoplay; fullscreen" className="w-full h-50"></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default VideoShowcase