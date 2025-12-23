import Image from "next/image";

function page() {
  return (
    <section className="background-3d pb-12 pt-38 relative">
               <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3 h-screen">
                   <div className="rounded-full flex justify-center mx-auto gap-1 px-2 py-1 bg-my-deep-black border border-my-black">
                       <Image src="/images/events.png" alt="" width={20} height={20} className="object-contain" />
                       <p className="text-my-lime">Services</p>
                   </div>
                   <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">Our Range of Expertise</h2>
                   <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">.....</p>
               </div>
           </section>
  )
}

export default page