import React from "react";
import { motion } from "framer-motion";
import JavascriptOriginalIcon from "react-devicons/javascript/original";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <motion.div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        className="rounded-full border border-gray-500 object-cover h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        src="https://res.cloudinary.com/duypham9895/image/upload/v1664523945/personal/a8vdkurb2vet2nveyhov.svg"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">2y</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
