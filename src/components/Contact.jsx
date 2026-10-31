// import React from 'react'
import { motion } from "framer-motion";
import { useState } from "react";

import { validateContact } from "../validation/contact.schema";
import { submitContactForm } from "../services/contact.service";
import { FaPaperPlane } from "react-icons/fa";
import { FaDribbble, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import monkey from "../assets/monkeyImg.png";

import { User, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccess("");
  };
  // ---------------------
  //
  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setSuccess("");

    // Step 1: Validate
    const validationErrors = validateContact(formData);

    // Step 2: Agar validation fail
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      // Step 3: EmailJS
      await submitContactForm(formData);

      // Step 4: Success
      setSuccess("Message sent successfully!");

      // Step 5: Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setErrors({
        form: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };
  // --------------------------
  //
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-100 dark:bg-[#080808] text-gray-900 dark:text-white px-3 sm:px-5 lg:px-8 py-16 sm:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="theme-heading text-3xl font-black text-center mb-4">
          Get In <span className="text-yellow-300">Touch</span>
        </h2>
        <p className="theme-text text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's Talk!
        </p>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* CONTACT FORM */}
          <div className="theme-bg3 glass rounded-3xl border border-gray-300 dark:border-gray-950 dark:bg-black/25 p-6 ">
            {/* monkey PNG */}
            <motion.img
              src={monkey}
              alt="Cute monkey"
              className="absolute z-20 pointer-events-none w-25 sm:w-32 md:w-40 lg:w-48 left-1/2 -translate-x-1/2 -top-16 sm:-top-18 md:-top-24 lg:-top-30
               scale-x-[-1]"
            />
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME BOX*/}
              <div>
                <label
                  htmlFor="name"
                  className="theme-heading flex items-center gap-2 text-gray-300 mb-2"
                >
                  <User size={20} className="text-gray-600 dark:text-gray-300 shrink-0" />
                  <span>Your Name</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="theme-text theme-bg w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 resize-none placeholder:text-gray-400"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              {/* EMAIL ADDRESS BOX */}
              <div>
                <label
                  htmlFor="email"
                  className="  theme-heading text-gray-300 mb-2 flex items-center gap-2"
                >
                  <Mail size={20} className="text-gray-600 dark:text-gray-300 shrink-0" />
                  <span>Email Address</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="theme-text theme-bg w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 resize-none placeholder:text-gray-400"
                />

                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              {/* MESSAGE BOX */}
              <div>
                <label
                  htmlFor="message"
                  className="theme-heading text-gray-300 mb-2 flex items-center gap-2"
                >
                  <MessageSquare size={20} className="text-gray-600 dark:text-gray-300 shrink-0" />
                  <span>Your Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="4"
                  className="theme-text theme-bg w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 resize-none placeholder:text-gray-400"
                />

                {errors.message && (
                  <p className="text-red-400 text-sm mt-2">{errors.message}</p>
                )}
              </div>

              {errors.form && (
                <p className="text-red-400 text-sm">{errors.form}</p>
              )}
              {success && <p className="text-green-400 text-sm">{success}</p>}

              {/* BUTTON  */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-black text-white dark:text-black dark:bg-white rounded-xl font-semibold hover:bg-sky-600 transition-all duration-300 hover:scale-[1.02] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <FaPaperPlane className="text-lg" />

                <span>{loading ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>

          {/* CONTACT INFORMATION */}
          <div className=" space-y-8">
            <div className="theme-bg3 glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gray-200/70 dark:bg-white/[0.06] border border-gray-300/70 dark:border-white/[0.08]">
                <FaMapMarkerAlt className="text-gray-600 dark:text-gray-300 text-xl" />
              </div>

              {/* <div className="text-blue-400 text-2xl mr-4">
                <FaMapMarkerAlt />
              </div> */}
              <div>
                <h3 className="theme-heading text-lg font-semibold mb-2">
                  Location
                </h3>
                <p className="theme-text text-gray-400 hover:text-sky-400">
                  Ayodhya, Uttar Pradesh, India
                </p>
              </div>
            </div>

            <div className="theme-bg3 glass rounded-2xl p-6 flex items-start gap-4">

              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gray-200/70 dark:bg-white/[0.06] border border-gray-300/70 dark:border-white/[0.08]">
                <FaEnvelope className="text-gray-600 dark:text-gray-300 text-xl" />
              </div>
              
              <div>
                <h3 className="theme-heading text-lg font-semibold mb-2">
                  Email
                </h3>
                <a
                  href="mailto:rahulyadav40777@gmail.com"
                  className="theme-text text-gray-400 hover:text-sky-400"
                >
                  rahulyadav40777@gmail.com
                </a>
              </div>
            </div>

            <div className="theme-bg3 glass rounded-2xl p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gray-200/70 dark:bg-white/[0.06] border border-gray-300/70 dark:border-white/[0.08]">
                <FaPhone className="text-gray-600 dark:text-gray-300 text-xl" />
              </div>
              <div>
                <h3 className="theme-heading text-lg font-semibold mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+917080137287"
                  className="theme-text text-gray-400 hover:text-sky-400"
                >
                  +91 7080137287
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="theme-bg3 pt-4 glass rounded-2xl p-6 flex items-start gap-4">
              <h3 className="theme-heading text-lg font-semibold mb-4">
                Let's Connect
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ydvrahul160-netizen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-blue-400 hover:bg-black hover:text-white transition duration-300"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="www.linkedin.com/in/rahulyadav-77dev"
                  className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* form end */}
      </div>
    </section>
  );
};

export default Contact;
