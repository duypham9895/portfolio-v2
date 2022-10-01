import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

import { Skill } from "../../types/generated";

const querySkills = groq`
  *[_type == "skill"]
`;

type Data = {
  skills: Skill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fetchedSkills: Skill[] = await sanityClient.fetch(querySkills);
  res.status(200).json({ skills: fetchedSkills });
}
