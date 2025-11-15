import Image from "next/image"

function Why() {
  return (
    <section className="bg-my-deep-black">
      <div className="max-w-6xl mx-auto py-20 flex flex-col gap-6">
        <div className="rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black w-max">
          <Image src="/images/selling.svg" alt="" width={20} height={20} className="object-contain" />
          <p className="text-my-lime">Selling Points</p>
        </div>
        <h2 className="font-bold text-5xl text-my-white text-center">Why Choose Us?</h2>
        <p className="text-center text-lg font-semibold max-w-4xl mx-auto">No fluff just 100% results.</p>
        <div className="grid grid-cols-3 mt-10">
          <div className="flex flex-col gap-3">
            <div className="p-8 bg-my-blacker rounded-xl border border-my-black flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Image src="/images/crown2.svg" alt="" width={25} height={25} className="object-contain" />
                <h3 className="text-xl text-my-white">Expertise and Experience</h3>
              </div>
              <div className="border-t border-my-black"></div>
              <div>
                <p>Trust our team for high-quality digital solutions that meet and exceed your expectations.</p>
              </div>
            </div>
            <div className="p-8 bg-my-blacker rounded-xl border border-my-black flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Image src="/images/crown2.svg" alt="" width={25} height={25} className="object-contain" />
                <h3 className="text-xl text-my-white">Expertise and Experience</h3>
              </div>
              <div className="border-t border-my-black"></div>
              <div>
                <p>Trust our team for high-quality digital solutions that meet and exceed your expectations.</p>
              </div>
            </div>
            <div className="p-8 bg-my-blacker rounded-xl border border-my-black flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Image src="/images/crown2.svg" alt="" width={25} height={25} className="object-contain" />
                <h3 className="text-xl text-my-white">Expertise and Experience</h3>
              </div>
              <div className="border-t border-my-black"></div>
              <div>
                <p>Trust our team for high-quality digital solutions that meet and exceed your expectations.</p>
              </div>
            </div>         
          </div>
          <div></div>
          <div className="flex flex-col gap-3">
            <div className="p-8 bg-my-blacker rounded-xl border border-my-black flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Image src="/images/crown2.svg" alt="" width={25} height={25} className="object-contain" />
                <h3 className="text-xl text-my-white">Expertise and Experience</h3>
              </div>
              <div className="border-t border-my-black"></div>
              <div>
                <p>Trust our team for high-quality digital solutions that meet and exceed your expectations.</p>
              </div>
            </div>
            <div className="p-8 bg-my-blacker rounded-xl border border-my-black flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Image src="/images/crown2.svg" alt="" width={25} height={25} className="object-contain" />
                <h3 className="text-xl text-my-white">Expertise and Experience</h3>
              </div>
              <div className="border-t border-my-black"></div>
              <div>
                <p>Trust our team for high-quality digital solutions that meet and exceed your expectations.</p>
              </div>
            </div>
            <div className="p-8 bg-my-blacker rounded-xl border border-my-black flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Image src="/images/crown2.svg" alt="" width={25} height={25} className="object-contain" />
                <h3 className="text-xl text-my-white">Expertise and Experience</h3>
              </div>
              <div className="border-t border-my-black"></div>
              <div>
                <p>Trust our team for high-quality digital solutions that meet and exceed your expectations.</p>
              </div>
            </div>         
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why;