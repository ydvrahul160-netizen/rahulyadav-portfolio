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
import { FaGear, FaSun, FaMoon } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showFeaturePopup, setShowFeaturePopup] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    <nav className="fixed w-full z-50 py-8 flex justify-center px-3 sm:px-6 pt-3 sm:pt-6">
      <div
        className=" w-full max-w-[1400px] rounded-2xl 
          px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center relative  dark:shadow-white/5"
        >
        <div>
          <a
            href="#"
            className="text-3xl font-semibold text-primary light-navbar-rahul"
            style={{
              fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
            }}
          >
            Rahul
            <span className="text-yellow-400"
             style={{
              fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
            }}
            >Yadav</span>
          </a>
        </div>

        {/* desktop menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <a
            href="#home"
            className=" theme-heading relative font-sm text-xl text-gray-300 hover:text-yellow-400   transition duration-300 group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#about"
            className="theme-heading  relative font-sm text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#skills"
            className=" theme-heading relative font-sm text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group"
          >
            Skills
            <span className=" absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#projects"
            className=" theme-heading relative font-sm text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#work"
            className=" theme-heading relative font-sm text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group"
          >
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contact"
            className=" theme-heading relative font-sm text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* setting icon and function */}
          <div className=" relative hidden md:block">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={`
                  flex items-center justify-center
                  w-10 h-10
                  rounded-xl
                  border
                  transition-all duration-300

                  ${
                    showSettings
                      ? "bg-yellow-400 text-black border-yellow-400 rotate-45"
                      : "theme-bg3 theme-heading border-black/10 dark:border-white/10 hover:bg-yellow-400 hover:text-black"
                  }
                `}
            >
              <FaGear
                className={`
                    text-[17px]
                    transition-transform duration-300
                    ${showSettings ? "-rotate-45" : ""}
                  `}
              />
            </button>

            {/* setting dropdown */}
            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className=" theme-bg absolute right-0 mt-5 w-56 rounded-xl bg-[#161b22] border border-white/10 shadow-2xl z-50 p-3"
                >
                  {/* header */}
                  <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold theme-heading">
                        Settings
                      </p>

                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Customize your experience
                      </p>
                    </div>

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
                  {/* Footer */}
                  <div
                    className="
                        mx-3 mb-3
                        mt-1
                        px-5 py-3
                        rounded-xl
                        bg-yellow-400/5
                        border border-yellow-400/10
                      "
                  >
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Crafted with
                      <span className="mx-1 text-red-400">❤️</span>
                      by
                    </p>

                    <p className="text-sm font-semibold text-yellow-400">
                      Rahul Yadav
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/*---------------------------tablet / Mobile Menu Icon --------------------------*/}
        <div className="flex items-center gap-2 theme-heading lg:hidden ">
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
            className=" fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
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
                  href="#work"
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
