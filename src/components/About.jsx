import { motion } from 'framer-motion'
import profileImg from '../assets/profileImg.jpeg';
import { aboutInfo } from '../assets/assets';
import myphoto from '../assets/myphoto.png';
import { useTheme } from "../context/ThemeContext";


const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{ once: true }}
      id="about"
      className="theme-bg grid-bg2 relative py-24 relative overflow-hidden"
    >
         {/* yellow glow line 
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-40"></div> */}

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {/****************************** HEADING **********************************/}
            <h2 className='theme-heading text-3xl font-bold text-center mb-4'>About <span className='text-yellow-300'>Me</span></h2>
            <p className=' text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>
        
        
           {/******************************** IMAGE + MY JOURNEY  **************************/}
            <div className="flex flex-col md:flex-row md:items-start items-center gap-12">

                {/* IMAGE */}
                <div className="hidden lg:block lg:w-2/5 xl:w-1/3">
                  <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeInOut' }}
                    viewport={{ once: false, amount:0.2 }}
                    src={myphoto}
                    alt="img"
                    className="w-full max-w-sm h-[420px] object-cover rounded-2xl mx-auto"
                  />
                </div>

                {/* TEXT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeInOut' }}
                    viewport={{ once: false, amount:0.2 }}
                    className="w-full lg:w-3/5 xl:w-2/3"
                    >
                        <div className=" rounded-2xl p-6 md:p-8 max-w-3xl mx-auto text-center md:text-left">
                            <h2 className='theme-heading text-3xl font-semibold mb-4'>My Journey</h2>
                            <p className='className=" theme-text text-gray-300 leading-8 max-w-xl"'>I'm Rahul Yadav, a BCA student and aspiring MERN Stack Developer
                                passionate about building modern and user-friendly web applications.
                                My journey started with HTML, CSS, and JavaScript,
                                and gradually expanded to React.js, Node.js, Express.js, and MongoDB.
                            </p>
                            <p className='theme-text text-gray-300 mb-12'>I am continuously improving my skills in full-stack web development by building projects and exploring modern web technologies.
                                I enjoy creating responsive interfaces, solving programming challenges,
                                and exploring new technologies to improve my skills.
                                Currently, I am focused on building real-world projects, strengthening my DSA knowledge, and preparing for software development opportunities.
                            </p>

                            {/* CARDS */}
                            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto ">
                                {
                                    aboutInfo.map((data, index) => (
                                        <div key={index} className='theme-bg3 glass 
                                         rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                             <div className='text-sky-400 text-3xl sm:text-4xl mb-3 sm:mb-4 flex justify-center sm:justify-start'>
                                                <data.icon/>
                                             </div>
                                             <h3 className='theme-heading text-xl font-semibold mb-3'>{data.title}</h3>
                                             <p className='text-gray-400'>{data.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                </motion.div>

            </div>

        </div>
        {/* yellow glow line  */}
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-40"></div>
      
    </motion.div>
  )
}

export default About
