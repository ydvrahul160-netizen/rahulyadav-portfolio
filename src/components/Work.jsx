import React from "react";
import { motion } from "framer-motion";
import { workData } from "../assets/assets";
import { FaLaptopCode } from "react-icons/fa6";

const Work = () => {
  return (
    <section
      id="work"
      className="min-h-screen bg-gray-100 dark:bg-[#080808] text-gray-900 dark:text-white px-4 sm:px-6 py-20 sm:py-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          

          <h2 className="theme-heading text-3xl sm:text-5xl font-bold mb-5">
            Journey &{" "}
            <span className="text-yellow-400">Learning Experience</span>
          </h2>

          <p className="theme-text max-w-2xl mx-auto text-sm sm:text-base leading-7">
            Every step is a new opportunity to learn, build, and grow.
            Here's my journey through development, projects, and continuous learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Curved dotted line - desktop */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M500 0
                 C500 100 200 100 200 200
                 S800 300 800 400
                 S200 500 200 600
                 S800 700 800 800
                 S500 900 500 1000"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 9"
              className="text-gray-400/60 dark:text-gray-600/60"
            />
          </svg>

          {/* Mobile dotted line */}
          <div className="absolute left-2 top-0 bottom-0 border-l-2 border-dotted border-gray-400/60 dark:border-gray-600/60 sm:hidden" />

          {/* Cards */}
          <div className="relative space-y-12 sm:space-y-20 right-4">
            {workData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className={`relative flex pl-12 sm:pl-0 ${
                  index % 2 === 0
                    ? "sm:justify-start"
                    : "sm:justify-end"
                }`}
              >
                {/* Card */}
                <div className="theme-bg3 relative w-full sm:w-[42%] rounded-2xl p-5 sm:p-7 border border-gray-300/70 dark:border-white/[0.08] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-400/10 dark:hover:shadow-white/[0.04]">
                  {/* Icon and duration */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gray-200/70 dark:bg-white/[0.06] border border-gray-300/70 dark:border-white/[0.08]">
                      <FaLaptopCode className="text-gray-600 dark:text-gray-300 text-xl" />
                    </div>

                    <span className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full bg-gray-200/70 dark:bg-white/[0.06] text-gray-600 dark:text-gray-300 border border-gray-300/70 dark:border-white/[0.08]">
                      {data.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="theme-heading text-xl sm:text-2xl font-bold mb-2">
                    {data.role}
                  </h3>

                  <p className="theme-text text-sm font-medium mb-4">
                    {data.company}
                  </p>

                  <p className="theme-text text-sm sm:text-base leading-7">
                    {data.description}
                  </p>

                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-20">
          <p className="theme-text text-sm sm:text-base">
            Still learning. Still building. Always moving forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;