import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function POST(req: Request) {

  console.log("Received contact form submission: in route beginning", req);

  try {
    const body = await req.json();
    console.log("Received contact form submission in route try:", body);

    const {
      name,
      email,
      companyName,
      budget,
      service,
      phone,
      message,
    } = body;

      const response = await notion.pages.create({
        parent: {
          database_id: process.env.NOTION_DATABASE_ID!,
        },
        properties: {
          Name: {
            title: [{ text: { content: name } }],
          },
        
          Email: {
            email: email,
          },
        
          "Company Name": {
            rich_text: [{ text: { content: companyName || "" } }],
          },
        
          Budget: {
            number: budget ?? null,
          },
        
          Service: {
            status: {
              name: service,
            },
          },
        
          Message: {
            rich_text: [{ text: { content: message } }],
          },
        
          Phone: {
            phone_number: phone,
          },
        
          Status: {
            status: {
              name: "New Lead", 
            },
          },
        },
        
      });

      console.log("Notion page created:", response.id); 
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to save lead" },
      { status: 500 }
    );
  }
}
