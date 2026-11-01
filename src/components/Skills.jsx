import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-100 dark:bg-[#080808] text-gray-900 dark:text-white px-3 sm:px-5 lg:px-8 py-16 sm:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* section heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="theme-heading text-3xl font-bold text-center mb-4">
            My
            <span className="text-yellow-300"> Skills</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* skills cards */}
        <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className={`relative ${
                index % 2 === 0
                  ? "mr-0 sm:mr-10 md:mr-20"
                  : "ml-0 sm:ml-10 md:ml-20"
              }`}
            >
              {/* background number */}
              <span
                className={`absolute -top-8 sm:-top-12 z-10 ${
                  index % 2 === 0 ? "left-0" : "right-0"
                } text-6xl sm:text-7xl md:text-8xl font-black text-gray-300/50 dark:text-white/[0.2] select-none pointer-events-none`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* skill card */}
              <div className="relative theme-bg3 rounded-3xl border border-gray-300 dark:border-gray-950 dark:bg-black/25 p-5 sm:p-6 md:p-8 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,.2)] transition-all duration-300 cursor-pointer group">
                {/* icon and title */}
                <div className="flex items-center mb-4 gap-3 sm:gap-4">
                  {/* icon background */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-gray-200/70 dark:bg-white/[0.06] border border-gray-300/70 dark:border-white/[0.08] shrink-0">
                    <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" />
                  </div>

                  <h3 className="theme-heading text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">
                    {skill.title}
                  </h3>
                </div>

                {/* description */}
                <p className="theme-text text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
                  {skill.description}
                </p>

                {/* proficiency */}
                <div className="mt-5 mb-5">
                  <div className="flex justify-between text-xs sm:text-sm mb-2">
                    <span className="text-gray-500">Proficiency</span>

                    <span className="text-gray-500 font-semibold">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="theme-border h-2 rounded-full bg-gray-300 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                      }}
                      viewport={{
                        once: true,
                      }}
                      className="h-full rounded-full bg-gray-500"
                    />
                  </div>
                </div>

                {/* skill tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tech) => (
                    <span
                      key={tech}
                      className="theme-text theme-bg2 px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:bg-sky-500/20 transition text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
