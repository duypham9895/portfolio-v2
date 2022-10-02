import React from "react";
import { motion } from "framer-motion";
import snakeCase from "lodash/snakeCase";
import getYear from "date-fns/getYear";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

import { Experience } from "../types/generated";
import { urlFor } from "../lib/sanity";

type Props = {
  experience: Experience;
};

const formatNameOfMonth = (date: Date): string =>
  format(date, "LLL", {
    locale: enUS,
  });

const ExperienceCard = ({
  experience: {
    companyImage,
    company,
    jobTitle,
    technologies,
    dateStarted,
    dateEnded,
    points,
  },
}: Props) => {
  const cvtDateStarted = new Date(dateStarted);
  const cvtDateEnded = new Date(dateEnded);

  const startWorkingDate = `${formatNameOfMonth(cvtDateStarted)} ${getYear(
    cvtDateStarted
  )}`;
  const endWorkingDate = `${formatNameOfMonth(cvtDateEnded)} ${getYear(
    cvtDateEnded
  )}`;
  const workDuration = `${startWorkingDate} - ${endWorkingDate}`;

  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-28 h-28 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(companyImage).url()}
        alt={snakeCase(`logo${company}`)}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{company}</p>
        <div className="flex flex-row justify-evenly mx-auto items-center space-x-5 my-2">
          {technologies.map(({ _id, image }) => (
            <motion.img
              key={_id}
              src={urlFor(image).url()}
              className="relative rounded-full"
              alt="me"
              width="25"
              height="25"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">{workDuration}</p>

        <ul className="list-disc space-y-4 ml-5 max-h-96 md:h-40 text-lg overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
