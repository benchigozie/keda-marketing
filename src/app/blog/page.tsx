import BlogHero from "@/components/BlogHero"
import LatestBlogs from "@/components/LatestBlogs"
import TopBlogs from "@/components/TopBlogs"
import { Disc } from "lucide-react"

function page() {
    return (
        <div>
            <BlogHero />
            <LatestBlogs />
            <TopBlogs />
        </div>
    )
}

export default page