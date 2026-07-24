import React from 'react'
import { FaBars } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";
import { useState } from 'react';

const Navbar = () => {


   const [showMenu, setshowMenu] = useState(false)

  return (
    <nav className="fixed w-full z-50  backdrop-blur-sm py-4 px-10 shadow-xl  ">
      
 
        <div className=" container mx-auto flex justify-between items-center">
           <div>
              <a href="#" className="text-3xl font-semibold text-primary">
                Rahul
                <span className="text-yellow-400">Yadav</span>
              </a>
           </div>

           <div className="hidden md:flex space-x-8">

             <a href="#home" className=" relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group">
               Home
               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
             </a>

             <a href="#about" className=" relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group">
               About
               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
             </a>

             <a href="#skills" className=" relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group">
               Skills
               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
             </a>

             <a href="#projects" className=" relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group">
               Projects
               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
             </a>

             <a href="#experience" className=" relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group">
               Experience
               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
             </a>

             <a href="#contact" className=" relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group">
               Contact
               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
             </a>
            </div>
             

             {/*--------------------------- Mobile Menu Icon --------------------------*/}
            <div className="md:hidden ">
              {
                showMenu ?
                <FaXmark
                  className='text-2xl cursor-pointer'
                  onClick={()=> setshowMenu(!showMenu)}
                />:
                <FaBars
                  className='text-2xl cursor-pointer'
                  onClick={()=> setshowMenu(!showMenu)}
                />
              }
            </div>

        </div>

        {/* conditions to show menu when */}

        {
          showMenu &&(
            <div className='fixed inset-0 md:hidden backdrop-blur-md bg-black/40 z-40' onClick={()=> setshowMenu(false)}>
              <div className='bg-dark-300/95 backdrop-blur-sm w-2/5 h-screen rounded-r-lg p-4 flex flex-col space-y-4 text-center justify-center ml-60'>

             <a onClick={()=> setshowMenu(!showMenu)} href="#home" className=" relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group">
               Home
               
             </a>

             <a onClick={()=> setshowMenu(!showMenu)} href="#about" className=" relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group">
               About
               
             </a>

             <a onClick={()=> setshowMenu(!showMenu)} href="#skills" className=" relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group">
               Skills
               
             </a>

             <a onClick={()=> setshowMenu(!showMenu)} href="#projects" className=" relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group">
               Projects
               
             </a>

             <a onClick={()=> setshowMenu(!showMenu)} href="#experience" className=" relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group">
               Experience
               
             </a>

             <a onClick={()=> setshowMenu(!showMenu)} href="#contact" className=" relative font-semibold text-xl text-gray-300 hover:text-yellow-400 transition duration-300 group">
               Contact
               
             </a>

              </div>
            </div>
          )
        }
    <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-40"></div>

    </nav>
    
  )
  
}


export default Navbar
