import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImg1 from "../assets/profileImg1.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-100 dark:bg-[#080808] text-gray-900 dark:text-white px-3 sm:px-5 lg:px-8 py-3 sm:py-5 overflow-hidden"
    >
      {/* MAIN EDITORIAL CARD */}
      <div className="relative min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-40px)] overflow-hidden rounded-[28px] sm:rounded-[40px] border border-white/10 bg-white dark:bg-[#101010] shadow-2xl">
        {/* Background glow */}
        <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[140px]" />

        <div className="absolute -bottom-40 right-0 w-[450px] h-[450px] rounded-full bg-blue-700/10 blur-[140px]" />

        {/* --------------------------------- HUGE BACKGROUND TEXT ----------------------------------------- */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute whitespace-nowrap text-[18vw] sm:text-[20vw] lg:text-[18vw] font-black tracking-[-0.08em] text-black/[0.08] dark:text-white/[0.12] uppercase"
          >
            DEVELOPER
          </motion.h1>
        </div>

        {/* ---------------------------- CENTER IMAGE ----------------------------- */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="
  relative
  z-10
  -translate-y-20
  sm:-translate-y-12
  lg:-translate-y-4
"
          >
            {/* Image glow */}
            <div className="absolute inset-10 bg-purple-600/20 blur-[80px]" />

            <motion.img
              src={profileImg1}
              alt="Rahul Yadav"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[260px] h-[360px] sm:w-[330px] sm:h-[440px] lg:w-[390px] lg:h-[500px]
                object-cover rounded-[20px] grayscale-[20%] shadow-[0_30px_100px_rgba(0,0,0,0.7)] "
            />
          </motion.div>
        </div>

        {/* --------------------------------- PURPLE TEXT -------------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className=" absolute z-20 left-6 sm:left-12 lg:left-16 top-[38%] lg:top-[40%]"
        >
          <div
            className=" text-purple-500 text-[45px] sm:text-[70px] lg:text-[100px] leading-none font-semibold  tracking-[-0.05em] "
            style={{
              fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
            }}
          >
            Modern
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className=" absolute z-20 right-4 sm:right-10 lg:right-14 top-[48%] lg:top-[44%] "
        >
          <div
            className=" text-purple-500 text-[40px] sm:text-[65px] lg:text-[95px] leading-none font-semibold  tracking-[-0.05em]"
            style={{
              fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
            }}
          >
            Developer
          </div>
        </motion.div>

        {/* -------------------------------------- LEFT BOTTOM CONTENT ------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className=" absolute z-20 left-6 sm:left-12  lg:left-16  bottom-20 sm:bottom-16  max-w-[280px]  sm:max-w-[340px]"
        >
          <h2 className=" theme-heading text-3xl sm:text-3xl lg:text-4xl font-light tracking-tight">
            Hi, I'm Rahul.
          </h2>

          <div className="mt-2 text-gray-600 dark:text-white/60 text-sm sm:text-base">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "React Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="mt-4 text-xs sm:text-sm leading-6 text-gray-500 dark:text-white/40">
            I build modern, scalable and interactive web applications with
            React, Node.js, Express and MongoDB.
          </p>

          {/* ---------------------------------- VIEW PROJECT BUTTONS ------------------------------------- */}
          <div className="flex flex-wrap gap-3 mt-5">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-500 dark:text-black text-white text-xs sm:text-sm font-medium
                hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-4 mt-5 text-lg">
            <a
              href="https://github.com/ydvrahul160-netizen"
              target="_blank"
              rel="noreferrer"
              className="theme-gray dark:text-white/50 hover:text-black dark:hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rahulyadav-77dev"
              target="_blank"
              rel="noreferrer"
              className="theme-gray dark:text-white/50 hover:text-black dark:hover:text-white transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:rahulyadav40777@gmail.com"
              className="theme-gray dark:text-white/50 hover:text-black dark:hover:text-white transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* ----------------------------------- RIGHT INFO CARD ---------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className=" absolute  z-20  right-5  sm:right-10  lg:right-14  bottom-20  sm:bottom-16  w-[150px]  sm:w-[180px]  rounded-2xl  border  border-gray-200 dark:border-white/10  bg-black/[0.03] dark:bg-white/[0.04]  backdrop-blur-xl  p-4  sm:p-5  "
        >
          <p className="mt-2 text-[10px] sm:text-xs leading-5 text-gray-500 dark:text-white/40">
            Current Focus
          </p>

          <h3 className="mt-2 text-sm sm:text-base font-semibold">
            Full Stack Web
          </h3>

          <p className="mt-2 text-[10px] sm:text-xs leading-5 theme-muted">
            Building production-ready applications with modern technologies.
          </p>

          {/* ---------------------------------------- RESUME BUTTONS ---------------------------------------------- */}
          <div className="flex flex-wrap gap-3 mt-5">
            <Link
              to="/resume"
              className=" inline-flex items-center justify-center px-5 py-1.5 rounded-lg border theme-border theme-text bg-black/[0.1] dark:bg-white/[0.03]  text-xs sm:text-sm font-medium hover:theme-card hover:theme-heading  transition-all duration-300"
            >
              Resume
            </Link>
          </div>

          <a href="#contact" className="mt-4 flex items-center justify-between">
            <span className="text-[10px] text-green-400">● Available</span>

            <span className="text-gray-500 dark:text-white/40">→</span>
          </a>
        </motion.div>

        {/* ------------------------------------- SCROLL INDICAT --------------------------------------------- */}
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="  absolute  z-30  bottom-5  left-1/2  -translate-x-1/2  text-gray-400 dark:text-white/30 hover:text-black dark:hover:text-white   transition  "
        >
          <FaArrowDown />
        </motion.a>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
