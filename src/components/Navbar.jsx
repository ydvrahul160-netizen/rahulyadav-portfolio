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
  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  return (
    <nav className="fixed w-full z-50 py-4 flex justify-center px-4 pt-5          ">
      <div
        className="backdrop-blur-sm w-full max-w-[88rem] rounded-[20px] shadow-sm border
          px-8 py-3 flex justify-between items-center relative        bg-white/60 dark:bg-black/20  border-black/10 dark:border-white/10 dark:shadow-white/5"
      >
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

                  {/* <button
                    onClick={() => setShowFeaturePopup(true)}
                    className="mt-3 theme-text theme-bg3 w-full text-left px-3 py-2 hover:bg-white/10 rounded-lg"
                  >
                    Theme
                  </button> */}

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
            className=" fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setshowMenu(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="theme-bg fixed right-0 top-0 flex h-dvh w-[85%] max-w-sm flex-col overflow-y-auto border-l border-white/10 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div>
                  <p className="theme-heading text-lg font-semibold">Menu</p>

                  <p className="theme-text mt-0.5 text-xs opacity-60">
                    Explore my portfolio
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setshowMenu(false)}
                  className="theme-heading flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:bg-yellow-400/10 hover:text-yellow-400"
                  aria-label="Close menu"
                >
                  <FaXmark className="text-2xl" />
                </button>
              </div>

              <div className="theme-bg flex flex-col gap-2 px-4 py-6">
                <a
                  href="#home"
                  onClick={() => setshowMenu(false)}
                  className="theme-text group flex items-center gap-4 rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-300 hover:translate-x-1 hover:bg-yellow-400/10 hover:text-yellow-400"
                >
                  <FaHouse className="shrink-0 text-yellow-400 transition-transform duration-300 group-hover:scale-110" />
                  <span>Home</span>
                </a>

                <a
                  href="#about"
                  onClick={() => setshowMenu(false)}
                  className="theme-text group flex items-center gap-4 rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-300 hover:translate-x-1 hover:bg-yellow-400/10 hover:text-yellow-400"
                >
                  <FaUser className="shrink-0 text-yellow-400 transition-transform duration-300 group-hover:scale-110" />
                  About
                </a>

                <a
                  href="#skills"
                  onClick={() => setshowMenu(false)}
                  className="theme-text group flex items-center gap-4 rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-300 hover:translate-x-1 hover:bg-yellow-400/10 hover:text-yellow-400"
                >
                  <FaCode className="shrink-0 text-yellow-400 transition-transform duration-300 group-hover:scale-110" />
                  Skills
                </a>

                <a
                  href="#projects"
                  onClick={() => setshowMenu(false)}
                  className="theme-text group flex items-center gap-4 rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-300 hover:translate-x-1 hover:bg-yellow-400/10 hover:text-yellow-400"
                >
                  <FaFolderOpen className="shrink-0 text-yellow-400 transition-transform duration-300 group-hover:scale-110" />
                  Projects
                </a>

                <a
                  href="#experience"
                  onClick={() => setshowMenu(false)}
                  className="theme-text group flex items-center gap-4 rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-300 hover:translate-x-1 hover:bg-yellow-400/10 hover:text-yellow-400"
                >
                  <FaBriefcase className="shrink-0 text-yellow-400 transition-transform duration-300 group-hover:scale-110" />
                  Experience
                </a>

                <a
                  href="#contact"
                  onClick={() => setshowMenu(false)}
                  className="theme-text group flex items-center gap-4 rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-300 hover:translate-x-1 hover:bg-yellow-400/10 hover:text-yellow-400"
                >
                  <FaEnvelope className="shrink-0 text-yellow-400 transition-transform duration-300 group-hover:scale-110" />
                  Contact
                </a>

                <button
                  type="button"
                  onClick={() => setShowSettings((prev) => !prev)}
                  className="theme-text flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-300 hover:bg-yellow-400/10 hover:text-yellow-400"
                >
                  <span className="flex items-center gap-4">
                    <FaGear
                      className={`transition-transform duration-500 ${
                        showSettings ? "rotate-90" : ""
                      }`}
                    />
                    <span>Settings</span>
                  </span>

                  <span
                    className={`text-sm transition-transform duration-300 ${
                      showSettings ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {showSettings && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 space-y-1 rounded-xl border border-white/10 bg-white/5 p-2">
                        {/* Theme */}
                        <button
                          type="button"
                          onClick={toggleTheme}
                          className="theme-text flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm transition-colors hover:bg-yellow-400/10 hover:text-yellow-400"
                        >
                          <span>
                            {theme === "dark" ? "Light Theme" : "Dark Theme"}
                          </span>

                          <span className="text-xs opacity-60">
                            {theme === "dark" ? "☀" : "☾"}
                          </span>
                        </button>

                        {/* Animations */}
                        <button
                          type="button"
                          onClick={() => setShowFeaturePopup(true)}
                          className="theme-text flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm transition-colors hover:bg-yellow-400/10 hover:text-yellow-400"
                        >
                          <span>Animations</span>
                          <span className="text-xs opacity-60">→</span>
                        </button>

                        {/* Accent Color */}
                        <button
                          type="button"
                          onClick={() => setShowFeaturePopup(true)}
                          className="theme-text flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm transition-colors hover:bg-yellow-400/10 hover:text-yellow-400"
                        >
                          <span>Accent Color</span>
                          <span className="text-xs opacity-60">→</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
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
    </nav>
  );
};

export default Navbar;
