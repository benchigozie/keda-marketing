"use client";

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Image from 'next/image';

function Hero() {

    const container: Variants = {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.4,
          },
        },
      };

      const child: Variants = {
        hidden: { opacity: 0, scale: 0.5 },
        show: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      };

    return (
        <section className="relative">
            <div  className="h-[81vh] w-full box-pattern flex items-center justify-center">
                <motion.div 
                variants={container}
                initial="hidden"
                animate="show"  className="relative z-10 flex flex-col justify-end pb-12 items-center gap-8 py-2 px-4 text-center h-full">
                    <motion.div variants={child} className='flex items-center gap-4'>
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
                    </motion.div>
                    <motion.h1 variants={child} className="max-w-[800px] text-center text-6xl font-bold text-my-white">Get More Customers and Increase Your Revenue in Just 90 Days</motion.h1>
                    <motion.p variants={child} className="text-xl font-semibold">Amplify your company's reach and increase your revenue in 3 months.</motion.p>
                    <motion.button variants={child} className="text-my-deep-black px-7 py-4 bg-my-lime rounded-full font-semibold text-lg">Get Started Today</motion.button>
                </motion.div>
                <div className="absolute bottom-0 bg-linear-to-t from-my-deep-black/90 to-my-deep-black/10 h-3/5 w-full"></div>
            </div>
        </section>
    )
}

export default Hero