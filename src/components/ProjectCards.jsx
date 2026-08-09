import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCards = ({ title, description, image, tech, feature, live }) => {
  return (
    <div className="theme-bg3 glass rounded-3xl overflow-hidden hover:-translate-y-3 transition-all duration-500 cursor-pointer group">
      {/* Image Container */}
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-500"
        />
        {/* Live Badge */}
        {live && (
          <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            Live
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="theme-heading text-lg font-semibold mb-2">{title}</h3>
        <p className="theme-text text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-dark-400 rounded-2xl text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* buttons */}
        <div className="flex gap-2">
          <a
            href="#"
            className="flex-1 text-center px-4 py-2 bg-sky-500 hover:bg-sky-600 text-black rounded-lg font-medium hover:bg-sky-600 transition duration-300"
          >
            View Demo
          </a>
          <a
            href="demo"
            target="_blank"
            rel="noopener noreferrer"
            className="theme-heading theme-bg2 flex-1 text-center px-4 py-2 border border-sky-300 font-medium rounded-lg hover:bg-white-10"
          >
            GitHub
            {/* <FaGithub /> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
