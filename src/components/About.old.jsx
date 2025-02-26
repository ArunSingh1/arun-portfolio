import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services, services2} from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

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
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h4 className="text-white text-[15px] font-bold text-center">{title}</h4>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='mt-0'>
        {/* <p className={styles.sectionSubText}>Introduction</p>  */}
        {/* <h2 className={styles.sectionHeadText}>Overview</h2> */}
      </motion.div>

      {/* <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       I'm Arun, your friendly neighborhood Full Stack Developer equipped with a master's degree in Artificial Intelligence (AI). Over the course of 7 years, I've honed my skills in the world of software development, I'm your go-to coder in the City of Love❤️
      </motion.p> */}

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-2 text-white text-[17px] max-w-3xl leading-[30px] space-y-4"
      >
        <p>🚀 I'm Arun, your friendly neighborhood Full Stack Developer equipped with a master's degree in Artificial Intelligence (AI). Over the course of 7 years, I've honed my skills in the world of software development, I'm your go-to coder in the City of Love❤️</p>
        <p>💻 I speak two languages fluently: JavaScript, Typescript, React for the front-end ballet, and Python, Node, ExpressJS, and FastAPI for the back-end symphony.</p>
        <p>🛠️ Think of me as your Swiss Army knife of software engineering. I've got a diverse skill set that lets me create and launch software and Machine learning solutions faster than you can say "debug."</p>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

        {services2.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
