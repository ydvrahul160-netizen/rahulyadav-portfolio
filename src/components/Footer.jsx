
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#080808] text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">
        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Branding */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Rahul Yadav
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Full Stack Developer • MERN • Java
            </p>
          </div>

          {/* Quick Links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-white transition-colors duration-200"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors duration-200"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Links + Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ydvrahul160-netizen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <FaGithub className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/rahulyadav-77dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>

            <a
              href="mailto:rahulyadav40777@gmail.com"
              aria-label="Email"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>

            {/* Back To Top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="ml-2 flex items-center justify-center w-10 h-10 rounded-full bg-sky-500 text-white hover:bg-sky-400 transition-all duration-200"
            >
              <FaArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6">
          <p className="text-center text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} Rahul Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

