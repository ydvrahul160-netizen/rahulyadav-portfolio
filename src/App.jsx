import { lazy, Suspense, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "motion/react";

import Navbar from "./components/Navbar";
import PortfolioIntro from "./components/PortfolioIntro";
import ClickSparkles from "./components/ClickSparkles";

const Home = lazy(() => import("./pages/Home"));
const Resume = lazy(() => import("./pages/Resume"));
const AllProjects = lazy(() => import("./pages/AllProjects"));
const Services = lazy(() => import("./pages/Services"));

const App = () => {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  return (
    <LazyMotion features={domAnimation}>
      <>
        <ClickSparkles />

        <AnimatePresence>
          {showIntro && (
            <PortfolioIntro onComplete={() => setShowIntro(false)} />
          )}
        </AnimatePresence>

        {location.pathname !== "/resume" && <Navbar />}

        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Suspense>
      </>
    </LazyMotion>
  );
};

export default App;