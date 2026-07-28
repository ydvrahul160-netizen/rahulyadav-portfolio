// import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
  }
  const [loading, setLoading] = useState(true);
  return (
    <motion.div
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
        className="absolute top-6 left-6 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center

          justify-center text-yellow-300 hover:bg-yellow-300 hover:text-black hover:rotate-12 hover:scale-110 transition-all duration-300"
      >
        <FaArrowLeft />
      </Link>

      {/* Heading */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 px-8 py-4 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-yellow-300">📄 My Resume</h1>

          <p className="text-gray-300 text-center">
            Rahul Yadav • MERN Stack Developer
          </p>
        </div>
      </div>

      {/* PDF Preview */}

      <div className="relative z-10 px-10 pt-24 pb-10 h-[calc(100vh-80px)]">
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-full">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0d1117]">
              <div className="w-16 h-16 rounded-full border-4 border-yellow-400 border-t-transparent animate-spin" />
            </div>
          )}
          <div className="overflow-y-auto h-full flex justify-center">
            <Document
              file="public/resume.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              loading=""
            >
              {Array.from(new Array(numPages), (_, index) => (
                <Page key={index} pageNumber={index + 1} width={900} />
              ))}
            </Document>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
