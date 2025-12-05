import { ArrowRight } from "lucide-react"
import Link from "next/link"

function Footer() {
    return (
        <section className="bg-my-deep-black py-12 px-9">
            <div className="bg-my-blacker border border-my-black px-12 pt-16 pb-8 rounded-xl">
                <div className="flex flex-col gap-6 max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-4">
                            <p>What are you waiting for?</p>
                            <p className="text-3xl text-my-white font-emibold">Let's help you get more <span className="text-my-lime">customers</span> and multiply your <span className="text-my-lime">revenue</span>.</p>
                            <div>
                                <button className="mt-4 bg-my-lime py-4 px-6 rounded-full text-my-black flex justify-center gap-2 items-center"><span>Get it Touch</span><ArrowRight size={20} /></button>
                            </div>
                        </div>
                        <div className="flex justify-between mr-28">
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl text-my-white mb-2">Pages</h3>
                                <Link href="">Home</Link>
                                <Link href="">Services</Link>
                                <Link href="">Works</Link>
                                <Link href="">Contact</Link>
                                <Link href="">Privacy Policy</Link>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl text-my-white">Company</h3>
                                <Link href="">Why Us</Link>
                                <Link href="">Expertise</Link>
                                <Link href="">Features</Link>
                                <Link href="">Pricing</Link>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl text-my-white">Info</h3>
                                <Link href="">Values</Link>
                                <Link href="">FAQ's</Link>
                                <Link href="">Testimonials</Link>
                                <Link href="">Our Team</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-10 border-t border-my-black pt-6">
                        <p>Powered by Keda</p>
                        <Link href="">Back to Top</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer