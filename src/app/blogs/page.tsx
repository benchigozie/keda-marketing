import BlogHero from "@/components/BlogHero"
import LatestBlogs from "@/components/LatestBlogs"
import TopBlogs from "@/components/TopBlogs"
import { Suspense } from "react"
import LatestSkeletonBlogs from "@/components/LatestSkeletonBlogs"
import TopSkeletonBlogs from "@/components/TopSkeletonBlogs"
import SearchSkeletonBlogs from "@/components/SearchSkeletonBlogs"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import BlogCategories from "@/components/BlogCategories"
import SearchResults from "@/components/SearchResults"
import BlogSearchClient from "@/components/BlogSearchClient"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Blog",
  description: "Insights on marketing and business growth strategies.",
};



function page() {


  return (
    <div>
      <BlogSearchClient />
      <Suspense fallback={<LatestSkeletonBlogs />}>
        <LatestBlogs />
      </Suspense>
      <Suspense fallback={<TopSkeletonBlogs />}>
        <TopBlogs />
      </Suspense>
      <BlogCategories />
      <Contact />
      <Footer />
    </div >
  )
}

export default page