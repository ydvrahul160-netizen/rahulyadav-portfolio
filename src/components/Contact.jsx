// import React from 'react'
import { motion } from "framer-motion";
import { useState } from "react";

import { validateContact } from "../validation/contact.schema";
import { submitContactForm } from "../services/contact.service";
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.05 }}
      id="contact"
      className="grid-bg2 theme-bg relative py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="theme-heading text-3xl font-black text-center mb-4">
          Get In <span className="text-yellow-300">Touch</span>
        </h2>
        <p className="theme-text text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's Talk!
        </p>

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* CONTACT FORM */}
          <div className="theme-bg2 glass rounded-3xl border border-white/10 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME BOX*/}
              <div>
                <label
                  htmlFor="name"
                  className=" theme-heading block text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="theme-text theme-bg w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 resize-none placeholder:text-gray-400"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              {/* EMAIL ADDRESS BOX */}
              <div>
                <label
                  htmlFor="email"
                  className=" theme-heading block text-gray-300 mb-2"
                >
                  Email Address
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
                  className="theme-heading block text-gray-300 mb-2"
                >
                  Your Message
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
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gray-700 rounded-xl font-semibold hover:bg-sky-600 transition-all duration-300 hover:scale-[1.02] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <FaPaperPlane className="text-lg" />

                <span>{loading ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>

          {/* CONTACT INFORMATION */}
          <div className=" space-y-8">
            <div className="theme-bg2 glass rounded-2xl p-6 flex items-start gap-4">
              <div className="text-dark-400 text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="theme-heading text-lg font-semibold mb-2">
                  Location
                </h3>
                <p className="theme-text text-gray-400 hover:text-sky-400">
                  Ayodhya, Uttar Pradesh, India
                </p>
              </div>
            </div>

            <div className="theme-bg2 glass rounded-2xl p-6 flex items-start gap-4">
              <div className="text-dark-400 text-2xl mr-4">
                <FaEnvelope />
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

            <div className="theme-bg2 glass rounded-2xl p-6 flex items-start gap-4">
              <div className="text-dark-400 text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="theme-heading text-lg font-semibold mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+917080XXXXXX"
                  className="theme-text text-gray-400 hover:text-sky-400"
                >
                  +91 7080137287
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="theme-bg2 pt-4 glass rounded-2xl p-6 flex items-start gap-4">
              <h3 className="theme-heading text-lg font-semibold mb-4">
                Let's Connect
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ydvrahul160-netizen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-gray-900 hover:bg-black hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="www.linkedin.com/in/rahulyadav-77dev"
                  className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* form end */}
      </div>
    </motion.div>
  );
};

export default Contact;
