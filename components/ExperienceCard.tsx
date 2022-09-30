import React from "react";
import { motion } from "framer-motion";
import ReactOriginalIcon from "react-devicons/react/original";
import JavascriptOriginalIcon from "react-devicons/javascript/original";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://res.cloudinary.com/duypham9895/image/upload/v1664464589/personal/ggopgby1vuchm6kuv4f8.jpg"
        alt="logo-bizzi"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">Bizzi Vietnam</p>
        <div className="flex space-x-2 my-2">
          <ReactOriginalIcon />
          <JavascriptOriginalIcon />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
