import Image from "next/image"

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
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-my-blacker divide-my-black divide-y rounded-xl border border-my-black">
                        <h3 className="text-xl text-my-lime pb-6">Marketing Service Questions</h3>
                        <div className="pt-6">
                        </div>
                    </div>
                    <div className="p-6 bg-my-blacker divide-my-black divide-y rounded-xl border border-my-black">
                        <h3 className="text-xl text-my-lime pb-6">Website Design Questions</h3>
                        <div className="pt-6">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQs