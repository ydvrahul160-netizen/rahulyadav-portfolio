import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Resume from "./pages/Resume";
// import Projects from './pages/Projects';
// import Work from './pages/Work';
// import Contact from './pages/Contact';
import { useLocation } from "react-router-dom";


const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/resume" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default App
