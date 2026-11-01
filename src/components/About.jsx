import { motion } from "framer-motion";
import { aboutInfo } from "../assets/assets";
// import myphoto from "../assets/myphoto.png";
import profileImg1 from "../assets/profileImg1.jpeg";
// import ProfileCard from "./ProfileCard";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaArrowRight,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className=" bg-gray-100 dark:bg-[#080808] text-gray-900 dark:text-white px-3 sm:px-5 lg:px-8 py-16 sm:py-24 overflow-hidden"
    >
      <div className=" max-w-7xl mx-auto px-6 lg:px-10">
        {/****************************** HEADING **********************************/}
        <h2 className="theme-heading text-3xl font-bold text-center mb-4">
          About <span className="text-yellow-300">Me</span>
        </h2>
        <p className=" text-gray-400 text-center max-w-2xl mx-auto mb-10 md:mb-5">
          Get to know more about my background and passion
        </p>

        {/******************************** IMAGE + MY JOURNEY  **************************/}
        <div className="flex flex-col md:flex-row md:items-start items-center gap-4">
          {/* IMAGE */}
          {/* RIGHT CONTENT: PROFILE */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative order-1 w-full min-w-0 md:w-[40%] md:shrink-0 lg:w-[40%] xl:w-[35%]"
          >
            {/* Image glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#52763B]/15 blur-[90px] dark:bg-[#91B86B]/10" />

            {/* Decorative outline */}
            <div className="absolute inset-x-5 bottom-5 top-5 rotate-6 rounded-[32px] border border-[#52763B]/20 transition-transform duration-500 hover:rotate-3 sm:inset-x-8 sm:rounded-[40px] lg:inset-x-8" />

            {/* Image container */}
            <div className="relative mx-auto w-[85%] max-w-[360px] overflow-hidden rounded-[28px] border border-black/[0.08] bg-[#E9EDE5] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.12)] dark:border-white/[0.10] dark:bg-[#171B16] dark:shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:max-w-[400px] sm:rounded-[36px] sm:p-3 lg:w-full lg:max-w-[380px]">
              <motion.img
                src={profileImg1}
                alt="Rahul Yadav - Full Stack Developer"
                loading="eager"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative aspect-[4/5] w-full rounded-[22px] object-cover object-center sm:rounded-[28px]"
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-2 rounded-[22px] bg-gradient-to-t from-black/50 via-transparent to-transparent sm:inset-3 sm:rounded-[28px]" />

              {/* Image label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 sm:bottom-7 sm:left-7 sm:right-7">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
                    Based in
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                    India
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md">
                  <FaCode />
                </div>
              </div>
            </div>

            {/* Decorative index */}
            <div className="mt-8 flex items-center justify-center gap-3 text-xs text-gray-400 dark:text-white/30 lg:mt-10">
              <span className="h-px w-10 bg-[#52763B]/50" />

              <span className="font-medium uppercase tracking-[0.25em]">
                Always Building, Always Learning.
              </span>

              <span className="h-px w-10 bg-[#52763B]/50" />
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-3/5 xl:w-2/3"
          >
            <div className=" rounded-2xl p-4 md:p-6 max-w-3xl mx-auto text-center md:text-left">
              <h2 className="theme-heading text-3xl font-semibold mb-4">
                My Journey
              </h2>
              <p className="theme-muted text-gray-300 leading-7 max-w-xl">
                I'm Rahul Yadav, a BCA student and aspiring MERN Stack Developer
                passionate about building modern and user-friendly web
                applications. My journey started with HTML, CSS, and JavaScript,
                and gradually expanded to React.js, Node.js, Express.js, and
                MongoDB.
              </p>
              <p className="theme-muted text-gray-300 mb-8">
                technologies. I enjoy creating responsive interfaces, solving
                programming challenges, and exploring new technologies to
                improve my skills. Currently, I am focused on building
                real-world projects, strengthening my DSA knowledge, and
                preparing for software development opportunities.
              </p>

              {/* CARDS */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
              >
                {aboutInfo.map((data, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 + index * 0.2 }}
                    whileHover={{ rotate: 0, scale: 1.02 }}
                    className={`
                      relative theme-bg3 rounded-3xl border border-gray-300 dark:border-gray-950 dark:bg-black/25 p-6 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(59,130,246,.2)] transition-all duration-300 cursor-pointer group
                      ${index === 0 ? "rotate-[-4deg] md:-mt-6 shadow-xl" : ""}
                      ${index === 1 ? "rotate-[3deg] md:-mt-6 shadow-xl" : ""}
                      ${index === 2 ? "rotate-[-3deg] md:-mt-6 shadow-xl" : ""}
                     `}
                  >
                    <div className="flex items-center justify-center sm:justify-center mb-4 gap-3 sm:gap-4">
                      {/* icon background */}
                      <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-gray-200/70 dark:bg-white/[0.06] border border-gray-300/70 dark:border-white/[0.08] shrink-0">
                        <data.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" />
                      </div>
                    </div>

                    <h3 className="theme-heading text-xl font-semibold mb-3">
                      {data.title}
                    </h3>

                    <p className="text-gray-400">{data.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
