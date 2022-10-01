import { PageInfo } from "../types/generated";

export const fetchPageInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pageInfo`);
  const data = await res.json();
  return data.pageInfo as PageInfo;
};
