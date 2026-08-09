import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaCodeBranch, FaBook, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces using modern frontend technologies.',
    level: 90,
    tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating RESTful APIs and server-side applications with Node.js and Express.',
    level: 85,
    tags: ['Node.js', 'Express.js', 'REST API', 'JWT', 'MongoDB']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and managing databases for web applications.',
    level: 80,
    tags: ['MongoDB', 'Mongoose', 'Firebase', 'MySQL']
  },
  {
    title: 'Version Control',
    icon: FaCodeBranch,
    description: 'Managing source code and collaborating using version control systems.',
    level: 90,
    tags: ['Git', 'GitHub', 'GitHub Pages']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Development tools and technologies used in daily workflow.',
    level: 85,
    tags: ['VS Code', 'Postman', 'Vite', 'npm']
  },
  {
    title: 'Continuous Learning',
    icon: FaBook,
    description: 'Continuously improving skills through projects and exploring new technologies.',
    level: 95,
    tags: ['DSA', 'MERN Stack', 'Problem Solving', 'Web Development']
  }
];



export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["Html", "css", "js"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    github:"#",
    live: true,
    feature:"false",
    demo: "#",
    code: "#",
  },
  {
    title: "Education Hub",
    description: "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["html", "css", "js"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    github:"#",
    live: false,
    feature:"true",
    demo: "#",
    code: "#",
  },
  {
    title: "Weather App",
    description: "A mobile app for tracking workouts, nutrition, and health metrics.",
    image: projectImg3,
    tech: ["React", "tailwind"],
    icons: [FaReact, FaDatabase],
    github:"#",
    live: true,
    feature:"true",
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["React", "tailwind","Framer Motion"],
    icons: [FaReact, FaCloud],
    github:"#",
    live: true,
    feature:"true",
    demo: "#",
    code: "#",
  },
  {
    title: "Todo App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    github:"#",
    live: true,
    feature:"true",
    demo: "#",
    code: "#",
  },
  {
    title: "AI-Powered Code Reviewer",
    description: "Built an AI-powered code reviewer using React.js, Node.js, Express.js, Google Gemini API",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    github:"#",
    live: true,
    feature:"true",
    demo: "#",
    code: "#",
  },
  {
    title: "InterviewPilot",
    description: "Developing an AI-powered mock interview platform using React.js, Node.js, Express.js, MongoDB, Firebase Authentication, Tailwind CSS, and Gemini API",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    github:"#",
    live: true,
    feature:"true",
    demo: "#",
    code: "#",
  }
];


export const workData = [

  {  role: "MERN Stack Developer Journey",
    company: "Self Learning & Personal Projects",
    duration: "2026 - Present",
    description: "Learning and building full-stack applications using MongoDB, Express.js, React.js, and Node.js. Focused on creating scalable and responsive web applications.",
    color: "purple",
  },
  {
    role: "Frontend Development",
    company: "React & Tailwind CSS Projects",
    duration: "2026 - Present",
    description:
      "Built responsive and modern user interfaces using React.js, JavaScript, and Tailwind CSS with a focus on user experience.",
    color: "pink",
  },
  {
    role: "Portfolio Website",
    company: "Personal Branding Project",
    duration: "2026 - Present",
    description:
      "Designed and developed a professional portfolio website to showcase projects, skills, and achievements.",
    color: "blue",
  },
  {
    role: "API Integration Projects",
    company: "Hands-on Learning",
    duration: "2026 - Present",
    description:
      "Integrated REST APIs and managed dynamic data fetching using Axios and modern React practices.",
    color: "green",
  },
  {
    role: "Continuous Learning",
    company: "Web Development Journey",
    duration: "2026 - Present",
    description:
      "Continuously exploring, building, learning, and growing as a developer through real-world projects and new technologies.",
    color: "orange",
  },
];
