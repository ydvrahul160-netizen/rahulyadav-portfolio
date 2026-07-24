import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
// import Projects from './pages/Projects';
// import Work from './pages/Work';
// import Contact from './pages/Contact';



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default App
