import { Social } from "../types/generated";

export const fetchSocials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/socials`);
  const data = await res.json();
  return data.socials as Social[];
};
