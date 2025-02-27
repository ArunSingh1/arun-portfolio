import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const openLinkedIn = () => {
    const linkedInUrl = 'https://www.linkedin.com/in/arun-singh1/';
    window.open(linkedInUrl);
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>
        <p className="mt-12 text-white text-[17px] max-w-3xl leading-[30px]">
        Got an idea, a project, or just want to geek out over AI? Let’s connect on LinkedIn—I promise I won’t ghost you! 😉.
        </p>
        <button
          onClick={openLinkedIn}
          className="mt-4 bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
        >
          LinkedIn
        </button>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");