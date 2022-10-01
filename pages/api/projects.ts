import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

import { Project } from "../../types/generated";

const queryProjects = groq`
  *[_type == "project"]{
    ...,
    technologies[]->
  }
`;

type Data = {
  projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fetchedProjects: Project[] = await sanityClient.fetch(queryProjects);
  res.status(200).json({ projects: fetchedProjects });
}
