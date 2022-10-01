import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

import { PageInfo } from "../../types/generated";

const queryPageInfo = groq`
  *[_type == "pageInfo"][0]
`;

type Data = {
  pageInfo: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fetchedPageInfo: PageInfo = await sanityClient.fetch(queryPageInfo);
  res.status(200).json({ pageInfo: fetchedPageInfo });
}
