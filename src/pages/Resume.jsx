import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { m } from "motion/react";

const Resume = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full h-screen bg-[#0d1117] relative overflow-hidden pt-20"
    >
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-400/20 rounded-full blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[140px] animate-pulse"></div>
      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-gray-400 hover:bg-yellow-300 hover:text-black hover:rotate-12 hover:scale-110 transition-all duration-300"
      >
        <FaArrowLeft />
      </Link>

      {/* Heading */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 w-full flex justify-center px-4">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 px-4 sm:px-6 py-3 rounded-2xl shadow-xl">
          <h1 className="text-xl sm:text-xl md:text-2xl font-bold text-gray-400 text-center whitespace-nowrap">
            Resume
          </h1>
        </div>
      </div>

      {/* PDF Preview */}
      <div className="relative z-10 px-2 sm:px-6 lg:px-10 pt-24 pb-10 h-[calc(100vh-80px)]">
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-full">
          <iframe
            src="/Resume.pdf"
            title="Rahul Yadav Resume"
            className="w-full h-full border-0"
            loading="eager"
          />
        </div>
      </div>
    </m.div>
  );
};

export default Resume;
