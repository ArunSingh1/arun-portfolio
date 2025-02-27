import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// const VideoCard = ({ videoId }) => {
//     return (
//       <div className="mt-6 p-4 bg-[#1d1836] rounded-lg shadow-lg max-w-3xl">
//         <h3 className="text-white text-lg font-semibold mb-3">📺 Watch InsightIQ in Action</h3>
//         <div className="relative w-full aspect-w-16 aspect-h-9">
//           <iframe
//             width="800" // Increase width if needed
//             height="600" // Increased height
//             className="w-full h-64 rounded-lg"
//             src={`https://www.youtube.com/embed/${videoId}`}
//             title="InsightIQ Demo"
//             frameBorder="0"
//             allowFullScreen
//           ></iframe>

// {/* 
//             <iframe
//                 width="800" // Increase width if needed
//                 height="450" // Increased height
//                 src={`https://www.youtube.com/embed/${videoId}`}
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="rounded-xl shadow-lg"
//             ></iframe> */}
//         </div>
//       </div>
//     );
//   };


const VideoCard = ({ videoId, articleLink  }) => {
    return (
      <div className="mt-6 p-4 bg-[#1d1836] rounded-lg shadow-lg max-w-4xl"> 
        <h3 className="text-white text-lg font-semibold mb-3">📺 Watch InsightIQ in Action</h3>
        <div className="relative w-full">
          <iframe
            width="850" // Increased width
            height="450" // Increased height for better visibility
            className="w-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="InsightIQ Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4 text-center">
                <a 
                    href={articleLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                >
                    📖 Read more about it here
                </a>
        </div>
      </div>
    );
};


// const Insightiq = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} `}>Voice to Insight AI assitant</p>
//         <h2 className={`${styles.sectionHeadText}`}>InsightIQ</h2>
//       </motion.div>
//       <div className="w-full flex">
//         {/* <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
//             InsightIQ is a cutting-edge AI assistant that leverages RAG (Retrieval-Augmented Generation), multimodal capabilities, and database connectivity to transform voice inputs into valuable insights for data-driven decision-making.
//             Powered by OpenAI’s Llama3, it processes spoken data, retrieves relevant information, and provides structured analytics by connecting to your databases
//             InsightIQ seamlessly integrates speech, text, and data to streamline decision-making and enhance efficiency. 🚀

//         </motion.p> */}
//         <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
//         InsightIQ is a cutting-edge AI assistant that leverages <strong>RAG (Retrieval-Augmented Generation) </strong>, multimodal capabilities, and database connectivity to transform voice inputs into valuable insights for data-driven decision-making.
//         <br /><br />
//         Powered by <strong>OpenAI’s Whisker and Llama3.3 </strong>, it processes spoken data, retrieves relevant information, and provides structured analytics by connecting to your databases.
//         <br /><br />
//         InsightIQ seamlessly integrates speech, text, and data to streamline decision-making and enhance efficiency. 🚀
//         </motion.p>
//       </div>

//       <VideoCard videoId="LM1oOoxhdkc"  articleLink= "https://medium.com/@arunsinghmailid/insightiq-transforming-voice-into-data-insights-powered-by-openai-llama3-3-1aef5f188da9" />

//     </>
//   );
// };

const Insightiq = () => {
  return (
    <div className="mt-0"> {/* Adjust the margin-top to 0 */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Voice to Insight AI assistant</p>
        <h2 className={`${styles.sectionHeadText}`}>InsightIQ</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          InsightIQ is a cutting-edge AI assistant that leverages <strong>RAG (Retrieval-Augmented Generation) </strong>, multimodal capabilities, and database connectivity to transform voice inputs into valuable insights for data-driven decision-making.
          <br /><br />
          Powered by <strong>OpenAI’s Whisker and Llama3.3 </strong>, it processes spoken data, retrieves relevant information, and provides structured analytics by connecting to your databases.
          <br /><br />
          InsightIQ seamlessly integrates speech, text, and data to streamline decision-making and enhance efficiency. 🚀
        </motion.p>
      </div>

      <VideoCard videoId="LM1oOoxhdkc" articleLink="https://medium.com/@arunsinghmailid/insightiq-transforming-voice-into-data-insights-powered-by-openai-llama3-3-1aef5f188da9" />
    </div>
  );
};

export default SectionWrapper(Insightiq, "");
