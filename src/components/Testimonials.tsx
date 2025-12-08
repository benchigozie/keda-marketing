import Image from "next/image";
import Testimonial from "./Testimonial";

type TestimonialType = {
    name: string;
    image: string;
    title: string;
    emotion: string;
    text: string;
}

const TestimonialsData: TestimonialType[] = [
    {
        name: "Joseph Richard",
        image: "/images/josephrichard.avif",
        title: "Founder : Apex Tutorials",
        emotion: "Excited",
        text: "I have been extremely happy with the results of working with the creative agency, and I would highly recommend them to anyone who is looking for high-quality and intuitive design."
    },
    {
        name: "Prosperity Olorunfemi",
        image: "/images/prosperity.avif",
        title: "Head of Marketing Newton Academy",
        emotion: "Awesome",
        text: "David came in at a time where we were having some challenges. His insights and strategies were able to help us uncover other sources of profits."
    },
    {
        name: "Peculiar Osahon",
        image: "/images/perculiar.avif",
        title: "Founder : Gold Mine Academy",
        emotion: "Satisfied",
        text: "I learnt new strategies on how to go about my business. When I implemented them, I got massive results. Even after our training ended he is still being helpful in my implementation process. I still call on him for consultations, advise and direction on what to do regards my marketing process and implementation."
    },
    {
        name: "Bill Eddy Saliu",
        image: "/images/billy.avif",
        title: "High Ticket Sales Closer",
        emotion: "Very Impressive",
        text: "His videos are very very solid. I couldn't believe it when I saw it. You need to let more people know what you have to offer."
    },
    {
        name: "Haoma Worgwu",
        image: "/images/haoma.avif",
        title: "Founder Visibilty Academy",
        emotion: "Super happy",
        text: "The videos are very impressive, there's been a lot of improvement and they have been quick to respond to feedback."
    },
    {
        name: "Emmanuel Eribo",
        image: "/images/emmanuel.avif",
        title: "Founder Bill's Empire",
        emotion: "Excellent",
        text: "The work you do for my brand, I do not take it for granted. I am looking forward to future partnerships."
    }
];

function Testimonials() {
    return (
        <section className="bg-my-deep-black py-12">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/testimonials.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">Testimonials</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">What our Clients say About US</h2>
                <p className="text-center text-lg font-semibold max-w-4xl mx-auto">We prioritize ethical practices, customer focus, and continuous improvement.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 g pt-10">
                    {TestimonialsData.map((testimonial, index) => (
                        <Testimonial
                            key={index}
                            name={testimonial.name}
                            image={testimonial.image}
                            title={testimonial.title}
                            emotion={testimonial.emotion}
                            text={testimonial.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials