import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'
import { div } from 'framer-motion/client'

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{ once: false, amount: 0.2}}
      id="work"
      className='py-30 bg-dark-100'
    >
        <div className="container mx-auto px-6">
            <h2 className='text-3xl font-bold text-center mb-4'>Practical <span className='text-yellow-300'>Experience</span></h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Exploring, building, learning, and growing as a developer every day</p>

            <div className="max-w-3xl mx-auto">
                <div className="space-y-12">
                    {
                        workData.map((data, index) => (
                            <div key={index} className="relative pl-12 before:content-['']
                             before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full 
                             before:bg-yellow-300 cursor-pointer hover:-translate-y-2 
                             transition-all duration-300
                             
                             ">

                              {/* TIMELINE Dot*/}
                              <div className='absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-yellow-300'></div>

                              {/* BOX */}
                                <div className='bg-dark-200 rounded-2xl p-6'>

                                    <div className="flex justify-between items-start mb-2">
                                      <h3 className='text-xl font-semibold'>{data.role}</h3>
                                      <span
                                       className='px-3 py-1 bg-yellow-300/20 text-yellow-300 rounded-full md:text-sm'
                                       >{data.duration}</span>
                                    </div>
                                    <div className='text-gray-400 mb-2'>{data.company}</div>
                                    <p className='text-gray-300'>{data.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
      
    </motion.div>
  )
}

export default Work
