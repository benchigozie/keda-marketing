import type { PortableTextBlock } from "@portabletext/types";
import { sanityClient } from "@/lib/sanityClient";
import { urlFor } from "@/lib/sanityImage";
import Image from "next/image";
import formatDate from "@/utils/formatDate";
import { PortableText } from "next-sanity";
import type { Metadata } from "next";

export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {
    const { slug } = await params;

    const post = await sanityClient.fetch<Post>(
        postQuery,
        { slug }
    );

    if (!post) {
        return {
            title: "Post not found | Keda Marketing",
        };
    }

    const ogImage = post.mainImage
        ? urlFor(post.mainImage).width(1200).height(630).url()
        : "https://kedamarketing.com/images/homepagepicture.png";

    return {
        title: post.title,
        description: post.excerpt,

        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://kedamarketing.com/blogs/${slug}`,
            type: "article",
            publishedTime: post.publishedAt,
            authors: [post.author.name],
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [ogImage],
        },
    };
}

type Category = {
    _id: string;
    title: string;
};

type Author = {
    name: string;
    role?: string;
    image: any;
};

type Post = {
    _id: string;
    title: string;
    publishedAt: string;
    excerpt: string;
    views: number;
    mainImage: any;
    body: PortableTextBlock[];
    author: Author;
    categories?: Category[];
};

interface PageProps {
    params: Promise<{ slug: string }>;
}

const postQuery = `
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  publishedAt,
  body,
  mainImage,
  excerpt,
  "author": author->{
    name,
    role,
    image
  }
}
`;




async function page({ params }: PageProps) {
    const { slug } = await params;

    const post = await sanityClient.fetch<Post>(
        postQuery,
        { slug },
        {
            next: {
                tags: ["posts"],
                revalidate: 3600,
            },
        }
    );

    console.log("this is slug", slug);
    console.log("this is post", post);

    if (!post) {
        return <div className="pt-40 text-center mt-24">Post not found</div>;
    }
    return (
        <section className="bg-my-deep-black relative">
            <div className="flex flex-col gap-4 max-w-4xl mx-auto px-3 pb-12 pt-38">
                <div className="flex flex-col gap-7">
                    <h1 className="text-my-white text-2xl md:text-4xl font-bold mt-4">{post.title}</h1>
                    <div className="flex items-center gap-4 mt-2 divide-my-black divide-y">
                        <div>
                            <Image src={urlFor(post.author.image).width(100).url()} alt={post.author?.name || "Author"} width={100} height={100} className="rounded-full object-cover w-16 h-16" />
                        </div>
                        <div>
                            <p>Author:<span className="ml-3 text-my-lime">{post.author.name}</span></p>
                            <p>Published on {formatDate(post.publishedAt, "long").month}  {formatDate(post.publishedAt, "long").day}, {formatDate(post.publishedAt, "long").year}</p>
                        </div>
                    </div>
                    <Image src={urlFor(post.mainImage).width(800).url()} alt={post.title} width={800} height={400} className="rounded-lg object-cover mx-auto w-full" />
                </div>
                <div className="prose prose-invert  prose-ul:marker:text-my-lime prose-ol:marker:text-my-lime max-w-none mt-6 text-lg">
                    <PortableText value={post.body} />
                </div>
            </div>
        </section>
    )
}

export default page