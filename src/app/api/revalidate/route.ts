import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, slug } = body;

    if (type === "post") {
      revalidateTag("posts", "default");
      if (slug) revalidateTag(`post:${slug}`, "default");
    }

    if (type === "event") {
      revalidateTag("events", "default");
      if (slug) revalidateTag(`event:${slug}`, "default");
    }

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error("Failed to revalidate:", err);
    return NextResponse.json({ revalidated: false }, { status: 500 });
  }
}
