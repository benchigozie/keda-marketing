"use client"

import Image from "next/image"
import SearchSkeletonBlogs from "./SearchSkeletonBlogs";
import { urlFor } from "@/lib/sanityImage";

type SearchResultsProps = {
    searchedPosts: any[];
    loading: boolean;
    searchTerm: string;
}

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


function SearchResults({ searchedPosts, loading, searchTerm }: SearchResultsProps) {

    console.log("Rendering SearchResults with", searchedPosts.length, "posts for term:", searchTerm, "posts:", searchedPosts);
    return (
        <section className="bg-my-deep-black bg pb-12 pt-5 relative">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3 relative z-20">
                <h2 className="font-bold text-2xl md:text-4xl text-center">Search Results for "{searchTerm}"</h2>
                {
                    loading ? <SearchSkeletonBlogs /> :
                        <>
                           
                            <div className="mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid">
                                {searchedPosts.map((post: Post) => (
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
                        </>
                }
            </div>
        </section>
    )
}

export default SearchResults