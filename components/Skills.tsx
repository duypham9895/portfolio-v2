import React from "react";
import { motion } from "framer-motion";

import Skill from "./Skill";
import { Skill as SkillType } from "../types/generated";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  const firstHalfSkills = skills.slice(0, skills.length / 2);
  const lastHalfSkills = skills.slice(skills.length / 2, skills.length);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col relative text-center md:text-left xl:flex-row xl:space-y-0 max-w-[2000px] px-10 min-h-screen justify-center mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency{" "}
        <span className="lowercase text-gray-100">
          (y=year(s), 0y=self-study)
        </span>
      </h3>

      <div className="grid grid-cols-4 gap-5 pt-10">
        {firstHalfSkills.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {lastHalfSkills.map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
