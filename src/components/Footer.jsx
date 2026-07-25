import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className=" bg-dark-300 text-gray-400 border-t border-gray-800 py-10 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

      {/* Left Section: Branding & Copyright */}
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold text-white mb-1">Rahul Yadav</h3>
        <p className="text-sm">
          © {new Date().getFullYear()} Rahul Yadav. All rights reserved.
        </p>
      </div>

      {/* Center Section: Quick Links */}
      <ul className="flex flex-wrap justify-center gap-6 text-sm">
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
            href="#projects"
            className="hover:text-white transition-colors duration-200"
          >
            Projects
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
            href="#contact"
            className="hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Right Section: Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-dark-200 hover:bg-gray-700 hover:text-white transition-all duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full bg-dark-200 hover:bg-gray-700 hover:text-white transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:your-email@example.com" 
              className="p-2 rounded-full bg-dark-200 hover:bg-gray-700 hover:text-white transition-all duration-200"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>

          {/* Back To Top Button */}
          <button 
            onClick={scrollToTop} 
            className="p-2 ml-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200"
            title="Scroll to top"
          >
            <FaArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
