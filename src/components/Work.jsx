// import React from 'react'
import { motion } from "framer-motion";
import { workData } from "../assets/assets";
import { FaLaptopCode } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.05 }}
      id="work"
      className="min-h-screen bg-gray-100 dark:bg-[#080808] text-gray-900 dark:text-white px-3 sm:px-5 lg:px-8 py-20 sm:py-5 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-52 w-52 rounded-full bg-blue/40 blur-[100px] sm:left-10 sm:h-72 sm:w-72 sm:blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-52 w-52 rounded-full bg-blue/30 blur-[100px] sm:right-10 sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 ">
        <h2 className="theme-heading text-3xl font-bold text-center mb-4">
          Journey & <span className="text-yellow-300">Learning Experience</span>
        </h2>
        <p className="theme-text text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Exploring, building, learning, and growing as a developer every day
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {workData.map((data, index) => (
              <div
                key={index}
                className="relative pl-12 before:content-['']
                    before:absolute before:left-0 before:top-2 before:w-[2px] before:h-full 
                    before:bg-gradient-to-b before:from-sky-400 before:to-purple-500 cursor-pointer hover:-translate-y-2 
                    transition-all duration-300"
              >
                {/* TIMELINE Dot*/}
                <div className="absolute left-[-0.6rem] top-2 w-5 h-5 rounded-full bg-sky-400 ring-4 ring-sky-400/20">💻</div>

                {/* B0x/Card */}
                <div className="theme-bg3 rounded-3xl border border-blue/30 p-6 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(59,130,246,.2)] transition-all duration-300 cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="theme-heading text-2xl font-bold">{data.role}</h3>
                    <span className="theme-text px-4 py-1 bg-sky-300/20 text-sky-300 rounded-full md:text-sm font-medium">
                      {data.duration}
                    </span>
                  </div>
                  <div className="theme-heading text-sky-400 mb-2">{data.company}</div>
                  <p className="theme-text text-gray-300 leading-7">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* yellow glow line  */}
      
    </motion.div>
  );
};

export default Work;
