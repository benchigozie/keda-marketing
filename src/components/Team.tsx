import Image from 'next/image';

function Team() {
  return (
    <section className="bg-my-deep-black py-12">
      <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
        <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
          <Image src="/images/faqs.svg" alt="" width={20} height={20} className="object-contain" />
          <p className="text-my-lime">Team Members</p>
        </div>
        <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">Meet The Team</h2>
        <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">SWe are a dedicated group of individuals driven by our shared vision of making a real difference in the world.</p>
      </div>
    </section>
  )
}

export default Team