import Image from "next/image"
import Question from "./Question"

type FAQprop = {
    question: string;
    answer: string;
}

const MarketingFAQData: FAQprop[] = [
    {
        question: "What digital marketing channels do you specialize in",
        answer: "We specialize in website SEO, social media advertising, email marketing, and content marketing."
    },
    {
        question: "Do you offer any customized marketing packages",
        answer: "Yes we offer customized digital marketing packages tailored to your business goals and budget."
    },
    {
        question: "How do you measure the success of your digital marketing campaigns",
        answer: "We measure success by tracking metrics such as total number of leads generated, total number of sales and revenue generated."
    },
    {
        question: "How will you help me build and engage my audiece on social media platforms",
        answer: "We'd create a content marketing plan, create videos, graphics and run your ads to generate leads on a monthly basis."
    },
    {
        question: "Can you provide examples of successful digital marketing campaigns you've run",
        answer: "Certainly! our most recent campaign generated over 1,300 leads over 130 sales and a 3x return on ad spend."
    },
]

const WebsiteFAQData: FAQprop[] = [
    {
        question: "What is your process for starting a new project",
        answer: "Our process typically begins with an initial consultation to understand your needs and goals. We then move on to the research and concept phase, followed by design, development, feedback, revisions, and finally, tge delivery of the complete design."
    },
    {
        question: "What file formats will I recieve for the final design",
        answer: "We deliver final designs in a range of formats suitable for both digital and print use. Common formats include JPEG, PNG, PDF and vector files such as AI or EPS."
    },
    {
        question: "Do you offer custom web design solutions",
        answer: "Yes, we offer tailored web development solutions to meet your specific needs and requirements."
    },
    {
        question: "Can you explain your approach to responsive design",
        answer: "We design websites to ensure they provide an optimal viewing experience across all devices."
    },
];

function FAQs() {
    return (
        <section className="bg-my-deep-black py-12">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/faqs.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">FAQs</p>
                </div>
                <h2 className="font-bold text-5xl text-my-white text-center">Got Questions? We have got Answers</h2>
                <p className="text-center text-xl font-semibold max-w-4xl mx-auto">Still you have any questions? Contact our Team via support@Oustand.digital.com</p>
                <div className="grid grid-cols-2 gap-4 mt-10">
                    <div className="p-6 bg-my-blacker divide-my-black divide-y rounded-xl border border-my-black">
                        <h3 className="text-xl text-my-lime pb-6">Marketing Service Questions</h3>
                        <div className="pt-6 flex flex-col gap-4 divide-y divide-my-black">
                            {MarketingFAQData.map((faq, index) => 
                            (<Question key={index} question={faq.question} answer={faq.answer} />)
                            )}
                        </div>
                    </div>
                    <div className="p-6 bg-my-blacker divide-my-black divide-y rounded-xl border border-my-black h-max">
                        <h3 className="text-xl text-my-lime pb-6">Website Design Questions</h3>
                        <div className="pt-6 flex flex-col gap-4 divide-y divide-my-black">
                            {WebsiteFAQData.map((faq, index) => 
                            (<Question key={index} question={faq.question} answer={faq.answer} />)
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQs