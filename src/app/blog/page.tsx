import BlogHero from "@/components/BlogHero"
import LatestBlogs from "@/components/LatestBlogs"
import { Disc } from "lucide-react"

function page() {
    return (
        <div>
            <BlogHero />
            <LatestBlogs />
        </div>
    )
}

export default page