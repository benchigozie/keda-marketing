"use client"

import { scrollToId } from '@/utils/scrollToId'
import ProgressBar from './ProgressBar'
import { Gift } from 'lucide-react'




function GetStartedVideo() {

  return (
    <section className="background-3d pb-12 pt-38 relative px-3" id='get-started'>
      <div className="flex flex-col gap-6 max-w-6xl mx-auto p-6 md:p-16 bg-my-blacker border border-my-black rounded-3xl">
        <h2 className="font-bold text-4xl md:text-6xl text-my-white text-center">Start For Free <span className='text-my-lime block'>Zero Risk, 100%</span> Value</h2>
        <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">We help you turn raw ideas into scroll-stopping, audience-focused videos while you focus on growing your business.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-10'>
          <div className='flex flex-col gap-6'>
            <h3 className='text-xl font-bold'>HOW IT WORKS:</h3>
            <div>
              {[
                "Sign Up for Free: Create your account and get started without any upfront costs.",
                "Submit Your Ideas: Share your video concepts, raw footage, or any specific requirements you have in mind.",
                "Collaborate with Our Team: Work closely with our expert editors to refine your vision and ensure the final product aligns with your goals.",
                "Receive Your Videos: Get high-quality, engaging videos ready to captivate your audience and drive results."
              ].map((text, i) => (
                <li key={i} className="flex gap-3 pb-4">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-my-lime text-my-black font-semibold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <p>{text}</p>
                </li>
              ))}
            </div>
            <p className='text-sm'>No contracts. No pressure. No risk.</p>
            <p className='text-my-lime'>"This is a win-win situation - you literally have nothing to lose."</p>
          </div>
          <div className='relative flex flex-col items-center gap-7 max-w-6xl mx-auto p-6 md:p-16 frosted-glass backdrop-blur-md border border-my-black rounded-3xl'>
            <Gift size={70} className='text-my-lime' />
            <p className='font-bold text-my-white text-4xl md:text-5xl text-center'>Claim Your Trial</p>
            <p className='bg-my-lime text-my-blacker w-max px-1'>Limited to 5 new clients monthly</p>
            <div className='w-full flex flex-col gap-4'>
              <div className='flex justify-between gap-4 text-xs w-full font-bold'>
                <p>SLOTS REMAINING</p>
                <p className='text-my-lime'>3 OF 5 LEFT</p>
              </div>
              <ProgressBar progress={60} />
            </div>
            <button onClick={() => scrollToId("contact")} className='bg-my-lime w-full px-4 md:px-6 py-3 md:py-4 rounded-full text-my-blacker hover:shadow-xl transition-shadow duration-200 hover:cursor-pointer shadow-my-lime/30'>
              Get Started For Free
            </button>
            <p className='text-sm animate-pulse font-bold'>CLICK ABOVE TO SECURE YOUR SPOT</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStartedVideo