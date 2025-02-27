import { jsx } from "react/jsx-runtime";
import {
  c,
  python,
  java,
  cpp,
  AI,
  JSC, 
  reactbg,
  genai,
  dock,
  nodebg,
  fastap,
  kuber, 
  psql,
  insight,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  oko,
  vinci,
  acc,
  prodapt,
  github
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "JS", icon: JSC  },
  { title: "React", icon: reactbg },
  { title: "Python", icon: python },
  { title: "NodeJS", icon: nodebg },
  
];

export const services2 = [
  { title: "FastAPI", icon: fastap },
  { title: "Docker", icon: dock },
  { title: "GenAI", icon: genai },
  { title: "Git", icon: github },
  { title: "Postgres", icon: psql },
  { title: "Kubernetes", icon: kuber },
  
];



export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiencesoo = [
  {
    title: "AI/ML Intern",
    company_name: "EduSkill Foundation | AWS Academy | AICTE",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.",
      "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    ],
  },
  {
    title: "Mathwork Ai Virtual Intern",
    company_name: "Mathwork | AICTE",
    icon: mathwork,
    iconBg: "#161329",
    date: "May 2023 - Sep 2023",
    points: [
      "Completed virtual internship, gaining a strong foundation in MATLAB, including data analysis and processing.",
      "Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.",
      "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
    icon: edunet,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
      "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
      "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
    ],
  },
];

export const experiences = [
  {
    title: "Lead Dev - AI engineer",
    company_name: "Entrepreneurship",
    icon: insight,
    iconBg: "#161329",
    date: "Aug 2024 - till",
    // points: [
    //   "Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.",
    //   "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    // ],
    points: [
      "Conducted in-depth research into Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) to enhance AI-driven decision-making.",
      "Developed InsightIQ, an AI-powered assistant that transforms voice inputs into actionable insights by leveraging RAG, multimodal capabilities, and database connectivity.",
      "Engineered a seamless integration of speech, text, and structured data to streamline complex analytical processes and improve efficiency.",
      // "Explored advanced techniques in vector databases, embeddings, and LangChain to enable InsightIQ to retrieve and process relevant data from private sources.",
      // "Designed a scalable and efficient AI architecture to ensure real-time insights, improving the accuracy and speed of information retrieval.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company_name: "OKOMERA",
    icon: oko,
    iconBg: "#161329",
    date: "Nov 2023 - Aug 2024",
    // points: [
    //   "Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.",
    //   "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    // ],
    points: [
      "Refactored the legacy codebase of the application 'Hemera' resolving persistent issues and bugs while achieving significant performance enhancements and improved maintainability.",
      "Designed and implemented a time-based evolution feature to visualize the progression of cell growth at different time intervals, enabling researchers to study the interaction of the drug with cells over time.",
      "Build a UI feeature to visualize different drugs in various wells on the chip, providing an intuitive platform to analyze different drug interactions with cells.",
      "Researched and build a POC that leverages the LLMs ability to analyze teams private data sources using OpenAI embeddings, OpenAI ChatGPT4, Python and Langchain to improve decision making processes.",
    ],
  },

  {
    title: "Data Scientist — Full Stack Software Engineer",
    company_name: "VINCI Energies",
    icon: vinci,
    iconBg: "#161329",
    date: "Nov 2021- Nov 2023",
    points: [
      "Designed and developed a web app to address company’s sourcing requirements in France using data from SAP ERP and open data from government",
      "Experienced in building analytical dashboards in SAP Cloud Business Intelligence platform to visualize Suppliers Purchase histories details across different  Business units.",
      "Build and deployed a multi-class classification ML model that effectively classifies purchase family classes with 89 percent accuracy and deployed it using Docker and FastAPI in production",
      "Build a API using FastAPI and Python that fetches real time stock quantity from suppliers product information API endpoint as functional enhancement for a in-house B2B Procurement Tool"
    ],
  },
  {
    title: "ML Software Engineer",
    company_name: "PRODAPT Solutions",
    icon: prodapt,
    iconBg: "#161329",
    date: " May 2019- Sep 2020",
    points: [
      "Lead Chat bot development project called ’PROBOT’ build using framework ’RASA’ and python which was integrated with Microsoft teams to automate and streamline tasks",
      "Chat bot development project called ’PROBOT’ framework ’RASA’ and python which was integrated with Microsoft teams to automate and streamline",
      "Experienced in Building CI CD pipelines using GitLab, Docker and AWS Elastic Container Service (Amazon ECS).",
    ],
  },
  {
    title: " Associate Software Engineer",
    company_name: "ACCENTURE",
    icon: acc,
    iconBg: "#161329",
    date: "Nov 2016 - Aug 2018",
    points: [
      "Worked as a consultant for US bank 'FirstData' on quality assurance for financial transactions, involved in analysing transaction records from Client's POS (Point of sale) Machines.",
      "Running Test Cases in HP Tandem Non-stop Server and querying MySQL to interrupt the results against Client requirements.",
      "Generating Settlement report, Authorization Reports and Sale Reports for POS Machines using Mainframe Jobs.",
    ],
  },
]

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
