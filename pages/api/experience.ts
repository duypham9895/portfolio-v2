import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

import { Experience } from "../../types/generated";

const queryExperiences = groq`
  *[_type == "experience"]{
    ...,
    technologies[]->
  }
`;

type Data = {
  experiences: Experience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fetchedExperiences: Experience[] = await sanityClient.fetch(
    queryExperiences
  );
  res.status(200).json({ experiences: fetchedExperiences });
}
