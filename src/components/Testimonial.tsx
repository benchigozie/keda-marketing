import Image from "next/image";

type TestimonialProps = {
  name: string;
  image: string;
  title?: string;
  emotion: string;
  text: string;
};

function Testimonial({ name, image, title, emotion, text }: TestimonialProps) {
  return (
    <div className="bg-my-blacker p-9 rounded-xl border border-my-black flex flex-col gap-6 h-max">
      <p className="text-xl text-my-lime">{emotion}!</p>
      <p>{text}</p>
      <hr className="text-my-black" />
      <div className="flex justify-between gap-3 items-center">
        <div className="flex gap-3">
          <Image src={image} alt="" width={50} height={50} className="rounded-lg object-cover" />
          <div>
            <h3>{name}</h3>
            <p className="text-sm">{title}</p>
          </div>
        </div>
        <div className="p-4 bg-my-black rounded-full">
          <Image src="/images/x.png" alt="" width={25} height={25} className="object-contain" />
        </div>
      </div>
    </div>
  )
}

export default Testimonial;