import Image from 'next/image';

function Hero() {
    return (
        <section className="relative">
            <div className="h-screen w-full box-pattern flex items-center justify-center">
                <div className="relative z-10 flex flex-col justify-center items-center gap-7 px-4 text-center">
                    <div className='flex items-center gap-4'>
                        <span className='bg-my-deep-black p-3 border border-my-black rounded-full'>
                            <Image
                                src="/images/google-logo.svg"
                                alt="Google logo"
                                width={26}
                                height={26}
                                className="object-contain"
                                priority
                            />
                        </span>
                        <span>
                            <Image
                                src="/images/stars.svg"
                                alt="Five Stars"
                                width={100}
                                height={30}
                                className="object-contain"
                                priority
                            />
                        </span>
                        <span>
                            <p className='font-semibold'>Rated 5.0</p>
                        </span>
                    </div>
                    <h1 className="max-w-[950px] text-center text-6xl font-bold text-my-white">Get More Customers and Increase Your Revenue in 90 Days</h1>
                    <p className="text-xl font-semibold">Amplify your company's reach and increase your revenue in 3 months.</p>
                    <button className="text-my-deep-black px-7 py-4 bg-my-lime rounded-full font-semibold text-lg">Get Started Today</button>
                </div>
                <div className="absolute bottom-0 bg-linear-to-t from-my-deep-black/90 to-my-deep-black/10 h-3/5 w-full"></div>
            </div>
        </section>
    )
}

export default Hero