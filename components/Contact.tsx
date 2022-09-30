import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};
type Inputs = {
  firstName: string;
  lastName: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const personEmail = "phamanhduy.sg@gmail.com";

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({
    firstName,
    lastName,
    subject,
    message,
  }) => {
    const body = encodeURIComponent(
      `Hi, my name is ${firstName} ${lastName}.\r\n${message}.`
    );
    window.location.href = `mailto:${personEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <motion.div className="h-screen relative flex flex-col overflow-hidden text-center md:flex-row md:text-flex max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+84-963-769-049</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{personEmail}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Ho Chi Minh, Vietnam</p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("firstName")}
              placeholder="First Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("lastName")}
              placeholder="Last Name"
              className="contactInput"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
