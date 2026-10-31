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
  const [showMenu, setShowMenu] = useState(false);
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
            <span
              className="text-yellow-400"
              style={{
                fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
              }}
            >
              Yadav
            </span>
          </a>
        </div>

        {/*--------------------------------- desktop menu ---------------------------------------*/}
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

            {/*--------------------------------- desktop setting dropdown ---------------------------------------*/}
            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className=" theme-bg absolute right-0 mt-5 w-56 rounded-xl bg-[#161b22] border border-white/10 shadow-2xl z-50 p-3 pb-5"
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/*--------------------------- tablet / Mobile Menu Icon --------------------------*/}
        <div className="flex items-center theme-heading lg:hidden">
          <button
            type="button"
            onClick={() => setShowMenu(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:bg-gray-600 hover:text-white dark:border-white/10 "
            aria-label="Open menu"
          >
            <FaBars className="text-lg" />
          </button>
        </div>
      </div>

      {/*-------------------------------------- conditions to show menu when --------------------------------------------------*/}

      {/* -------------------------------------Mobile / Tablet full screen menu------------------------------------------------ */}

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className={`fixed inset-0 z-[100] flex justify-end backdrop-blur-md lg:hidden
            ${theme === "dark" ? "bg-[#080b13]/75" : "bg-[#dfe4ee]/70"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setShowMenu(false)}
          >
            {/*----------------------------------------Menu card---------------------------------------------*/}

            <motion.div
              className={`relative flex h-full w-[88%] max-w-[400px] flex-col overflow-hidden rounded-l-[30px] border-l border-y shadow-2xl
                ${
                  theme === "dark"
                    ? "border-white/[0.08] bg-[#0d111b]"
                    : "border-black/[0.08] bg-[#f8f9fc]"
                }`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 30,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/*-------------------------------------- Close btn -------------------------------------------- */}

              <motion.button
                type="button"
                onClick={() => setShowMenu(false)}
                className={`absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300

                 ${
                   theme === "dark"
                     ? "bg-white/[0.07] text-white hover:bg-black"
                     : "bg-black/[0.06] text-gray-800 hover:bg-black/50 hover:text-white"
                 }
               `}
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              >
                <FaXmark className="text-lg" />
              </motion.button>

              {/*---------------------------------------- Profile header ------------------------------------------ */}

              <motion.div
                className="relative px-6 pb-5 pt-7"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                {/* Name */}
                <h2
                  className={`mt-3 text-xl font-semibold
                   ${theme === "dark" ? "text-white" : "text-gray-900"}
                 `}
                >
                  Rahul Yadav
                </h2>

                {/* Role */}

                <p
                  className={`mt-1 text-xs
                   ${theme === "dark" ? "text-gray-400" : "text-gray-500"}
                 `}
                >
                  MERN Stack Developer
                </p>
              </motion.div>

              {/*------------------------------------ Divider --------------------------------------------*/}

              <div
                className={`mx-6 h-px
                  ${theme === "dark" ? "bg-white/10" : "bg-black/10"}
               `}
              />

              {/*------------------------------------- Navigation -------------------------------------------------*/}

              <div className="relative flex-1 overflow-y-auto px-4 py-5">
                {/*--------------------------------- Home --------------------------------------- */}

                <motion.a
                  href="#home"
                  onClick={() => setShowMenu(false)}
                  className={`flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300
                   ${
                     theme === "dark"
                       ? "bg-purple-500/15 text-white hover:bg-purple-500/20"
                       : "bg-purple-500/10 text-gray-900 hover:bg-purple-500/15"
                   }
                 `}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <span className=" flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-black-500  to-gray-500 text-white">
                    <FaHouse className="text-sm" />
                  </span>

                  <span>Home</span>
                </motion.a>

                {/*------------------------------- About ------------------------------------------------ */}

                <motion.a
                  href="#about"
                  onClick={() => setShowMenu(false)}
                  className={` mt-2 flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300

                   ${
                     theme === "dark"
                       ? "text-gray-300 hover:bg-white/5 hover:text-white"
                       : "text-gray-600 hover:bg-black/5 hover:text-gray-900"
                   }
                 `}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="w-8 text-center">
                    <FaUser />
                  </span>

                  <span>About</span>
                </motion.a>

                {/* --------------------------------------- Skills --------------------------------------------*/}

                <motion.a
                  href="#skills"
                  onClick={() => setShowMenu(false)}
                  className={`mt-2 flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300

                   ${
                     theme === "dark"
                       ? "text-gray-300 hover:bg-white/5 hover:text-white"
                       : "text-gray-600 hover:bg-black/5 hover:text-gray-900"
                   }
                 `}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <span className="w-8 text-center">
                    <FaCode />
                  </span>

                  <span>Skills</span>
                </motion.a>

                {/*------------------------------------ Projects ------------------------------------------- */}

                <motion.a
                  href="#projects"
                  onClick={() => setShowMenu(false)}
                  className={` mt-2 flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300

                    ${
                      theme === "dark"
                        ? "text-gray-300 hover:bg-white/5 hover:text-white"
                        : "text-gray-600 hover:bg-black/5 hover:text-gray-900"
                    }
                 `}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="w-8 text-center">
                    <FaFolderOpen />
                  </span>

                  <span>Projects</span>
                </motion.a>

                {/*--------------------------------- Experience ---------------------------------------------*/}

                <motion.a
                  href="#work"
                  onClick={() => setShowMenu(false)}
                  className={` mt-2 flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300

                   ${
                     theme === "dark"
                       ? "text-gray-300 hover:bg-white/5 hover:text-white"
                       : "text-gray-600 hover:bg-black/5 hover:text-gray-900"
                   }
                 `}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <span className="w-8 text-center">
                    <FaBriefcase />
                  </span>

                  <span>Experience</span>
                </motion.a>

                {/*----------------------------------------- Contact ---------------------------------------------------- */}

                <motion.a
                  href="#contact"
                  onClick={() => setShowMenu(false)}
                  className={` mt-2 flex items-center gap-4 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300

                   ${
                     theme === "dark"
                       ? "text-gray-300 hover:bg-white/5 hover:text-white"
                       : "text-gray-600 hover:bg-black/5 hover:text-gray-900"
                   }
                 `}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="w-8 text-center">
                    <FaEnvelope />
                  </span>

                  <span>Contact</span>
                </motion.a>

                {/*------------------------------------------- Divider Under ----------------------------------------*/}

                <div
                  className={`my-5 h-px
                   ${theme === "dark" ? "bg-white/10" : "bg-black/10"}
                 `}
                />

                {/*--------------------------------------- Settings --------------------------------------------*/}

                <motion.button
                  type="button"
                  onClick={() => setShowSettings((prev) => !prev)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all
                    ${
                      theme === "dark"
                        ? "text-gray-300 hover:bg-white/5 hover:text-white"
                        : "text-gray-600 hover:bg-black/5 hover:text-gray-900"
                    }
                  `}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 }}
                >
                  <span className="flex items-center gap-4">
                    <span className="w-8 text-center">
                      <FaGear />
                    </span>

                    <span>Settings</span>
                  </span>

                  <span
                    className={`text-xs transition-transform duration-300
                     ${showSettings ? "rotate-180" : ""}
                   `}
                  >
                    ↓
                  </span>
                </motion.button>

                {/*---------------------------------------------- Settings content ------------------------------------------------*/}

                <AnimatePresence initial={false}>
                  {showSettings && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div
                        className={` mt-1 rounded-xl border p-2
                          ${
                            theme === "dark"
                              ? "border-white/10 bg-white/[0.03]"
                              : "border-black/10 bg-black/[0.02]"
                          }
                       `}
                      >
                        {/* Theme */}

                        <button
                          type="button"
                          onClick={toggleTheme}
                          className={` flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm
                           ${
                             theme === "dark"
                               ? "text-gray-300 hover:bg-white/5"
                               : "text-gray-600 hover:bg-black/5"
                           }
                         `}
                        >
                          <span>
                            {theme === "dark" ? "Light Theme" : "Dark Theme"}
                          </span>

                          <span>{theme === "dark" ? "☀" : "☾"}</span>
                        </button>

                        {/* Animations */}

                        <button
                          type="button"
                          onClick={() => setShowFeaturePopup(true)}
                          className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm
                            ${
                              theme === "dark"
                                ? "text-gray-300 hover:bg-white/5"
                                : "text-gray-600 hover:bg-black/5"
                            }
                         `}
                        >
                          <span>Animations</span>

                          <span>→</span>
                        </button>

                        {/* Accent Color */}

                        <button
                          type="button"
                          onClick={() => setShowFeaturePopup(true)}
                          className={` flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm

                           ${
                             theme === "dark"
                               ? "text-gray-300 hover:bg-white/5"
                               : "text-gray-600 hover:bg-black/5"
                           }
                            `}
                        >
                          <span>Accent Color</span>

                          <span>→</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/*---------------------------------------------- Bottom Resume Btn --------------------------------------------------- */}

              <motion.div
                className="relative px-5 pb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div
                  className={` mb-4 h-px
                   ${theme === "dark" ? "bg-white/10" : "bg-black/10"}
                 `}
                />

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-black to-gray-600 px-4 py-3 text-sm
                     font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] "
                >
                  View Resume
                </a>

                <p
                  className={` mt-3 text-center text-[10px]
                   ${theme === "dark" ? "text-white/30" : "text-gray-400"}
                 `}
                >
                  © 2026 Rahul Yadav
                </p>
              </motion.div>

              {/*----------------------------------- Decorative Bottom Glow ---------------------------------------*/}

              <div className="pointer-events-none absolute bottom-[-60px] right-[-50px] h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/*---------------------------------- setting function block Under Development popup -------------------------------------*/}
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
