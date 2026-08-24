// import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.05 }}
      id="skills"
      className=" theme-bg relative py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-52 w-52 rounded-full bg-blue/40 blur-[100px] sm:left-10 sm:h-72 sm:w-72 sm:blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-52 w-52 rounded-full bg-blue/30 blur-[100px] sm:right-10 sm:h-72 sm:w-72 sm:blur-[120px]" />
      
      <div className=" max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="theme-heading text-3xl font-bold text-center mb-4">
          My <span className="text-yellow-300">Skills</span>
        </h2>

        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full"></div>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>

        {/* skills cards */}
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="theme-bg3 rounded-3xl border border-blue/30 p-6 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(59,130,246,.2)] transition-all duration-300 cursor-pointer group"
            >
              {/* icon and title */}
              <div className="flex items-center mb-4">
                <skill.icon className="w-12 h-12 text-sky-400 mr-6" />
                <h3 className="theme-heading text-xl font-bold text-white">{skill.title}</h3>
              </div>
               {/* description */}
              <p className="theme-text text-gray-400 mb-4">{skill.description}</p>

              {/*proficiency  */}
              <div className="mt-5 mb-5">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Proficiency</span>
                  <span className="text-sky-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>

                <div className="theme-border h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-sky-400"
                  />
                </div>
              </div>
                
              {/* tags */}
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className=" theme-text theme-bg2 px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:bg-sky-500/20 transition text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </motion.div>
  );
};

export default Skills;
