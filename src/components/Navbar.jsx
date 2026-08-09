import React from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHouse,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showFeaturePopup, setShowFeaturePopup] = useState(false);
  const { theme, toggleTheme } = useTheme();
  // popup use effect
  useEffect(() => {
    if (showFeaturePopup) {
      const timer = setTimeout(() => {
        setShowFeaturePopup(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showFeaturePopup]);

  return (
    <nav className="fixed w-full z-50  backdrop-blur-sm py-4 px-10 shadow-xl  ">
      <div className=" container mx-auto flex justify-between items-center">
        <div>
          <a
            href="#"
            className="text-3xl font-semibold text-primary light-navbar-rahul"
          >
            Rahul
            <span className="text-yellow-400">Yadav</span>
          </a>
        </div>

        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className=" theme-heading relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#about"
            className="theme-heading  relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#skills"
            className=" theme-heading relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group"
          >
            Skills
            <span className=" absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#projects"
            className=" theme-heading relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#work"
            className=" theme-heading relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group"
          >
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contact"
            className=" theme-heading relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* setting icon and function */}
          <div className=" relative hidden md:block">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className=" w-18 h-10 rounded-full bg-gray-600  flex items-center justify-center hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              <FaGear />
            </button>

            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className=" theme-bg absolute right-0 mt-5 w-56 rounded-xl bg-[#161b22] border border-white/10 shadow-2xl z-50 p-3"
                >
                  <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                    <h3 className="font-semibold text-gray-400">Settings</h3>

                    <button
                      onClick={() => setShowSettings(false)}
                      className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-red-400/20 hover:text-red-400 transition"
                    >
                      <FaXmark />
                    </button>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className="theme-text mt-3 theme-bg3 w-full text-left px-3 py-2 hover:bg-white/10 rounded-lg"
                  >
                    {theme === "dark" ? "Light" : "Dark"}
                  </button>

                  <button
                    onClick={() => setShowFeaturePopup(true)}
                    className="mt-3 theme-text theme-bg3 w-full text-left px-3 py-2 hover:bg-white/10 rounded-lg"
                  >
                    Theme
                  </button>

                  <button
                    onClick={() => setShowFeaturePopup(true)}
                    className="mt-3 theme-text theme-bg3 w-full text-left px-3 py-2 hover:bg-white/10 rounded-lg"
                  >
                    Animations
                  </button>

                  <button
                    onClick={() => setShowFeaturePopup(true)}
                    className="mt-3 theme-text theme-bg3 w-full text-left px-3 py-2 hover:bg-white/10 rounded-lg"
                  >
                    Accent Color
                  </button>
                  <h3 className="mt-3 font-semibold text-yellow-400">
                    Made with ❤️ by Rahul Yadav
                  </h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/*--------------------------- Mobile Menu Icon --------------------------*/}
        <div className=" theme-heading md:hidden ">
          {showMenu ? (
            <FaXmark
              className="text-2xl cursor-pointer"
              onClick={() => setshowMenu(!showMenu)}
            />
          ) : (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setshowMenu(!showMenu)}
            />
          )}
        </div>
      </div>

      {/* conditions to show menu when */}

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="theme-bg3 fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setshowMenu(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="theme-bg absolute right-0 top-0 h-screen w-72 bg-dark-300 border-l border-yellow-400/20 shadow-2xl p-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="theme-heading flex justify-end mb-10">
                <FaXmark
                  className="text-3xl cursor-pointer hover:text-yellow-400"
                  onClick={() => setshowMenu(false)}
                />
              </div>

              <div className="theme-bg flex flex-col space-y-8">
                <a
                  href="#home"
                  onClick={() => setshowMenu(false)}
                  className="theme-text theme-bg3 flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300"
                >
                  <FaHouse className=" text-lg flex-shrink-0 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] group-hover:scale-110 transition-all duration-300" />
                  <span>Home</span>
                </a>

                <a
                  href="#about"
                  onClick={() => setshowMenu(false)}
                  className="theme-text theme-bg3 flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300"
                >
                  <FaUser className="text-lg flex-shrink-0 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] group-hover:scale-110 transition-all duration-300" />
                  About
                </a>

                <a
                  href="#skills"
                  onClick={() => setshowMenu(false)}
                  className="theme-text theme-bg3 flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300"
                >
                  <FaCode className="text-lg flex-shrink-0 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] group-hover:scale-110 transition-all duration-300" />
                  Skills
                </a>

                <a
                  href="#projects"
                  onClick={() => setshowMenu(false)}
                  className="theme-text theme-bg3 flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300"
                >
                  <FaFolderOpen className="text-lg flex-shrink-0 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] group-hover:scale-110 transition-all duration-300" />
                  Projects
                </a>

                <a
                  href="#experience"
                  onClick={() => setshowMenu(false)}
                  className="theme-text theme-bg3 flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300"
                >
                  <FaBriefcase className="text-lg flex-shrink-0 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] group-hover:scale-110 transition-all duration-300" />
                  Experience
                </a>

                <a
                  href="#contact"
                  onClick={() => setshowMenu(false)}
                  className="theme-text theme-bg3 flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300"
                >
                  <FaEnvelope className="text-lg flex-shrink-0 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] group-hover:scale-110 transition-all duration-300" />
                  Contact
                </a>

                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="theme-text flex items-center justify-center gap-2 mt-6 py-3 rounded-lg bg-white/10 hover:bg-yellow-400 hover:text-black transition duration-300"
                >
                  <FaGear />
                  <span>Settings</span>
                </button>

                {showSettings && (
                  <div className="theme-bg theme-heading pt-1.5 fixed top-155 right-6 w-64 bg-dark-300 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl z-50">
                    <div className="theme-bg3 px-4 py-3 rounded-2xl ml-1.5 mr-1.5 border-b border-white/10 flex items-center justify-between">
                      <h3 className="font-semibold text-gray-400">Settings</h3>

                      <button
                        onClick={() => setShowSettings(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-red-400/20 hover:text-red-400 transition"
                      >
                        <FaXmark />
                      </button>
                    </div>

                    {/* <button
                      onClick={() =>
                        window.open("/Rahul_Yadav_Resume.pdf", "_blank")
                      }
                      className="w-full text-left px-4 py-3 hover:bg-yellow-400/10"
                    >
                      📄 Resume
                    </button> */}

                    <button
                      onClick={toggleTheme}
                      className="theme-text  w-full text-left  px-4 py-3 hover:bg-yellow-400/10 transition"
                    >
                      {theme === "dark" ? "Dark" : "Light"}
                    </button>

                    <button
                      onClick={() => setShowFeaturePopup(true)}
                      className="theme-text mt-2.5 w-full text-left px-4 py-3 hover:bg-yellow-400/10 transition"
                    >
                      Animations
                    </button>

                    <button
                      onClick={() => setShowFeaturePopup(true)}
                      className="theme-text mt-2.5  w-full text-left px-4 py-3 hover:bg-yellow-400/10 transition"
                    >
                      Accent Color
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* setting function block Under Development popup */}
      <AnimatePresence>
        {showFeaturePopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" fixed inset-0 z-[999] mt-100 flex items-center justify-center bg-black/60 backdrop-blur-md px-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 30, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className=" w-full max-w-sm rounded-3xl bg-[#161b22]/95 border border-yellow-400/20 shadow-2xl p-6"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-red-400/20 flex items-center justify-center text-3xl">
                  🚧
                </div>
              </div>

              <h2 className="text-center text-2xl font-bold text-yellow-400">
                Under Development
              </h2>

              <p className="mt-3 text-center text-gray-300 leading-7">
                This feature is currently under development and will be
                available in the next update.
              </p>

              <button
                onClick={() => setShowFeaturePopup(false)}
                className="mt-6 w-full rounded-xl bg-black/50 py-3 font-semibold text-white transition hover:scale-[1.02]"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-40"></div>
    </nav>
  );
};

export default Navbar;
