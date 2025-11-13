import Image from "next/image"

function Expertise() {
  return (
    <section className="bg-my-deep-black pt-12">
      <div className="flex flex-col gap-6 max-w-6xl mx-auto">
        <div className="w-36 rounded-full flex justify-center mx-auto gap-1 p-2 bg-my-deep-black border border-my-black">
          <Image src="/images/crown.svg" alt="" width={20} height={20} />
          <p className="text-my-lime">Expertise</p>
        </div>
        <h2 className="font-bold text-5xl text-my-white text-center">Our Expertise</h2>
        <p className="text-center text-lg font-semibold max-w-4xl mx-auto">Explore our specialized skills and knowledge across various industries. Discover how our unique value proposition sets us apart in delivering exceptional results.</p>
        <div className="flex flex-col pt-8">
          <div className="flex bg-my-blacker rounded-2xl overflow-hidden">
            <div className="h-[350px] w-[350px] bg-my-highlight">
              <Image />
            </div>
            <div className="p-10 flex flex-col gap-6">
              <div className="flex gap-2 items-center">
                <div className="rounded-lg p-3 bg-my-blacker border-my-black border">
                  <Image src="/images/advertising.svg" alt="Facebook Logo" width={28} height={28} />
                </div>
                <h3 className="text-2xl text-my-white font-bold">Facebook Advertising</h3>
              </div>
              <p className="text-lg font-semibold">Facebook advertising campaigns designed to help you generate 5,000+ leads every single month.</p>
              <div className="flex justify-between px-14 py-10 bg-my-blacker border border-my-black rounded-xl">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-my-lime text-2xl font-bold">200%</p>
                  <p>Sales Increased</p>
                </div>
                <div className="border-r border-my-highlight border-dashed"></div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-my-lime text-2xl font-bold">20+</p>
                  <p>Satisfied Clients</p>
                </div>
                <div className="border-r border-my-highlight border-dashed"></div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-my-lime text-2xl font-bold">Certified</p>
                  <p>Digital Advertisers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-my-blacker rounded-2xl overflow-hidden">
            <div className="p-10 flex flex-col gap-6">
              <div className="flex gap-2 items-center">
                <div className="rounded-lg p-3 bg-my-blacker border-my-black border">
                  <Image src="/images/webdesign.svg" alt="Facebook Logo" width={28} height={28} />
                </div>
                <h3 className="text-2xl text-my-white font-bold">Web Design</h3>
              </div>
              <p className="text-lg font-semibold">Strategic digital marketing campaigns that drive traffic, engagement, and conversions. Elevate your brand's online presence with our data-driven approach.</p>
              <div className="flex justify-between p-8 bg-my-blacker border border-my-black rounded-xl">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-my-lime text-2xl font-bold">75%</p>
                  <p>More Website Traffic</p>
                </div>
                <div className="border-r border-my-highlight border-dashed"></div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-my-lime text-2xl font-bold">10</p>
                  <p>Satisfied Clients</p>
                </div>
                <div className="border-r border-my-highlight border-dashed"></div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-my-lime text-2xl font-bold">Certified</p>
                  <p>Website Designers</p>
                </div>
              </div>
            </div>
            <div className="h-[350px] w-[350px] bg-my-highlight">
              <Image />
            </div>
          </div>
          <div className="flex bg-my-blacker rounded-2xl overflow-hidden">
            <div className="h-[350px] w-[350px] bg-my-highlight">
              <Image />
            </div>
            <div className="p-10 flex flex-col gap-6">
              <div className="flex gap-2 items-center">
                <div className="rounded-lg p-3 bg-my-blacker border-my-black border">
                  <Image src="/images/advertising.svg" alt="Facebook Logo" width={28} height={28} />
                </div>
                <h3 className="text-2xl text-my-white font-bold">Facebook Advertising</h3>
              </div>
              <p className="text-lg font-semibold">Facebook advertising campaigns designed to help you generate 5,000+ leads every single month.</p>
              <div className="flex justify-between px-14 py-10 bg-my-blacker border border-my-black rounded-xl">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-my-lime text-2xl font-bold">200%</p>
                  <p>Sales Increased</p>
                </div>
                <div className="border-r border-my-highlight border-dashed"></div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-my-lime text-2xl font-bold">20+</p>
                  <p>Satisfied Clients</p>
                </div>
                <div className="border-r border-my-highlight border-dashed"></div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-my-lime text-2xl font-bold">Certified</p>
                  <p>Digital Advertisers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise