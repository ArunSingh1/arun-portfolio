import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-[50vh] mx-auto">
      <div className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        {/* Animated Line and Dot */}
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] animate-pulse" />
          <div className="w-1 sm:h-80 h-40 black-gradient" />
        </div> */}
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}

        <div>
          {/* Heading */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#915EFF]">Arun</span> 
          </h1>
          
          {/* Fun Tagline */}
          <p className="text-lg text-gray-300 italic">FullStack Dev - Turning coffee into code since 2016</p>

          {/* Typewriter Effect */}
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            I build
            <Typewriter
              options={{
                strings: ["AI & Web Apps", "Software Solutions"],
                autoStart: true,
                loop: true,
                deleteSpeed: "natural",
                pauseFor: 1000,
              }}
            />
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
