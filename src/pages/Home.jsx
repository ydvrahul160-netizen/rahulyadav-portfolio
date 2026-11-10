import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FinalCTA from "../components/FinalCTA";


const Home = () => {
  return (
    <div>
      <Hero/>
      <About/> 
      <Skills/>
      <Projects/>
      <Work/>
      <Contact/>
      <FinalCTA />
      <Footer/>
    </div>
  )
}

export default Home
