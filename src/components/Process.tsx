import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

function Process() {
  return (
    <section className="bg-my-deep-black pt-12">
      <div className="flex flex-col gap-6 max-w-6xl mx-auto">
        <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
          <Image src="/images/process.svg" alt="" width={20} height={20} className="object-contain" />
          <p className="text-my-lime">Process</p>
        </div>
        <h2 className="font-bold text-5xl text-my-white text-center">Our Unique Approach</h2>
        <p className="text-center text-lg font-semibold max-w-4xl mx-auto">We believe in the power of systems and we use it to deliver exceptional results.</p>
        <div className='grid grid-cols-3 gap-6 mt-8'>
          <div className='bg-my-blacker border border-my-black p-8 rounded-xl flex flex-col gap-6'>
            <div className='flex justify-between'>
              <div className='bg-my-black p-2 rounded-lg'>
                <Image src="/images/consultation.svg" alt="" width={25} height={25} className="object-contain" />
              </div>
              <div className='bg-my-black p-2 rounded-lg'>
                <p>Week 1</p>
              </div>
            </div>
            <h3 className='text-white text-xl'>Consultation</h3>
            <p>We start with a consultation to understand your goals and the business needs and requirements.</p>
          </div>
          <div className='bg-my-blacker border border-my-black p-8 rounded-xl flex flex-col gap-6'>
            <div className='flex justify-between'>
              <div className='bg-my-black p-2 rounded-lg'>
                <Image src="/images/proposal.svg" alt="" width={25} height={25} className="object-contain" />
              </div>
              <div className='bg-my-black p-2 rounded-lg'>
                <p>Week 2</p>
              </div>
            </div>
            <h3 className='text-white text-xl'>Proposal</h3>
            <p>Based on our consultation, we'll give you a detailed proposal outlining our approach and pricing.</p>
          </div>
          <div className='bg-my-blacker border border-my-black p-8 rounded-xl flex flex-col gap-6'>
            <div className='flex justify-between'>
              <div className='bg-my-black p-2 rounded-lg'>
                <Image src="/images/execution.svg" alt="" width={25} height={25} className="object-contain" />
              </div>
              <div className='bg-my-black p-2 rounded-lg'>
                <p>Week 3</p>
              </div>
            </div>
            <h3 className='text-white text-xl'>Execution</h3>
            <p>Once approved, we'll start the project and keep you updated throughout.</p>
          </div>
          <div className='bg-my-blacker border border-my-black p-8 rounded-xl flex flex-col gap-6'>
            <div className='flex justify-between'>
              <div className='bg-my-black p-2 rounded-lg'>
                <Image src="/images/delivery.svg" alt="" width={25} height={25} className="object-contain" />
              </div>
              <div className='bg-my-black p-2 rounded-lg'>
                <p>Week 4</p>
              </div>
            </div>
            <h3 className='text-white text-xl'>Delivery</h3>
            <p>We'll deliver the final product, ensuring that it meets your expectations and requirements.</p>
          </div>
          <div className='bg-my-blacker border border-my-black p-8 rounded-xl flex flex-col gap-6'>
            <div className='flex justify-between'>
              <div className='bg-my-black p-2 rounded-lg border border-my-lime'>
                <Image src="/images/support.svg" alt="" width={25} height={25} className="object-contain" />
              </div>
              <div className='bg-my-black p-2 rounded-lg'>
                <p>Week 5</p>
              </div>
            </div>
            <h3 className='text-white text-xl'>Support</h3>
            <p>Our support doesn't end after delivery. We'll continue to support you and your project growth.</p>
          </div>
          <div className='bg-my-blacker border border-my-black p-8 rounded-xl flex flex-col gap-6'>
            <div className='flex justify-between'>
              <div className='bg-my-black p-2 rounded-lg'>
                <Image src="/images/feedback2.svg" alt="" width={25} height={25} className="object-contain" />
              </div>
              <div className='bg-my-black p-2 rounded-lg'>
                <p>Week 6</p>
              </div>
            </div>
            <h3 className='text-white text-xl'>Feedback</h3>
            <p>Continuous improvement is key. We value your input and use feedback to refine our processes.</p>
          </div>
        </div>
        <div className='bg-my-blacker border border-my-black p-10 rounded-xl flex justify-between items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <p className='text-xl'>What are you waiting for?</p>
            <h3 className='text-my-white text-3xl'>Start growing your company's <span className='text-my-lime'>revenue</span> today</h3>
          </div>
          <div>
            <button className="mt-4 bg-my-lime py-4 px-6 rounded-full text-my-black flex justify-center gap-2 items-center"><span>Get it Touch</span><ArrowRight size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process