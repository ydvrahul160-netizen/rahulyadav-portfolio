import { span } from 'framer-motion/client'
import React from 'react'

const ProjectCards = ({title, description, image, tech}) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
      <img src={image} alt={title}
        className='w-full h-48 object-cover'
      />

      <div className="p-5">
        <h3 className='text-lg font-semibold mb-2'>{title}</h3>
        <p className='text-gray-400 mb-4'>{description}</p>
        
        <div className='flex flex-wrap gap-2 mb-4'>
            {tech.map((item, index) =>(
                <span key={index} className='px-2 py-1 bg-dark-400 rounded-2xl text-sm'>
                    {item}
                </span>
            ))}
        </div>

        {/* buttons */}
        <div className="flex gap-2">
          <a href="#" className='flex-1 text-center px-4 py-2 bg-yellow-300/20 text-yellow-300 rounded-lg font-medium hover:bg-yellow-300 transition duration-300'>
            View Demo
          </a>
          <a href="#" className='flex-1 text-center px-4 py-2 border border-amber-300 font-medium rounded-lg hover:bg-yellow-300'>Code</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCards
