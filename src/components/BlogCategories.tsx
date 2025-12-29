import Image from "next/image";

function BlogCategories() {

    console.log("Rendering BlogCategories");

    return (
        <section className="bg-my-deep-black pt-24 pb-12 relative">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/selling.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">Categories</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center max-w-3xl mx-auto">Explore Our Diverse Topics</h2>
                <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">Discover our top picks from Oustand's blog, showcasing the latest industry trends, innovative ideas, and practical tips to inspire your digital journey.</p>
                <div className="divide-y divide-my-black divide-dashed mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-my-black divide-dashed">
                        <div className="flex flex-col gap-4 p-6">
                            <Image src="/images/digitalmarketing.svg" alt="SEO" width={28} height={28} />
                            <h3 className="text-my-white font-semibold text-2xl">Digital Marketing</h3>
                            <p>Learn about the latest strategies and tactics including SEO, SEM, and social media.</p>
                        </div>
                        <div className="flex flex-col gap-4 p-6">
                            <Image src="/images/b&i.svg" alt="SEO" width={28} height={28} />
                            <h3 className="text-my-white font-semibold text-2xl">Branding & Identity</h3>
                            <p>Discover how to build a strong brand identity and stand out in the market.</p>
                        </div>
                        <div className="flex flex-col gap-4 p-6">
                            <Image src="/images/design.svg" alt="SEO" width={28} height={28} />
                            <h3 className="text-my-white font-semibold text-2xl">Design & Development</h3>
                            <p>Explore the latest trends and best practices in web design and development.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-my-black divide-dashed">
                        <div className="flex flex-col gap-4 p-6">
                            <Image src="/images/seo.svg" alt="SEO" width={28} height={28} />
                            <h3 className="text-my-white font-semibold text-2xl">SEO Strategies</h3>
                            <p>Get tips and tricks to improve your web visibility and ranking on search engines.</p>
                        </div>
                        <div className="flex flex-col gap-4 p-6">
                            <Image src="/images/trends.svg" alt="SEO" width={28} height={28} />
                            <h3 className="text-my-white font-semibold text-2xl">Industry Trends</h3>
                            <p>Stay informed about the latest trends and innovations shaping the digital industry.</p>
                        </div>
                        <div className="flex flex-col gap-4 p-6">
                            <Image src="/images/case.svg" alt="SEO" width={28} height={28} />
                            <h3 className="text-my-white font-semibold text-2xl">Case Studies</h3>
                            <p>Explore real-life examples of successful projects and campaigns.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogCategories