'use client'

import BlogHero from "@/components/BlogHero"
import LatestBlogs from "@/components/LatestBlogs"
import TopBlogs from "@/components/TopBlogs"
import { Suspense } from "react"
import LatestSkeletonBlogs from "@/components/LatestSkeletonBlogs"
import TopSkeletonBlogs from "@/components/TopSkeletonBlogs"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import BlogCategories from "@/components/BlogCategories"


import { useEffect, useState } from "react"
import { sanityClient } from "@/lib/sanityClient"

const searchQuery = `
*[_type == "post" &&
  (
    title match $term ||
    excerpt match $term ||
    pt::text(body) match $term
  )
]
| order(publishedAt desc)
{
  _id,
  title,
  "slug": slug.current
}
`


function page() {

  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
    
  const handleSearch = async () => {
    if (!search) return
  
    setLoading(true)
    const data = await sanityClient.fetch(searchQuery, {
      term: `*${search}*`,
    })
    setPosts(data);
    console.log("Search results:", data);
    setLoading(false);
  }
  
    return (
        <div>
            <BlogHero searchTerm={search} setSearchTerm={setSearch} handleSearch={handleSearch}/>
            <Suspense fallback={<LatestSkeletonBlogs />}>
                <LatestBlogs />
            </Suspense>
            <Suspense fallback={<TopSkeletonBlogs />}>
                <TopBlogs />
            </Suspense>
            <BlogCategories />
            <Contact />
            <Footer />
        </div>
    )
}

export default page