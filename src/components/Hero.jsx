// import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImg1 from "../assets/profileImg1.jpeg";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

import { SiReact, SiNodedotjs, SiMongodb, SiJavascript } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";


const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const floating = {
    animate: {
      y: [0, -12, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="home"
      className="theme-bg grid-bg2 grid-bg relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-black"
    >
      {/* Background Glow */}
      
      <div className="mt-16 container mx-auto px-6 lg:px-14 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14">
          {/* Left part */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            variants={container}
            initial="hidden"
            animate="show"
            className="md:w-1/2"
          >
            <span className=" theme-text-green inline-block px-4 py-1 rounded-full bg-yellow-300/20 text-yellow-300 border border-yellow-300/30 mb-6">
              🟢 Available for Work
            </span>

            <motion.h1
              variants={item}
              className=" theme-text text-5xl lg:text-7xl font-extrabold leading-tight text-gray-400"
            >
              Hi, I'm
              <span className="theme-heading text-white"> Rahul Yadav</span>
            </motion.h1>

            <div className="theme-text text-2xl lg:text-4xl font-semibold text-gray-300 mt-6 h-16">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",

                  2000,

                  "Frontend Developer",

                  2000,

                  "React Developer",

                  2000,

                  "Full Stack Developer",

                  2000,
                ]}
                wrapper="span"
                repeat={Infinity}
              />
            </div>

            <motion.p
              variants={item}
              className="theme-text mt-6 text-gray-400 text-lg leading-8 max-w-xl"
            >
              I build responsive, scalable and modern web applications using
              React, Node.js, Express and MongoDB with clean UI and optimized
              performance.
            </motion.p>

            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="#projects"
                className=" px-7 py-3 rounded-xl bg-yellow-300 text-black font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-yellow-300/30 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(250,204,21,.5)] transition-all duration-300"
              >
                View Projects
              </a>

              {/* resume show option */}
              <Link
                to="/resume"
                className="theme-heading theme-border theme-bg2 px-7 py-3 rounded-xl border border-yellow-300 text-white hover:bg-yellow-300 hover:text-black transition duration-300 flex items-center gap-2 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(250,204,21,.5)]"
              >
                <FaDownload />
                Resume
              </Link>
            </div>

            <div className="flex gap-5 mt-10 text-2xl">
              <a
                href="https://github.com/ydvrahul160-netizen"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-300 transition"
              >
                <FaGithub className="theme-primary hover:rotate-12 hover:scale-125 transition-all duration-300" />
              </a>

              <a
                href="www.linkedin.com/in/rahulyadav-77dev"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-300 transition"
              >
                <FaLinkedin className="theme-primary hover:rotate-12 hover:scale-125 transition-all duration-300" />
              </a>

              <a
                href="mailto:rahulyadav40777@gmail.com"
                className="theme-primary hover:text-yellow-300 transition"
              >
                <FaEnvelope className="hover:rotate-12 hover:scale-125 transition-all duration-300" />
              </a>
            </div>
          </motion.div>

          {/* Right Part */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-yellow-300 blur-3xl opacity-20"></div>

              <motion.img
                {...floating}
                // src={profileImg}
                src={profileImg1}
                alt="Rahul Yadav"
                className="relative w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white/20 shadow-[0_0_80px_rgba(253,224,71,.35)]"
              />

              <motion.div
                {...floating}
                className="absolute -top-6 left-0 bg-[#1f2937] p-3 rounded-full text-sky-400 text-3xl shadow-xl"
              >
                <SiReact />
              </motion.div>

              <motion.div
                {...floating}
                className="absolute top-12 -right-6 bg-[#1f2937] p-3 rounded-full text-green-500 text-3xl shadow-xl"
              >
                <SiNodedotjs />
              </motion.div>

              <motion.div
                {...floating}
                className="absolute bottom-10 -left-6 bg-[#1f2937] p-3 rounded-full text-green-400 text-3xl shadow-xl"
              >
                <SiMongodb />
              </motion.div>

              <motion.div
                {...floating}
                className="absolute bottom-0 right-5 bg-[#1f2937] p-3 rounded-full text-yellow-300 text-3xl shadow-xl"
              >
                <SiJavascript />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-yellow-300"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-yellow-300 rounded-full mt-2"></div>
        </div>
        <span className="text-sm mt-2">Scroll</span>
      </motion.a>
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-40"></div>
    </section>
  );
};

export default Hero;
