import { sanityClient } from "@/lib/sanityClient";
import formatDate from "@/utils/formatDate";
import { urlFor } from "@/lib/sanityImage";
import Image from "next/image";
import CalenderIcon from "@/components/CalenderIcon";
import EventRegistrationForm from "@/components/EventForm";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from '@portabletext/types';
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

interface PageProps {
    params: Promise<{ slug: string }>;
}

const eventQuery =
    `
*[_type == "event" && slug.current == $slug][0]{
  _id,
  title,
  description,
  date,
  venue,
  time,
  image,
  host
}
`
type Event = {
    _id: string;
    title: string;
    description: PortableTextBlock[];
    date: string;
    time: string;
    venue?: string;
    image?: any;
    host?: {
        name: string;
        image?: any;
    };
};

async function page({ params }: PageProps) {

    const { slug } = await params;
    const event = await sanityClient.fetch<Event>(
        eventQuery,
        { slug },
    );

    console.log("this is slug", slug);

    console.log("this is event", event);

    return (
        <section className="background-3d relative">
            <div className="flex flex-col gap-6 max-w-4xl mx-auto px-3 pb-12 pt-38">
                <Image src={urlFor(event.image).width(800).url()} alt={event.title} width={800} height={400} className="rounded-lg object-cover mx-auto w-full" />
                <h1 className="text-my-white text-4xl md:text-6xl font-bold text-center mt-4">{event.title}</h1>
                <div className="flex flex-col md:flex-row gap-y-4 gap-x-16">
                    <div className="flex items-center gap-4 mt-2">
                        <CalenderIcon day={formatDate(event.date, "short").day} month={formatDate(event.date, "short").month} />
                        <div>
                            <p>{formatDate(event.date, "long").day} of {formatDate(event.date, "long").month}</p>
                            <p>{event.time}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                        <Image src="/images/gps.png" alt="" width={35} height={35} />
                        <div>
                            <p>{event.venue}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 rounded-lg overflow-hidden" >
                    <div className="bg-my-highlight px-4 py-2">
                        <p>Registration</p>
                    </div>
                    <div className="px-6 py-8 bg-my-blacker">
                        <p className="mb-4">Welcome! To join the event, please register below.</p>
                        <EventRegistrationForm eventId={event._id} />
                    </div>
                </div>
                <div className="divide-y divide-my-black/50 space-y-6 mt-6">
                    <h2 className="text-my-white text-center text-3xl font-bold mb-4">About Event</h2>
                    <PortableText value={event.description} />
                </div>
            </div>
            <Contact />
            <Footer />
        </section>
    )
}

export default page