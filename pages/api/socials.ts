import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

import { Social } from "../../types/generated";

const querySocials = groq`
  *[_type == "social"]
`;

type Data = {
  socials: Social[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fetchedSocials: Social[] = await sanityClient.fetch(querySocials);
  res.status(200).json({ socials: fetchedSocials });
}
