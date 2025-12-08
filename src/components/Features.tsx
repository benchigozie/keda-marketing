import Image from "next/image";
import { ArrowRight, Check } from "lucide-react"

function Features() {
    return (
        <section className="bg-my-deep-black pt-12">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/crown.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">Features</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">Top Features of Our Services</h2>
                <p className="text-center text-lg font-semibold max-w-4xl mx-auto">These features make working with us an awesome experience.</p>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] pt-8 ">
                    <div className="bg-my-blacker rounded-xl p-8 border border-my-black justify-center flex flex-col gap-4">
                        <h3 className="text-my-white text-xl">Start your journey with Keda Marketing</h3>
                        <p>Every step in our process is designed to give you a seamless experience and maximum profits.</p>
                        <div>
                            <ul className="flex flex-col gap-3">
                                <li className="text-my-white flex gap-2 items-center"><span className="p-1.5 text-my-lime rounded-full bg-my-black"><Check size={18} /></span><span>AI Automated Workflows</span></li>
                                <li className="text-my-white flex gap-2 items-center"><span className="p-1.5 text-my-lime rounded-full bg-my-black"><Check size={18} /></span><span>Content Management System</span></li>
                                <li className="text-my-white flex gap-2 items-center"><span className="p-1.5 text-my-lime rounded-full bg-my-black"><Check size={18} /></span><span>Data Analysis & Insights</span></li>
                                <li className="text-my-white flex gap-2 items-center"><span className="p-1.5 text-my-lime rounded-full bg-my-black"><Check size={18} /></span><span>Monthly Feedback</span></li>
                            </ul>
                        </div>
                        <button className="mt-4 bg-my-black w-full p-4 rounded-full text-my-white flex justify-center gap-2 items-center"><span>Contact Us</span><ArrowRight size={20} /></button>
                    </div>
                    <div className="m-6 grid grid-cols-1 divide-y divide-my-black divide-dashed">
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x divide-my-black divide-dashed">
                            <div className="p-6 flex flex-col gap-2">
                                <Image src="/images/cms.svg" alt="" width={25} height={25}/>
                                <h4 className="text-my-white text-xl">Content Management Systems</h4>
                                <p>We implement Notion-based content management systems to help our clients plan, optimize, and execute their content strategy.</p>
                            </div>
                            <div className="p-6 flex flex-col gap-2">
                                <Image src="/images/analytics.svg" width={25} height={25} alt="" />
                                <h4 className="text-my-white text-xl">Data Analysis & Insights</h4>
                                <p>We provide you with the necessary information and research required to make specific marketing or sales-related decisions.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x divide-my-black divide-dashed">
                            <div className="p-6 flex flex-col gap-2">
                                <Image src="/images/ai.svg" alt="" width={25} height={25}/>
                                <h4 className="text-my-white text-xl">AI Automated Workflows</h4>
                                <p>Our marketing campaigns and processes are powered by automation and artificial intelligence.</p>
                            </div>
                            <div className="p-6 flex flex-col gap-2">
                                <Image src="/images/feedback.svg" alt="" width={25} height={25}/>
                                <h4 className="text-my-white text-xl">Feedbacks & Reviews</h4>
                                <p>We host monthly feedback sessions with our clients and their teams and discuss areas for improvements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features