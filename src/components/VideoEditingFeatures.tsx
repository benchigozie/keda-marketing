import Image from "next/image";

function VideoEditingFeatures() {
    return (
        <section className="bg-my-deep-black py-12">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/faqs.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">Features</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">Features</h2>
                <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">Our Video Editing Service Includes</p>
                <div className="bg-my-blacker border border-my-black rounded-2xl mx-auto w-full max-w-3xl p-8 mt-6">
                    <ul className="list-disc list-inside flex flex-col gap-4 md:text-xl  marker:text-my-lime divide-y divide-my-black">
                        <li className="pb-4">This is the first Item</li>
                        <li className="pb-4">This is the second Item</li>
                        <li className="pb-4">This is the third Item</li>
                        <li className="pb-4">This is the fourth Item</li>
                        <li className="pb-4">This is the fifth Item</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default VideoEditingFeatures