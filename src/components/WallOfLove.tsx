"use client";

import Image from "next/image";
import { MessageCircleHeart, ChevronLeft, ChevronRight } from "lucide-react";
import { use, useState } from "react";

type TestimonialProp =
    {
        text: string;
        name: string;
        imageUrl: string;
    }

function WallOfLove() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials: TestimonialProp[] = [
        {
            text: "The work you do for my brand, I do not take it for granted. I am looking forward to future partnerships.",
            name: "Emmanuel Eribo",
            imageUrl: "/images/emmanuel.avif",
        },
        {
            text: "His videos are very very solid. I couldn't believe it when I saw it. You need to let more people know what you have to offer.",
            name: "Bill Eddy Saliu",
            imageUrl: "/images/billy.avif"
        },
        {
            text: "It is Brilliant work as Usual! Keep it up",
            name: "Olubunmi Fabanwo",
            imageUrl: "/images/Olubunmi.jpeg"
        }
    ]
    return (
        <section className="bg-my-deep-black pt-14 pb-12 relative">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <div className="flex items-center">
                        <MessageCircleHeart size={20} color="#CDF140" />
                    </div>
                    <p className="text-my-lime">Wall of Love</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center max-w-3xl mx-auto">Results That <span className="text-my-lime">Speak</span></h2>
                <div className="mt-11">
                    <div className="border overflow-hidden flex border-my-black rounded-3xl relative h-120 md:h-120">
                        <div
                            onClick={
                                () => {
                                    if (currentIndex === 0) {
                                        return
                                    } else {
                                        setCurrentIndex(currentIndex - 1)
                                    }
                                }
                            }
                            className="absolute z-20 p-2 border border-my-black hover:border-my-lime rounded-full left-1 md:left-5 top-1/2 transition-colors duration-200 cursor-pointer">
                            <ChevronLeft size={20} className="text-my-lime" />
                        </div>
                        <div onClick={
                            () => {
                                if ((currentIndex + 1) === testimonials.length) {
                                    return
                                } else {
                                    setCurrentIndex(currentIndex + 1)
                                }
                            }
                        } className="absolute z-20 p-2 border border-my-black hover:border-my-lime rounded-full right-1 md:right-5 top-1/2 transition-colors duration-200 cursor-pointer">
                            <ChevronRight size={20} className="text-my-lime" />
                        </div>
                        {
                            testimonials.map((testimonial, i) => (
                                <div key={i} className={`${i === currentIndex ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 ease-in-out bottom-0 bg-my-blacker absolute left-0 h-full w-full p-10 flex flex-col items-center justify-center gap-8`}>
                                    <p className="text-2xl md:text-3xl font-bold italic">{testimonial.text}</p>
                                    <div className="mt-10 flex items-center gap-4">
                                        <div className="flex flex-col items-center gap-2 mx-auto">
                                            <div className="w-16 h-16 relative rounded-full overflow-hidden">
                                                <Image src={testimonial.imageUrl} alt="Client Photo" fill className="object-cover" />
                                            </div>
                                            <p className="font-bold mt-2 text-my-white text-xl">{testimonial.name}</p>
                                            <p className="">Content Creator</p>
                                        </div>
                                    </div >
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default WallOfLove