import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1];
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
        {projects.map((id, index) => {
          return (
            <motion.div
              key={id}
              className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="https://res.cloudinary.com/duypham9895/image/upload/v1664464589/personal/mt3tsedtajbkjwg9cpdl.png"
                alt="personal-portfolio"
                width="499"
                height="274"
              />

              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {index + 1}/{projects.length}:
                  </span>{" "}
                  Personal Portfolio
                </h4>
                <p className="text-lg text-center md:text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                  corporis quo quia dolores nisi recusandae nemo deserunt
                  aliquam laudantium ipsa quis libero, ipsum amet ut et
                  quibusdam rerum cum! Odit. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Provident hic itaque nam, ad
                  eaque illum cum! Facere perferendis, delectus illum quas
                  tempore ipsum esse voluptas? Minima impedit beatae tenetur
                  dolorem?
                </p>
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
