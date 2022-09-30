import React from "react";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import BackgroundCircles from "./UI/BackgroundCircles";
import Link from "next/link";

// https://i.ibb.co/SN5wm1D/avatar.jpg

type Props = {};

const avatarLoader = ({ src }: { src: string }) => {
  return `https://res.cloudinary.com/duypham9895/image/upload/v1664464589/personal/${src}`;
};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Duy Pham",
      "guy_who_loves_cold_brew.tsx",
      "<butLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto object-cover"
        loader={avatarLoader}
        src="rcrfw0avep18b2ppuon9.jpg"
        alt="me"
        width="128"
        height="128"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
