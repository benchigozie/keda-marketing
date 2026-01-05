import Image from "next/image";

function WhatYouGetVideo() {
  return (
    <section className="bg-my-deep-black py-12">
      <div className="flex flex-col gap-6 max-w-6xl mx-auto px-3">
        <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
          <Image src="/images/brand.svg" alt="" width={20} height={20} className="object-contain" />
          <p className="text-my-lime">The Content Engine</p>
        </div>
        <h2 className="font-bold text-3xl md:text-5xl text-my-white text-center">What You Get With Our <span className="text-my-lime block">Video Growth System</span></h2>
        <p className="text-center text-lg md:text-xl font-semibold max-w-4xl mx-auto">This is more than editing - it's a complete done-for-you solution.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2 bg-my-blacker p-7 rounded-2xl border border-my-black">
            <div className="rounded-xl bg-my-black p-3 w-max">
              <Image src="/images/contentresearch.png" alt="" width={30} height={30} className="object-contain" />
            </div>
            <h3 className="text-my-white font-bold text-2xl mb-1">Content Research</h3>
            <p>We identify what your audience actually wants to watch.</p>
          </div>
          <div className="flex flex-col gap-2 bg-my-blacker p-7 rounded-2xl border border-my-black">
            <div className="rounded-xl bg-my-black p-3 w-max">
              <Image src="/images/contentscript.png" alt="" width={30} height={30} className="object-contain" />
            </div>
            <h3 className="text-my-white font-bold text-2xl mb-1">Content Scripting</h3>
            <p>Clear, engaging scripts that keep viewers hooked.</p>
          </div>
          <div className="flex flex-col gap-2 bg-my-blacker p-7 rounded-2xl border border-my-black">
            <div className="rounded-xl bg-my-black p-3 w-max">
              <Image src="/images/customcms.png" alt="" width={30} height={30} className="object-contain" />
            </div>
            <h3 className="text-my-white font-bold text-2xl mb-1">Custom CMS (Notion)</h3>
            <p>Stay organized and track everything with our private system.</p>
          </div>
          <div className="flex flex-col gap-2 bg-my-blacker p-7 rounded-2xl border border-my-black">
            <div className="rounded-xl bg-my-black p-3 w-max">
              <Image src="/images/smm.png" alt="" width={30} height={30} className="object-contain" />
            </div>
            <h3 className="text-my-white font-bold text-2xl mb-1">Social Media Management</h3>
            <p>Consistent posting without the stress or manual effort.</p>
          </div>
          <div className="flex flex-col gap-2 bg-my-blacker p-7 rounded-2xl border border-my-black">
            <div className="rounded-xl bg-my-black p-3 w-max">
              <Image src="/images/video.png" alt="" width={30} height={30} className="object-contain" />
            </div>
            <h3 className="text-my-white font-bold text-2xl mb-1">Professional Video Editing</h3>
            <p>Clean, engaging, and platform-optimized for retention.</p>
          </div>
          <div className="flex flex-col gap-2 bg-my-blacker p-7 rounded-2xl border border-my-black">
            <div className="rounded-xl bg-my-black p-3 w-max">
              <Image src="/images/thumbnaildesign.png" alt="" width={30} height={30} className="object-contain" />
            </div>
            <h3 className="text-my-white font-bold text-2xl mb-1">Thumbnail Design</h3>
            <p>Click-worthy thumbnails that boost your CTR and views.</p>
          </div>
          <div className="flex flex-col gap-2 bg-my-blacker p-7 rounded-2xl border border-my-black">
            <div className="rounded-xl bg-my-black p-3 w-max">
              <Image src="/images/emailnewsletter.png" alt="" width={30} height={30} className="object-contain" />
            </div>
            <h3 className="text-my-white font-bold text-2xl mb-1">Email Newsletters</h3>
            <p>Turn video content into relationship-building written emails.</p>
          </div>
          <div className="flex flex-col gap-2 bg-my-blacker p-7 rounded-2xl border border-my-black">
            <div className="rounded-xl bg-my-black p-3 w-max">
              <Image src="/images/distribution.png" alt="" width={30} height={30} className="object-contain" />
            </div>
            <h3 className="text-my-white font-bold text-2xl mb-1">Distribution & Promotion</h3>
            <p>Strategic plans to get your content seen by the right people.</p>
          </div>
          <div className="flex flex-col gap-2 bg-my-blacker p-7 rounded-2xl border border-my-black">
            <div className="rounded-xl bg-my-black p-3 w-max">
              <Image src="/images/offer.png" alt="" width={30} height={30} className="object-contain" />
            </div>
            <h3 className="text-my-white font-bold text-2xl mb-1">Offer Optimization</h3>
            <p>Align your content strategy directly with your revenue goals.</p>
          </div>
          <div className="flex flex-col gap-2 bg-my-blacker p-7 rounded-2xl border border-my-black">
            <div className="rounded-xl bg-my-black p-2 w-max">
              <Image src="/images/contentcalender.png" alt="" width={30} height={30} className="object-contain" />
            </div>
            <h3 className="text-my-white font-bold text-2xl mb-1">Content Calendar</h3>
            <p>Know exactly what to post and when — forever.</p>
          </div>
          <div className="flex flex-col gap-2 bg-my-blacker p-7 rounded-2xl border border-my-black">
            <div className="rounded-xl bg-my-black p-2 w-max">
              <Image src="/images/youtube.png" alt="" width={30} height={30} className="object-contain" />
            </div>
            <h3 className="text-my-white font-bold text-2xl mb-1">YouTube Management</h3>
            <p>End-to-end support for channel growth and SEO.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatYouGetVideo