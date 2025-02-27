import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { services, services2 } from '../constants';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';

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

const Skills = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}

      {services2.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  );
};


// export default SectionWrapper(Skills, "");
// export default SectionWrapper(Skills, 'skills');

export default Skills;