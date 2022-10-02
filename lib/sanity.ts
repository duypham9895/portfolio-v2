import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import sanityImage from "@sanity/image-url";

import { Image } from "../types/generated";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

export const urlFor = (source: Image) =>
  createImageUrlBuilder(config).image(source);

export const imageBuilder = sanityImage(sanityClient);
