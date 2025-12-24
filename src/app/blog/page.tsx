import BlogHero from "@/components/BlogHero"
import LatestBlogs from "@/components/LatestBlogs"
import TopBlogs from "@/components/TopBlogs"
import { Suspense } from "react"
import LatestSkeletonBlogs from "@/components/LatestSkeletonBlogs"
import TopSkeletonBlogs from "@/components/TopSkeletonBlogs"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import BlogCategories from "@/components/BlogCategories"

function page() {
    return (
        <div>
            <BlogHero />
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