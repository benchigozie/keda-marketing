import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});



export async function POST(req: Request) {
  try {

    const body = await req.json();

    const {
      name,
      email,
      phone,
      location,
      userType,
      referralSource,
    } = body;

    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_EVENTS_DATABASE_ID!,
      },
      properties: {
        Name: {
          title: [{ text: { content: name } }],
        },

        Email: {
          email: email,
        },

        Phone: {
          phone_number: phone,
        },

        Location: {
          rich_text: [{ text: { content: location || "" } }],
        },

        Status: {
          status: {
            name: "New Lead",
          },
        },

        "Which Of These Best Describes You?": {
          select: {
            name: userType,
          },
        },

        "How Did You Hear About Us?": {
          select: {
            name: referralSource,
          },
        },
      },
    });

    return NextResponse.json({ success: true, id: response.id });
  } catch (error: any) {
    console.error("Event registration failed:", error);

    return NextResponse.json(
      { error: "Failed to register for event" },
      { status: 500 }
    );
  }
}
