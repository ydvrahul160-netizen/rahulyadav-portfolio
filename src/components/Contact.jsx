// import React from 'react'
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import {
  FaDribbble,
  FaGithub,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.05 }}
      id="contact"
      className="relative py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-3xl font-black text-center mb-4">
          Get In <span className="text-yellow-300">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's Talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* CONTACT FORM */}
          <div className="glass rounded-3xl border border-white/10 p-8">
            <form className="space-y-6">
              {/* NAME BOX*/}
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                />
              </div>

              {/* EMAIL ADDRESS BOX */}
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                />
              </div>

              {/* MESSAGE BOX */}
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  type="text"
                  placeholder="Message"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                />
              </div>

              {/* BUTTON  */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-dark-100 rounded-xl font-semibold hover:bg-sky-600 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <FaPaperPlane />

                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-5 flex items-start gap-4">
              <div className="text-dark-400 text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400 hover:text-sky-400">
                  Ayodhya, Uttar Pradesh, India
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-5 flex items-start gap-4">
              <div className="text-dark-400 text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a
                  href="mailto:rahulyadav40777@gmail.com"
                  className="text-gray-400 hover:text-sky-400"
                >
                  rahulyadav40777@gmail.com
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-5 flex items-start gap-4">
              <div className="text-dark-400 text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a
                  href="tel:+917080XXXXXX"
                  className="text-gray-400 hover:text-sky-400"
                >
                  +91 7080******
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4 glass rounded-2xl p-5 flex items-start gap-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-gray-900 hover:bg-black hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://Linkedin.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300"
                >
                  <FaTwitter />
                </a>

                <a
                  href="https://Twiter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink-400 hover:bg-pink-400 hover:text-white transition duration-300"
                >
                  <FaDribbble />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
