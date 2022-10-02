import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import BackgroundCircles from "./UI/BackgroundCircles";
import { PageInfo } from "../types/generated";
import SanityImageLoader from "./UI/SanityImageLoader";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo: { heroImage, name, role } }: Props) => {
  const [text] = useTypewriter({
    words: [
      `Hi, my name is ${name}`,
      "guy_who_loves_cold_brew.tsx",
      "<butLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <SanityImageLoader
        src={heroImage}
        className="relative rounded-full mx-auto object-cover"
        alt="me"
        width="128"
        height="128"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="https://resume.io/r/SiSFpZRMv" passHref>
            <a target="_blank" rel="noopener noreferrer" className="heroButton">
              Resume
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
