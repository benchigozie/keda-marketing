import Image from "next/image";
import { sanityClient } from "@/lib/sanityClient";
import { urlFor } from "@/lib/sanityImage";
import formatDate from "@/utils/formatDate";
import Link from "next/link";

type Event = {
    _id: string;
    title: string;
    date: string;
    slug: {
        current: string;
    };
    time: string;
    description: string;
    image: any;
    host?: {
        name: string;
        image?: any;
        bio?: string;
    };
};

export const eventsQuery = `
  *[_type == "event" && date >= now()] | order(date asc) {
  _id,
  title,
  date,
  time,
  slug,
  description,
  image,
  host->{
    name,
    image,
    bio
  }
}
`;

async function Events() {

    const events: Event[] = await sanityClient.fetch(eventsQuery, {}, { next: { revalidate: 60 } });

    console.log("Fetched events:", events);

    return (
        <div>
            {
                events.length === 0 ? (
                    <p className="text-center text-my-white">No upcoming events.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
                        {events.map((event) => (
                            <Link href={`/events/${event.slug.current}`} key={event._id}>
                                <div key={event._id} className="bg-my-blacker border border-my-black rounded-xl p-6 flex flex-col gap-2 hover:shadow-xl shadow-my-lime/40 transition-shadow duration-300 hover:cursor-pointer">
                                    <Image
                                        src={urlFor(event.image).width(600).url()}
                                        alt={event.title}
                                        width={600}
                                        height={400}
                                        className="rounded-lg object-cover"
                                    />
                                    <h3 className="text-2xl text-my-lime font-bold">{event.title}</h3>
                                    <p className="text-my-white font-semibold">{formatDate(event.date, "long").day} of {formatDate(event.date, "long").month} at {event.time}</p>
                                    {event.host && (
                                        <div className="mt-auto pt-4 border-t border-my-black">
                                            <h4 className="font-bold">Host</h4>
                                            <div className="flex items-center gap-4 mt-2">
                                                {event.host.image && (
                                                    <Image
                                                        src={urlFor(event.host.image).width(100).url()}
                                                        alt={event.host.name}
                                                        width={50}
                                                        height={500}
                                                        className="rounded-full mt-2"
                                                    />
                                                )}
                                                <p>{event.host.name}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default Events;