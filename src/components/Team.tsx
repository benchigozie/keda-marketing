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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          <div className='bg-my-blacker border border-my-black rounded-xl overflow-clip max-w-96 mx-auto w-full'>
            <Image src="/images/david.webp" alt="Team Member 1" width={300} height={500} className="w-full h-96 object-cover bg-red-600" />
            <div className='p-5'>
              <h3 className='text-xl text-my-white'>David Asoya</h3>
              <p>Founder</p>
            </div>
          </div>
          <div className='bg-my-blacker border border-my-black rounded-xl overflow-clip max-w-96 mx-auto w-full'>
            <Image src="/images/bukola.webp" alt="Team Member 1" width={300} height={500} className="w-full h-96 object-cover bg-red-600" />
            <div className='p-5'>
              <h3 className='text-xl text-my-white'>Bukola Adewuyi</h3>
              <p>Content Strategist</p>
            </div>
          </div>
          <div className='bg-my-blacker border border-my-black rounded-xl overflow-clip max-w-96 mx-auto w-full'>
            <Image src="/images/blessing.webp" alt="Team Member 1" width={300} height={500} className="w-full h-96 object-cover bg-red-600" />
            <div className='p-5'>
              <h3 className='text-xl text-my-white'>Blessing Adewuyi</h3>
              <p>Marketing Assistant</p>
            </div>
          </div>
          <div className='bg-my-blacker border border-my-black rounded-xl overflow-clip max-w-96 mx-auto w-full'>
            <Image src="/images/richard.webp" alt="Team Member 1" width={300} height={500} className="w-full h-96 object-cover bg-red-600" />
            <div className='p-5'>
              <h3 className='text-xl text-my-white'>Joseph Richard</h3>
              <p>Copy Writer</p>
            </div>
          </div>
          <div className='bg-my-blacker border border-my-black rounded-xl overflow-clip max-w-96 mx-auto w-full'>
            <Image src="/images/onose.webp" alt="Team Member 1" width={300} height={500} className="w-full h-96 object-cover bg-red-600" />
            <div className='p-5'>
              <h3 className='text-xl text-my-white'>Onosemudiana</h3>
              <p>Lead Generation Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team