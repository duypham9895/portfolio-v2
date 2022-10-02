import React from "react";
import { motion } from "framer-motion";
import snakeCase from "lodash/snakeCase";

import { Project } from "../types/generated";
import { urlFor } from "../lib/sanity";
import SanityImageLoader from "./UI/SanityImageLoader";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map(({ _id, image, title, summary, technologies }, index) => {
          return (
            <motion.div
              key={_id}
              className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-15 items-center justify-center p-20 md:p-40"
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                src={urlFor(image).url()}
                alt={snakeCase(title)}
                className="mt-10"
                width="450"
                height="250"
              />

              <div className="space-y-5 py-5 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {index + 1}/{projects.length}:
                  </span>{" "}
                  {title}
                </h4>

                <div className="flex flex-row items-center justify-center mx-auto">
                  {technologies.map(({ _id, image, title }) => (
                    <SanityImageLoader
                      key={_id}
                      src={image}
                      className="relative rounded-full"
                      alt={title}
                      width="30"
                      height="30"
                    />
                  ))}
                </div>

                <p className="text-lg text-center md:text-left">{summary}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
