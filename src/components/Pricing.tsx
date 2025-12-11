import Image from "next/image"

function Pricing() {
    return (
        <section className="bg-my-deep-black py-12">
            <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
                <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
                    <Image src="/images/faqs.svg" alt="" width={20} height={20} className="object-contain" />
                    <p className="text-my-lime">Pricing</p>
                </div>
                <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">Packages</h2>
                <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">Our prices are designed to accomodate your budget</p>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-6">
                    <div className="bg-my-blacker border border-my-black rounded-xl px-6 md:px-10 py-14 my-3 flex flex-col gap-4">
                        <h3 className="text-2xl text-my-lime font-bold">Basic</h3>
                        <p className="text-my-white text-4xl font-bold">$299</p>
                        <ul className="list-disc list-inside flex flex-col gap-2 md:text-lg  marker:text-my-lime">
                            <li>Feature One</li>
                            <li>Feature Two</li>
                            <li>Feature Three</li>
                        </ul>
                        <button className="mt-auto bg-my-lime text-my-black font-bold py-2 px-4 rounded hover:bg-my-lime-dark transition">Choose Plan</button>
                    </div>
                    <div className="bg-my-blacker border border-my-black rounded-xl px-6 md:px-10 py-14 my-3 flex flex-col gap-4">
                        <h3 className="text-2xl text-my-lime font-bold">Standard</h3>
                        <p className="text-my-white text-4xl font-bold">$299</p>
                        <ul className="list-disc list-inside flex flex-col gap-2 md:text-lg  marker:text-my-lime">
                            <li>Feature One</li>
                            <li>Feature Two</li>
                            <li>Feature Three</li>
                        </ul>
                        <button className="mt-auto bg-my-lime text-my-black font-bold py-2 px-4 rounded hover:bg-my-lime-dark transition">Choose Plan</button>
                    </div>
                    <div className="bg-my-blacker border border-my-black rounded-xl px-6 md:px-10 py-14 my-3 flex flex-col gap-4">
                        <h3 className="text-2xl text-my-lime font-bold">Premium</h3>
                        <p className="text-my-white text-4xl font-bold">$299</p>
                        <ul className="list-disc list-inside flex flex-col gap-2 md:text-lg  marker:text-my-lime">
                            <li>Feature One</li>
                            <li>Feature Two</li>
                            <li>Feature Three</li>
                        </ul>
                        <button className="mt-auto bg-my-lime text-my-black font-bold py-2 px-4 rounded hover:bg-my-lime-dark transition">Choose Plan</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing