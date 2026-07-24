import React from 'react'
import { motion } from 'framer-motion'
import { FaDribbble, FaGithub, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{ once: false, amount: 0.2}}
      id="contact"
      className='py-20 bg-dark-200'
    >
      <div className="container mx-auto px-6">
        <h2 className='text-3xl font-black text-center mb-4'>
            Get In <span  className='text-yellow-300'>Touch</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's Talk!</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* CONTACT FORM */}
            <div>
                <form className='space-y-6'>

                    {/* NAME BOX*/}
                    <div>
                        <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                        <input
                         type="text"
                         placeholder='Full Name'
                         className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                         />
                    </div>

                       {/* EMAIL ADDRESS BOX */}
                    <div>
                        <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                        <input
                         type="email"
                         placeholder='Email'
                         className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                         />
                    </div>

                      {/* MESSAGE BOX */}
                    <div>
                        <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                        <textarea
                         type="text"
                         placeholder='Message'
                         className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                         />
                    </div>

                    {/* BUTTON  */}
                    <button type='submit' className='w-full px-6 py-3 bg-dark-100 rounded-lg font-medium hover:bg-yellow-500 transition duration-300 cursor-pointer'>
                        Send
                    </button>
                </form>
            </div>

            {/* CONTACT INFORMATION */}
            <div className='space-y-8'>

                <div className="flex items-start">
                    <div className='text-dark-400 text-2xl mr-4'>
                       <FaMapMarkerAlt/>
                    </div>
                    <div>
                       <h3 className='text-lg font-semibold mb-2'>Location</h3>
                       <p className='text-gray-400'>UP, Ayodhya</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className='text-dark-400 text-2xl mr-4'>
                       <FaEnvelope/>
                    </div>
                    <div>
                       <h3 className='text-lg font-semibold mb-2'>Email</h3>
                       <p className='text-gray-400'>rahulyadav40777@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className='text-dark-400 text-2xl mr-4'>
                       <FaPhone/>
                    </div>
                    <div>
                       <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                       <p className='text-gray-400'>+91 7080******</p>
                    </div>
                </div>

                <div className="pt-4">
                    <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                    <div className="flex space-x-4">
                        <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-gray-900 hover:bg-black hover:text-white transition duration-300'>
                            <FaGithub/>
                        </a>

                        <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300'>
                            <FaLinkedin/>
                        </a>

                        <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300'>
                            <FaTwitter/>
                        </a>

                        <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink-400 hover:bg-pink-400 hover:text-white transition duration-300'>
                            <FaDribbble/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
