import Image from "next/image";
import { sanityClient } from "@/lib/sanityClient";
import { urlFor } from "@/lib/sanityImage";


const latestPostsQuery = `
  *[_type == "post" && publishedAt <= now()]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage,
    "author": author->{name, role, "image": image}
  }
`;

const mostReadPostsQuery = `
  *[_type == "post"]
  | order(views desc) {
    _id,
    title,
    "slug": slug.current,
    views,
    publishedAt
  }
`;


type Author = {
    name: string;
    image: any;
    role: string;
};

type Post = {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string;
    excerpt: string;
    mainImage: any;
    author: Author;
};

async function LatestBlogs() {

    console.log("Rendering LatestBlogs");

    const [latestPosts] = await Promise.all([
        sanityClient.fetch(latestPostsQuery, {}, { next: { 
            tags: ["posts"],
            revalidate: 3600 
        } }),
    ]);
    const trimmedLatestPosts: Post[] = latestPosts.slice(0, 6);


    return (

        <section className="bg-my-deep-black pt-14 pb-12 relative">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/crown2.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">Latest Blogs</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center max-w-3xl mx-auto">Discover More</h2>
                <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">Our robust library of digital marketing content is available to teach you everything you need to know about digital marketing.</p>
                <div className="mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid">
                        {trimmedLatestPosts.map((post: Post) => (
                            <div className="bg-my-blacker border h-max border-my-black rounded-2xl mx-auto w-full" key={post._id}>
                                <Image src={urlFor(post.mainImage).width(400).height(200).url()} alt="Blog placeholder" width={300} height={200} className="rounded-2xl w-full h-50 object-cover" />
                                <div className="divide-y divide-my-black p-6">
                                    <div className="flex flex-col gap-2 pb-6">
                                        <p className="font-normal">
                                            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </p>
                                        <h3 className="text-xl text-my-white">{post.title}</h3>
                                        <p>{post.excerpt}</p>
                                    </div>
                                    <div className="flex  gap-4 mt-6 items-center">
                                        <div>
                                            <Image
                                                src={urlFor(post.author.image).width(50).height(50).url()}
                                                alt={post.author.name}
                                                width={50}
                                                height={50}
                                                className="rounded-lg w-full h-12.5 object-cover"
                                            />

                                        </div>
                                        <div>
                                            <p className="text-xl text-my-white">{post.author.name}</p>
                                            <p>{post.author.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        )}
                </div>
                <div className="mx-auto mt-4 md:mt-7">
                    <button className="px-5 py-3 rounded-full border-my-black bg-my-blacker border cursor-pointer">View More</button>
                </div>
            </div>
        </section>
    )
}

export default LatestBlogs