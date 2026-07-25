import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCards from './ProjectCards'
import { FaArrowRight } from 'react-icons/fa'


const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{ once: false, amount: 0.2}}
      id="projects"
      className='py-30 bg-dark-100'
    >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className='text-3xl font-bold text-center mb-4'>My <span className='text-yellow-300'>Projects</span></h2>

           <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
           <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full"></div> 

            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A selection of my recent work</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto relative py-24 overflow-hidden">

                {/* PROJECTS CARDS */}
                {
                    projects.map((projects, index) =>(
                        <ProjectCards key={index} {...projects}/>
                    ))
                }
            </div>
            <div className="text-center mt-12">
                <a href="#" className='inline-flex items-center px-6 py-3 border border-yellow-300 rounded-lg font-medium hover:bg-amber-300 transition duration-300'>
                    <span>View More Project</span>
                    <FaArrowRight className='ml-2'/>
                </a>
            </div>
        </div>
        {/* yellow glow line  */}
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-40"></div>
      
    </motion.div>
  )
}

export default Projects
