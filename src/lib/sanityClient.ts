import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "d5l984xa",
  dataset: "production",
  apiVersion: "2025-12-16",
  useCdn: true,
});