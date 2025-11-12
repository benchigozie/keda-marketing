import Image from "next/image"

function ShowCaseLogos() {
  return (
    <section className="mx-auto">
      <div className="h-20 max-w-5xl overflow-hidden relative">
        <div className="w-[200%] flex animate-scroll">
          <div className="flex w-1/2 justify-between items-center px-12 flex-none">
            <Image src="/images/clientlogo1.avif" alt="" width={60} height={40} className="object-contain" />
            <Image src="/images/clientlogo2.avif" alt="" width={110} height={40} className="object-contain" />
            <Image src="/images/clientlogo3.avif" alt="" width={50} height={40} className="object-contain" />
            <Image src="/images/clientlogo4.avif" alt="" width={100} height={40} className="object-contain" />
            <Image src="/images/clientlogo5.avif" alt="" width={100} height={40} className="object-contain" />
            <Image src="/images/clientlogo6.avif" alt="" width={100} height={40} className="object-contain" />
          </div>
          <div className="flex w-1/2 justify-between items-center px-12 flex-none">
            <Image src="/images/clientlogo1.avif" alt="" width={60} height={40} className="object-contain" />
            <Image src="/images/clientlogo2.avif" alt="" width={110} height={40} className="object-contain" />
            <Image src="/images/clientlogo3.avif" alt="" width={50} height={40} className="object-contain" />
            <Image src="/images/clientlogo4.avif" alt="" width={100} height={40} className="object-contain" />
            <Image src="/images/clientlogo5.avif" alt="" width={100} height={40} className="object-contain" />
            <Image src="/images/clientlogo6.avif" alt="" width={100} height={40} className="object-contain" />
          </div>
        </div>
        <div className="absolute left-0 top-0 h-full w-16 bg-linear-to-r from-my-deep-black to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-16 bg-linear-to-l from-my-deep-black to-transparent pointer-events-none"></div>
      </div>
    </section>
  )
}

export default ShowCaseLogos