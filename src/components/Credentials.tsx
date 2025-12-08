"use client";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import ShowCaseLogos from "@/components/ShowcaseLogos";

function Credentials() {

    return (
        <section className="bg-my-deep-black">
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 1.6,
                    ease: "easeOut",
                }}
                className="max-w-7xl mx-auto py-1 px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:px-7 py-8">
                    <div className="bg-my-blacker border-my-black border rounded-2xl px-5 py-12 flex flex-col gap-3 items-center text-center justify-center">
                        <h3 className="text-my-white text-3xl md:text-[54px] font-manrope font-extrabold">535K+</h3>
                        <p className="font-semibold text-lg">Leads Generated</p>
                    </div>
                    <div className="bg-my-blacker border-my-black border rounded-2xl px-5 py-12 flex flex-col gap-3 items-center text-center justify-center">
                        <h3 className="text-my-white text-3xl md:text-[54px] font-manrope font-extrabold"><Counter to={75} />+</h3>
                        <p className="font-semibold text-lg"> Succesful Campaigns</p>
                    </div>
                    <div className="bg-my-blacker border-my-black border rounded-2xl px-5 py-12 flex flex-col gap-3 items-center text-center justify-center">
                        <h3 className="text-my-white text-3xl md:text-[54px] font-manrope font-extrabold"><Counter to={25} />+</h3>
                        <p className="font-semibold text-lg">Satisfied Clients</p>
                    </div>
                    <div className="bg-my-blacker border-my-black border rounded-2xl px-5 py-12 flex flex-col gap-3 items-center text-center justify-center">
                        <h3 className="text-my-white text-3xl md:text-[54px] font-manrope font-extrabold">21M+</h3>
                        <p className="font-semibold text-lg">Revenue Generated</p>
                    </div>
                </div>
                <div className="mt-12 pb-8 flex flex-col gap-6">
                    <h2 className="text-my-white text-center text-lg">Companies We've Worked With</h2>
                    <ShowCaseLogos />
                </div>
            </motion.div>
        </section>
    )
}

export default Credentials