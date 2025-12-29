'use client'

import { useState } from "react"
import BlogHero from "./BlogHero"
import SearchResults from "./SearchResults"
import { sanityClient } from "@/lib/sanityClient"

const searchQuery = `
*[
  _type == "post" &&
  publishedAt <= now() &&
  (
    title match $term ||
    excerpt match $term ||
    pt::text(body) match $term
  )
]
| order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage,
  "author": author->{name, role, "image": image}
}
`

export default function BlogSearchClient() {

    const [search, setSearch] = useState("")
    const [searchedPosts, setSearchedPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const handleSearch = async () => {
        if (!search) return
        setLoading(true)

        const data = await sanityClient.fetch(searchQuery, {
            term: `*${search}*`,
        })

        setSearchedPosts(data)
        setLoading(false)
    }

    return (
        <>
            <BlogHero setSearchTerm={setSearch} handleSearch={handleSearch} />
            {searchedPosts.length > 0 && (
                <SearchResults
                    searchedPosts={searchedPosts}
                    loading={loading}
                    searchTerm={search}
                />
            )}
        </>
    )
}