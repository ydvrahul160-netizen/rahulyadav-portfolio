import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Resume from "./pages/Resume";
import AllProjects from "./pages/AllProjects";
import PortfolioIntro from "./components/PortfolioIntro";
import ClickSparkles from "./components/ClickSparkles";

const App = () => {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
     <ClickSparkles />
      <AnimatePresence mode="wait">
        {showIntro ? (
          <PortfolioIntro
            onComplete={() => setShowIntro(false)}
          />
        ) : (
          <>
            {location.pathname !== "/resume" && <Navbar />}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<AllProjects />} />
            </Routes>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;