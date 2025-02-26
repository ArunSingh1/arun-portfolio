import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Tilt } from 'react-tilt';
import { services, services2 } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const skillSet = [
  'Web Apps',
  'AI & ML',
  'Automation',
  'Trading Bots'
];

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[200px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[80px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" loading="lazy" />
        <h4 className="text-white text-[15px] font-bold text-center">{title}</h4>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [currentSkill, setCurrentSkill] = useState(skillSet[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => {
        const currentIndex = skillSet.indexOf(prev);
        return skillSet[(currentIndex + 1) % skillSet.length];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
        {/* <motion.div variants={textVariant()} className='mt-0'>
          <h2 className="text-white text-[32px] font-bold">I do {currentSkill} 🚀</h2>
        </motion.div> */}

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-0 text-white text-[20px] max-w-3xl leading-[30px] space-y-4"
      >
        <p> Full Stack Developer, AI Engineer, and Entrepreneur, building smart tech with a dash of AI magic ✨</p>
        {/* <p>I'm Arun—a Full Stack Developer, AI Engineer, and Entrepreneur with a master's in AI, crafting smart tech with a touch of AI magic." 🚀</p> */}
        <p> With 7 years of experience in software development and a Master's degree in AI, I blend creativity and cutting-edge tech to build everything from sleek web apps to intelligent AI assistants.</p>
        {/* <p>🛠️ Think of me as a Swiss Army knife of software engineering—building AI & software solutions faster than you can say "debug." </p> */}
      </motion.div>

      {/* <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

        {services2.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
