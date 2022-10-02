import React from "react";
import { motion } from "framer-motion";

import { Skill } from "../types/generated";
import { urlFor } from "../lib/sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill: { image, year } }: Props) => {
  return (
    <motion.div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        className="rounded-full border border-gray-500 object-cover h-20 w-20 md:h-24 md:w-24 xl:h-28 xl:w-28 p-1.5 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(image).url()}
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:h-24 md:w-24 xl:h-28 xl:w-28 p-1.5 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{year}y</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
