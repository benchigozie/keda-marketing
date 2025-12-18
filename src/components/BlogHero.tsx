import Image from "next/image";

function BlogHero() {
    return (
        <section className="background-3d pb-12 pt-38 relative">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 px-2 py-1 bg-my-deep-black border border-my-black">
                    <Image src="/images/blog.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">Our Blogs</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">Everything You Need To Know About Marketing.</h2>
                <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">Welcome to our blog, where we share experts insights on several topics in the digital marketing space.</p>
                <div className="px-4 py-3 bg-my-blacker border border-my-black rounded-full max-w-md mx-auto mt-6 flex gap-3 z-20">
                    <Image src="/images/search.png" alt="search icon" width={25} height={25} className="inline-block mr-2 object-contain" />
                    <input type="text" name="search-blog" id="" className="outline-none focus:ring-my-ash focus:ring-1 px-4 py-2 rounded-full w-32 md:w-full" />
                    <div className="p-3 bg-my-deep-black border-my-black border rounded-full cursor-pointer flex items-center justify-center">
                        <Image src="/images/search-arrow.png" alt="search button" width={25} height={25} className="" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 bg-linear-to-t from-my-deep-black/90 to-my-deep-black/10 h-3/5 w-full"></div>
        </section>
    )
}

export default BlogHero